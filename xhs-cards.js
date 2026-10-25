// 小红书图文卡片：把 Markdown 渲染结果按 3:4 卡片分页，并导出 PNG。
//
// 尺寸照参考卡片量出来：1080×1440，两侧 76px，行距 60px（段间空一整行），一行约 24 个汉字，思源宋体。
// 分页规则（默认「整段不拆」）：放不下的段落整段挪到下一张；只有一段比整张卡片还长时才拆开。
// 「铺满」模式下每张尽量填满，段落可以跨页。两种模式都保证：标题不落在卡片底部、拆开的段落前一张至少两行、行首不出现标点。
//
// Markdown 对应：
//   # / ## / ### …  标题（字号递减，加粗）       **加粗**  粗体 + 黄色荧光笔底色
//   *斜体*          斜体 + 灰色                   ~~删除线~~  删除线
//   `代码`          等宽 + 浅底                   [链接](url) 文字 + 下划线（图片里点不了）
//   - / 1.          列表（支持嵌套）              > 引用      左侧细线 + 灰字
//   ```代码块```    浅底等宽，可跨页              表格        可按行跨页，续页重复表头
//   ![说明](图)     整宽图片，说明文字显示在图片下方（自动文件名不显示）
//   ---             居中的 ///                    单独一段 END  居中的 - END -
//   <!-- 分页 -->   手动换页（公众号文章里看不见）
//
// 所有样式都写成行内样式；导出用 html-to-image（浏览器自己绘制，和预览一致），字体只嵌入用到的字的分片。
(function (global) {
  const SERIF = '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", serif';
  const MONO = '"SF Mono", Menlo, Consolas, "Courier New", monospace';
  const FONT_FAMILY = 'Noto Serif SC';
  const FONT_CSS_URL = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;900&display=swap';

  const CARD = {
    width: 1080,
    height: 1440,
    padX: 76,
    padTop: 112,
    padBottom: 104,
    gap: 60,              // 段与段之间 = 一个行高
    bg: '#f9faf5',
    ink: '#1f1f1f',
    body: '#2b2b2b',
    mute: '#8a8a85',
    line: '#dedfd8',
    marker: '#ffe680',    // 加粗的荧光笔底色
    maxCards: 18          // 小红书一篇最多 18 张图
  };

  const TEXT = `font-size: 38px; line-height: 60px; font-weight: 500; letter-spacing: 0.5px; color: ${CARD.body};`;
  const S = {
    p: `margin: 0; ${TEXT} text-align: justify;`,
    h1: `margin: 0; font-size: 48px; line-height: 72px; font-weight: 900; color: ${CARD.ink}; letter-spacing: 1px;`,
    h2: `margin: 0; font-size: 44px; line-height: 64px; font-weight: 900; color: ${CARD.ink}; letter-spacing: 0.5px;`,
    h3: `margin: 0; font-size: 40px; line-height: 60px; font-weight: 900; color: ${CARD.ink}; letter-spacing: 0.5px;`,
    h4: `margin: 0; font-size: 38px; line-height: 60px; font-weight: 900; color: ${CARD.body}; letter-spacing: 0.5px;`,
    // 荧光笔只铺在文字下半截；用渐变而不是 background-color，跨行时每一行都画得对
    strong: `font-weight: 900; color: ${CARD.ink}; background: linear-gradient(transparent 58%, ${CARD.marker} 58%);`,
    em: 'font-style: italic; color: #5a5a55;',
    del: `text-decoration: line-through; color: ${CARD.mute};`,
    code: `font-family: ${MONO}; font-size: 0.82em; background: #eeefe8; padding: 2px 8px; border-radius: 6px; letter-spacing: 0;`,
    link: `color: ${CARD.ink}; border-bottom: 2px solid #c9c9c0;`,
    li: `display: flex; margin: 0; ${TEXT}`,
    liFollow: 'margin-top: -32px;',          // 同一列表的相邻条目不空整行
    liMark: `flex: 0 0 44px; height: 60px; display: flex; align-items: center; color: ${CARD.body};`,
    liDot: `display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: ${CARD.body};`,
    liCircle: `display: inline-block; width: 8px; height: 8px; border-radius: 50%; border: 2px solid ${CARD.body};`,
    quote: `margin: 0; padding-left: 28px; border-left: 4px solid ${CARD.line}; font-size: 36px; line-height: 60px; font-weight: 500; letter-spacing: 0.5px; color: #66665f; text-align: justify;`,
    pre: `margin: 0; padding: 28px 32px; background: #f0f1ea; border-radius: 12px; font-family: ${MONO}; font-size: 26px; line-height: 42px; color: #333; white-space: pre-wrap; word-break: break-all; letter-spacing: 0;`,
    table: `width: 100%; border-collapse: collapse; font-size: 30px; line-height: 46px; font-weight: 500; color: ${CARD.body}; border-top: 3px solid ${CARD.ink}; border-bottom: 3px solid ${CARD.ink};`,
    th: `text-align: left; padding: 14px 12px; font-weight: 900; color: ${CARD.ink}; border-bottom: 2px solid ${CARD.ink};`,
    td: `text-align: left; padding: 14px 12px; border-bottom: 1px solid ${CARD.line}; vertical-align: top;`,
    figure: 'margin: 0; display: flex; flex-direction: column; align-items: center; gap: 18px;',
    img: 'display: block; max-width: 100%; max-height: 1080px; width: auto; height: auto; border-radius: 12px;',
    caption: `margin: 0; font-size: 28px; line-height: 42px; font-weight: 500; color: ${CARD.mute}; text-align: center; letter-spacing: 0.5px;`,
    sep: `margin: 0; text-align: center; font-size: 34px; line-height: 60px; letter-spacing: 4px; color: ${CARD.mute};`,
    end: `margin: 0; text-align: center; font-size: 36px; line-height: 60px; font-weight: 900; letter-spacing: 2px; color: ${CARD.ink};`
  };

  const PAGE_BREAK = /^\s*分页\s*$/;
  // 粘贴/拖入的图片会自动带上文件名，这种不当作图片说明
  const AUTO_IMG_NAME = /^(图片|image|img|pasted|screenshot|截图|截屏|屏幕截图|微信图片|dsc|photo)([\s_\-.]|\d|$)/i;
  // 行首不能是这些标点
  const NO_LINE_START = /^[，。、！？；：,.!?;:）)」』”’》〉】…—]/;

  // ---------- markdown-it 输出 → 块列表 ----------
  function toBlocks(html) {
    const doc = document.implementation.createHTMLDocument('');
    const root = doc.createElement('div');
    root.innerHTML = html;
    const blocks = [];
    const notes = { externalImages: 0 };

    const make = (tag, style, inner) => {
      const el = document.createElement(tag);
      if (style) el.setAttribute('style', style);
      if (inner !== undefined) el.innerHTML = inner;
      return el;
    };
    // 行内格式：加粗、斜体、删除线、代码、链接；去掉多余属性
    const styleInline = (el) => {
      el.querySelectorAll('[data-source-line]').forEach((n) => n.removeAttribute('data-source-line'));
      el.querySelectorAll('strong, b').forEach((n) => n.setAttribute('style', S.strong));
      el.querySelectorAll('em, i').forEach((n) => n.setAttribute('style', S.em));
      el.querySelectorAll('del, s').forEach((n) => n.setAttribute('style', S.del));
      el.querySelectorAll('code').forEach((n) => n.setAttribute('style', S.code));
      el.querySelectorAll('a').forEach((n) => {
        const span = document.createElement('span');
        span.setAttribute('style', S.link);
        span.innerHTML = n.innerHTML;
        n.replaceWith(span);
      });
      el.querySelectorAll('br').forEach((n) => n.replaceWith(document.createTextNode(' ')));
      return el;
    };
    const push = (type, el, extra) => blocks.push(Object.assign({ type, el }, extra || {}));

    const imageBlock = (img) => {
      const src = img.getAttribute('src') || '';
      if (/^https?:/i.test(src) && !src.startsWith(location.origin)) notes.externalImages++;
      const fig = make('div', S.figure);
      const pic = make('img', S.img);
      // 外链图片要带跨域请求，导出时才能画进图片（对方不允许跨域时，导出的图里这张会是空白）
      if (/^https?:/i.test(src) && !src.startsWith(location.origin)) pic.crossOrigin = 'anonymous';
      pic.src = src;
      fig.appendChild(pic);
      const alt = (img.getAttribute('alt') || '').trim();
      if (alt && !AUTO_IMG_NAME.test(alt)) fig.appendChild(make('p', S.caption, escapeHtml(alt)));
      push('img', fig);
    };

    // 列表：逐条拆成块，嵌套列表按层级缩进
    const listBlocks = (list, level) => {
      const ordered = list.tagName === 'OL';
      const start = parseInt(list.getAttribute('start') || '1', 10);
      Array.from(list.children).forEach((li, i) => {
        const nested = Array.from(li.children).filter((c) => c.tagName === 'UL' || c.tagName === 'OL');
        nested.forEach((n) => n.remove());
        const imgs = Array.from(li.querySelectorAll('img'));
        imgs.forEach((n) => n.remove());
        const row = make('div', S.li + (level ? `padding-left: ${level * 44}px;` : ''));
        const mark = ordered ? `${start + i}.` : `<span style="${level ? S.liCircle : S.liDot}"></span>`;
        row.appendChild(make('span', S.liMark, mark));
        const inner = li.innerHTML.replace(/<\/?p[^>]*>/g, ' ').trim();
        const body = styleInline(make('span', 'flex: 1; min-width: 0; text-align: justify;', inner));
        row.appendChild(body);
        if (i > 0 || level > 0) { row.setAttribute('style', row.getAttribute('style') + S.liFollow); row.setAttribute('data-follow', '1'); }
        if (body.textContent.trim()) push('li', row, { splittable: true, textHost: body });
        imgs.forEach(imageBlock);
        nested.forEach((n) => listBlocks(n, level + 1));
      });
    };

    const tableBlock = (table) => {
      const t = make('table', S.table);
      const head = table.querySelector('thead tr');
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const cell = (c, isHead) => {
        const el = styleInline(make(isHead ? 'th' : 'td', isHead ? S.th : S.td, c.innerHTML));
        const align = c.getAttribute('style') && c.getAttribute('style').match(/text-align:\s*(\w+)/);
        if (align) el.style.textAlign = align[1];
        return el;
      };
      if (head) {
        const thead = make('thead'); const tr = make('tr');
        Array.from(head.children).forEach((c) => tr.appendChild(cell(c, true)));
        thead.appendChild(tr); t.appendChild(thead);
      }
      const tbody = make('tbody');
      rows.forEach((r) => { const tr = make('tr'); Array.from(r.children).forEach((c) => tr.appendChild(cell(c, false))); tbody.appendChild(tr); });
      t.appendChild(tbody);
      push('table', t, { splittable: true });
    };

    const walk = (node) => {
      if (node.nodeType === 8) { if (PAGE_BREAK.test(node.nodeValue)) blocks.push({ type: 'break' }); return; }
      if (node.nodeType !== 1) { if (node.nodeType === 3 && node.nodeValue.trim()) push('p', styleInline(make('p', S.p, escapeHtml(node.nodeValue.trim()))), { splittable: true }); return; }
      const tag = node.tagName.toLowerCase();
      if (tag === 'p') {
        const imgs = Array.from(node.querySelectorAll('img'));
        imgs.forEach((n) => n.remove());
        const text = node.textContent.trim();
        if (text.toUpperCase() === 'END' && !imgs.length) { push('end', make('p', S.end, '- END -')); return; }
        if (text) push('p', styleInline(make('p', S.p, node.innerHTML)), { splittable: true });
        imgs.forEach(imageBlock);
      } else if (/^h[1-6]$/.test(tag)) {
        const style = tag === 'h1' ? S.h1 : tag === 'h2' ? S.h2 : tag === 'h3' ? S.h3 : S.h4;
        push('h', styleInline(make('p', style, node.innerHTML)));
      } else if (tag === 'ul' || tag === 'ol') {
        listBlocks(node, 0);
      } else if (tag === 'blockquote') {
        Array.from(node.children).forEach((c) => {
          if (c.tagName === 'BLOCKQUOTE') { walk(c); return; }
          const text = c.textContent.trim();
          if (text) push('quote', styleInline(make('p', S.quote, c.tagName === 'P' ? c.innerHTML : escapeHtml(text))), { splittable: true });
        });
      } else if (tag === 'pre' || node.querySelector('pre')) {
        const el = make('pre', S.pre);
        el.textContent = node.textContent.replace(/\n$/, '');
        push('pre', el, { splittable: true });
      } else if (tag === 'hr') {
        push('sep', make('p', S.sep, '///'));
      } else if (tag === 'table') {
        tableBlock(node);
      } else if (tag === 'img') {
        imageBlock(node);
      } else if (tag === 'div' || tag === 'section') {
        Array.from(node.childNodes).forEach(walk);
      } else {
        const text = node.textContent.trim();
        if (text) push('p', styleInline(make('p', S.p, node.innerHTML)), { splittable: true });
      }
    };
    Array.from(root.childNodes).forEach(walk);
    blocks.forEach((b) => { if (b.el) b.el.setAttribute('data-kind', b.type); });
    return { blocks, notes };
  }

  // ---------- 按字数切开一段文字，保留行内格式 ----------
  function sliceByChars(el, from, to) {
    const clone = el.cloneNode(true);
    let pos = 0;
    const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    texts.forEach((t) => {
      const len = t.nodeValue.length;
      const s = Math.max(0, from - pos), e = Math.min(len, to - pos);
      t.nodeValue = e > s ? t.nodeValue.slice(s, e) : '';
      pos += len;
    });
    return clone;
  }

  // 表格按行切开，续页重复表头
  function sliceTable(table, from, to) {
    const clone = table.cloneNode(true);
    const rows = Array.from(clone.querySelectorAll('tbody tr'));
    rows.forEach((r, i) => { if (i < from || i >= to) r.remove(); });
    return clone;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // ---------- 卡片外壳 ----------
  function cardShell(header) {
    const card = document.createElement('div');
    card.className = 'xhs-card';
    card.setAttribute('style',
      `position: relative; box-sizing: border-box; width: ${CARD.width}px; height: ${CARD.height}px; overflow: hidden; ` +
      `padding: ${CARD.padTop}px ${CARD.padX}px ${CARD.padBottom}px; background: ${CARD.bg}; font-family: ${SERIF}; ` +
      'display: flex; flex-direction: column; -webkit-font-smoothing: antialiased;');
    if (header) {
      const h = document.createElement('div');
      h.setAttribute('style', 'display: flex; align-items: center; gap: 28px; margin: -20px 0 84px; flex: 0 0 auto;');
      if (header.avatar) {
        const img = document.createElement('img');
        img.src = header.avatar;
        img.setAttribute('style', 'width: 108px; height: 108px; border-radius: 50%; object-fit: cover; display: block; flex: 0 0 auto;');
        h.appendChild(img);
      }
      const meta = document.createElement('div');
      meta.innerHTML =
        `<div style="font-size: 40px; line-height: 52px; font-weight: 900; color: ${CARD.ink};">${escapeHtml(header.name || '')}</div>` +
        (header.date ? `<div style="font-size: 30px; line-height: 44px; color: ${CARD.mute}; font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;">${escapeHtml(header.date)}</div>` : '');
      h.appendChild(meta);
      card.appendChild(h);
    }
    const body = document.createElement('div');
    body.setAttribute('style', `position: relative; flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: ${CARD.gap}px;`);
    card.appendChild(body);
    return { card, body };
  }

  // ---------- 分页 ----------
  // host：已挂在页面上的容器（可以不可见），卡片在里面排版测量
  async function paginate(html, opts, host) {
    const { blocks, notes } = toBlocks(html);
    const mode = opts.mode || 'whole';

    // 图片先加载完，才能量出真实高度
    const imgs = [];
    blocks.forEach((b) => { if (b.type === 'img') imgs.push(b.el.querySelector('img')); });
    let brokenImages = 0;
    await Promise.all(imgs.map((img) => img.decode().catch(() => { brokenImages++; })));
    if (opts.header && opts.header.avatar) await new Promise((r) => { const a = new Image(); a.onload = a.onerror = r; a.src = opts.header.avatar; });

    const cards = [];
    let cur = null;
    const newCard = () => {
      const shell = cardShell(cards.length === 0 ? opts.header : null);
      host.appendChild(shell.card);
      cards.push(shell.card);
      cur = shell;
    };
    // 量最后一个元素的底边（scrollHeight 在没溢出时就等于容器高度，不能直接比）。
    // 留 4px 余量：导出时浏览器重新排版，偶尔会有一两像素的差别
    const fits = () => {
      const last = cur.body.lastElementChild;
      if (!last) return true;
      return last.offsetTop + last.offsetHeight <= cur.body.clientHeight - 4;
    };
    const isEmpty = () => cur.body.children.length === 0;
    // 卡片里只有标题、还没有正文：这时放不下的段落应该拆开放，而不是再换一张（否则标题会单独占一张）
    const onlyHeadings = () => Array.from(cur.body.children).every((c) => c.getAttribute('data-kind') === 'h');
    const minHeadChars = 48; // 拆段时前一张至少放两行左右

    const piece = (block, from, to, continued) => {
      if (block.type === 'table') return sliceTable(block.el, from, to);
      if (block.textHost) {
        const row = block.el.cloneNode(false);
        const mark = block.el.firstChild.cloneNode(true);
        if (continued) mark.innerHTML = '';
        row.appendChild(mark);
        row.appendChild(sliceByChars(block.textHost, from, to));
        return row;
      }
      return sliceByChars(block.el, from, to);
    };
    const unitCount = (block) => block.type === 'table'
      ? block.el.querySelectorAll('tbody tr').length
      : (block.textHost || block.el).textContent.length;

    // 尽量多地把一个可拆的块放进当前卡片，返回剩下的部分；放不下返回原块；全放下返回 null
    const placePartial = (block) => {
      const total = unitCount(block);
      let lo = 1, hi = total, best = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const p = piece(block, 0, mid);
        cur.body.appendChild(p);
        const ok = fits();
        p.remove();
        if (ok) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
      }
      if (block.type !== 'table') {
        const text = (block.textHost || block.el).textContent;
        if (best < minHeadChars && best < total && !onlyHeadings()) return block;
        while (best > 0 && best < total && NO_LINE_START.test(text.slice(best))) best--;
      }
      if (best <= 0) return block;
      cur.body.appendChild(piece(block, 0, best));
      if (best >= total) return null;
      const rest = piece(block, best, total, true);
      if (rest.getAttribute('data-follow')) rest.style.marginTop = '0';
      return Object.assign({}, block, { el: rest, textHost: block.textHost ? rest.lastChild : null });
    };

    newCard();
    const queue = blocks.slice();
    while (queue.length) {
      const block = queue.shift();
      if (block.type === 'break') { if (!isEmpty()) newCard(); continue; }
      // 分隔线落在卡片开头没有意义（换页本身就是分隔），直接略过
      if (block.type === 'sep' && isEmpty()) continue;

      if (isEmpty() && block.el.getAttribute('data-follow')) block.el.style.marginTop = '0';
      cur.body.appendChild(block.el);
      if (fits()) continue;
      block.el.remove();

      if (block.splittable && (mode === 'fill' || onlyHeadings())) {
        const rest = placePartial(block);
        if (rest === null) continue;
        if (rest !== block) { newCard(); queue.unshift(rest); continue; }
      }
      // 不可拆又比整张卡高（比如很长的图）：缩到一张卡片的高度
      if (isEmpty()) {
        if (block.type === 'img') {
          const img = block.el.querySelector('img');
          const capH = block.el.children.length > 1 ? 60 : 0;
          img.style.maxHeight = `${cur.body.clientHeight - capH - 8}px`;
        }
        cur.body.appendChild(block.el);
        continue;
      }

      // 标题不留在卡片底部：末尾连续的标题一起带到下一张；末尾的分隔线去掉
      const prevBody = cur.body;
      const carry = [];
      while (prevBody.children.length > 1 && prevBody.lastElementChild.getAttribute('data-kind') === 'h') {
        carry.unshift(prevBody.lastElementChild);
        prevBody.lastElementChild.remove();
      }
      if (prevBody.children.length > 1 && prevBody.lastElementChild.getAttribute('data-kind') === 'sep') prevBody.lastElementChild.remove();
      newCard();
      carry.forEach((h) => cur.body.appendChild(h));
      if (block.el.getAttribute('data-follow')) block.el.style.marginTop = isEmpty() ? '0' : '';
      queue.unshift(block);
    }
    if (cards.length > 1 && cur.body.children.length === 0) { cur.card.remove(); cards.pop(); }
    return { cards, notes: Object.assign(notes, { brokenImages, overLimit: cards.length > CARD.maxCards }) };
  }

  // ---------- 字体 ----------
  let fontLinkPromise = null;
  function ensureFont() {
    if (!fontLinkPromise) {
      fontLinkPromise = new Promise((resolve) => {
        const existing = document.getElementById('xhs-font-css');
        if (existing) { resolve(); return; }
        const link = document.createElement('link');
        link.id = 'xhs-font-css';
        link.rel = 'stylesheet';
        link.crossOrigin = 'anonymous'; // 导出时要读字体规则，需要跨域许可
        link.href = global.XHS_FONT_CSS_URL || FONT_CSS_URL;
        link.onload = link.onerror = () => resolve();
        document.head.appendChild(link);
      });
    }
    return fontLinkPromise;
  }
  // 先把文章里用到的字所在的字体分片都下载好，再排版
  async function loadFontFor(text) {
    await ensureFont();
    const sample = text.slice(0, 20000) || '中';
    try {
      await Promise.all([
        document.fonts.load(`500 38px "${FONT_FAMILY}"`, sample),
        document.fonts.load(`900 38px "${FONT_FAMILY}"`, sample)
      ]);
    } catch (e) { /* 字体没加载到就用系统宋体兜底 */ }
    return document.fonts.check(`500 38px "${FONT_FAMILY}"`, '中');
  }

  // 只嵌入卡片里出现过的字所在的分片（思源宋体按 unicode-range 切成上百片，全嵌入太大）
  const fontDataCache = new Map();
  function parseRanges(str) {
    return (str || 'U+0-10FFFF').split(',').map((s) => {
      const m = s.trim().replace(/^U\+/i, '').split('-');
      const a = parseInt(m[0].replace(/\?/g, '0'), 16);
      const b = m[1] ? parseInt(m[1], 16) : parseInt(m[0].replace(/\?/g, 'F'), 16);
      return [a, b];
    });
  }
  async function fileToDataURL(url) {
    if (fontDataCache.has(url)) return fontDataCache.get(url);
    const p = fetch(url, { mode: 'cors' }).then((r) => r.blob()).then((blob) => new Promise((resolve) => {
      const fr = new FileReader(); fr.onload = () => resolve(fr.result); fr.readAsDataURL(blob);
    }));
    fontDataCache.set(url, p);
    return p;
  }
  async function buildFontEmbedCSS(text) {
    const codes = Array.from(new Set(Array.from(text).map((c) => c.codePointAt(0))));
    const out = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let rules;
      try { rules = sheet.cssRules; } catch (e) { continue; }
      for (const rule of Array.from(rules)) {
        if (!(rule instanceof CSSFontFaceRule)) continue;
        if (!rule.style.getPropertyValue('font-family').includes(FONT_FAMILY)) continue;
        const range = rule.style.getPropertyValue('unicode-range');
        const ranges = parseRanges(range);
        if (!codes.some((c) => ranges.some(([a, b]) => c >= a && c <= b))) continue;
        const m = rule.style.getPropertyValue('src').match(/url\(["']?([^"')]+)["']?\)/);
        if (!m) continue;
        try {
          const data = await fileToDataURL(new URL(m[1], sheet.href || location.href).href);
          out.push(`@font-face{font-family:"${FONT_FAMILY}";font-style:normal;font-weight:${rule.style.getPropertyValue('font-weight')};src:url(${data}) format("woff2");${range ? `unicode-range:${range};` : ''}}`);
        } catch (e) { /* 某个分片取不到就跳过 */ }
      }
    }
    return out.join('\n');
  }

  // ---------- 导出 ----------
  let embedCSSCache = { key: '', css: '' };
  async function exportCard(card, allCards) {
    if (!global.htmlToImage) throw new Error('导出组件没有加载');
    const text = (allCards || [card]).map((c) => c.textContent).join('');
    const key = text.length + ':' + text.slice(0, 64);
    if (embedCSSCache.key !== key) embedCSSCache = { key, css: await buildFontEmbedCSS(text) };
    return global.htmlToImage.toBlob(card, {
      width: CARD.width,
      height: CARD.height,
      pixelRatio: 1,
      backgroundColor: CARD.bg,
      style: { transform: 'none', position: 'static' },   // 缩略图里的缩放不带进导出的图片
      fontEmbedCSS: embedCSSCache.css,
      cacheBust: false
    });
  }

  global.XhsCards = { CARD, paginate, loadFontFor, exportCard };
})(window);
