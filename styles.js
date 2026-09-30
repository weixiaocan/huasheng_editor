// 样式配置
const STYLES = {
  'wechat-default': {
    name: '默认公众号风格',
    styles: {
      container: 'max-width: 740px; margin: 0 auto; padding: 10px 12px 20px 12px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 1.8 !important; color: #3f3f3f !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 24px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #3498db;',
      h2: 'font-size: 22px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 12px; border-left: 4px solid #3498db;',
      h3: 'font-size: 20px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 24px 0 12px;',
      h4: 'font-size: 18px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 20px 0 10px;',
      h5: 'font-size: 17px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 18px 0 9px;',
      h6: 'font-size: 16px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 16px 0 8px;',
      p: 'margin: 16px 0 !important; line-height: 1.8 !important; color: #3f3f3f !important;',
      strong: 'font-weight: 600; color: #2c3e50 !important;',
      em: 'font-style: italic; color: #555 !important;',
      a: 'color: #3498db !important; text-decoration: none; border-bottom: 1px solid #3498db;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 8px 0; line-height: 1.8 !important;',
      blockquote: 'margin: 16px 0; padding: 8px 16px; background-color: #fafafa !important; border-left: 3px solid #999; color: #666 !important; line-height: 1.5 !important;',
      code: 'font-family: Consolas, Monaco, "Courier New", monospace; font-size: 14px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #e74c3c !important; border-radius: 3px;',
      pre: 'margin: 20px 0; padding: 16px; background-color: #2d2d2d !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 32px 0; border: none; border-top: 1px solid #e0e0e0;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 20px auto; border-radius: 8px;',
      table: 'width: 100%; margin: 20px 0; border-collapse: collapse; font-size: 15px;',
      th: 'background-color: #f0f0f0 !important; padding: 10px; text-align: left; border: 1px solid #e0e0e0; font-weight: 600;',
      td: 'padding: 10px; border: 1px solid #e0e0e0;',
      tr: 'border-bottom: 1px solid #e0e0e0;',
    }
  },

  'latepost-depth': {
    name: '晚点风格',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 16px 12px 36px 12px; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; font-size: 17px; line-height: 1.8 !important; color: #1a1a1a !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 26px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 36px 0 18px; padding-left: 16px; border-left: 5px solid #d32f2f; position: relative;',
      h2: 'font-size: 20px; font-weight: 600; color: #fff !important; line-height: 1.4 !important; margin: 32px 0 16px; padding: 12px 20px; background-color: #d32f2f !important; border-radius: 4px; position: relative;',
      h3: 'font-size: 18px; font-weight: 600; color: #d32f2f !important; line-height: 1.45 !important; margin: 28px 0 14px; padding-left: 14px; border-left: 4px solid #d32f2f; position: relative;',
      h4: 'font-size: 17px; font-weight: 600; color: #1a1a1a !important; line-height: 1.5 !important; margin: 24px 0 12px; padding: 6px 10px; background-color: #f5f5f5 !important; border-left: 3px solid #ff5252;',
      h5: 'font-size: 16px; font-weight: 600; color: #333 !important; line-height: 1.5 !important; margin: 20px 0 10px;',
      h6: 'font-size: 15px; font-weight: 500; color: #666 !important; line-height: 1.5 !important; margin: 18px 0 9px;',
      p: 'margin: 18px 0 !important; line-height: 1.85 !important; color: #1a1a1a !important;',
      strong: 'font-weight: 700; color: #d32f2f !important; background-color: rgba(211, 47, 47, 0.08) !important; padding: 2px 6px; border-radius: 3px;',
      em: 'font-style: italic; color: #666 !important;',
      a: 'color: #d32f2f !important; text-decoration: none; border-bottom: 1px solid #d32f2f;',
      ul: 'margin: 20px 0; padding-left: 28px; list-style-type: disc;',
      ol: 'margin: 20px 0; padding-left: 28px; list-style-type: decimal;',
      li: 'margin: 10px 0; line-height: 1.8 !important; color: #1a1a1a !important;',
      blockquote: 'margin: 20px 0; padding: 12px 18px; background-color: #f5f5f5 !important; border-left: 4px solid #d32f2f; color: #1a1a1a !important; font-size: 16px; line-height: 1.6 !important; position: relative; border-radius: 4px;',
      code: 'font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 15px; padding: 3px 8px; background-color: #f5f5f5 !important; color: #d32f2f !important; border-radius: 4px; font-weight: 500;',
      pre: 'margin: 24px 0; padding: 18px; background-color: #2a2a2a !important; color: #f5f5f5 !important; border-radius: 6px; overflow-x: auto; line-height: 1.6 !important; border-left: 4px solid #d32f2f;',
      hr: 'margin: 36px auto; border: none; height: 2px; background: linear-gradient(to right, transparent, #d32f2f, transparent); max-width: 200px;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 24px auto; border-radius: 6px; border: 2px solid #d32f2f; box-shadow: 0 4px 12px rgba(211, 47, 47, 0.12);',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 16px; border-radius: 6px; overflow: hidden;',
      th: 'background-color: #d32f2f !important; color: #fff !important; padding: 10px 14px; text-align: left; font-weight: 600; border: none;',
      td: 'padding: 10px 14px; border: none; border-bottom: 1px solid #e0e0e0; color: #1a1a1a !important; background-color: #fff !important;',
      tr: 'border-bottom: 1px solid #e0e0e0;',
    }
  },

  'wechat-ft': {
    name: '金融时报',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 16px 20px 40px 20px; font-family: Georgia, "Times New Roman", Times, serif; font-size: 17px; line-height: 1.75 !important; color: #33302e !important; background-color: #fff1e5 !important; word-wrap: break-word;',
      h1: 'font-size: 38px; font-weight: 600; color: #000 !important; line-height: 1.2 !important; margin: 56px 0 24px; font-family: Georgia, serif; letter-spacing: -0.01em; border-bottom: 4px solid #990f3d; padding-bottom: 16px;',
      h2: 'font-size: 30px; font-weight: 600; color: #990f3d !important; line-height: 1.3 !important; margin: 48px 0 20px; font-family: Georgia, serif; border-left: 6px solid #990f3d; padding-left: 20px;',
      h3: 'font-size: 24px; font-weight: 600; color: #33302e !important; line-height: 1.4 !important; margin: 40px 0 16px; font-family: Georgia, serif; border-bottom: 2px solid #cec6b9; padding-bottom: 8px;',
      h4: 'font-size: 20px; font-weight: 600; color: #33302e !important; line-height: 1.5 !important; margin: 32px 0 12px; font-family: Georgia, serif;',
      h5: 'font-size: 18px; font-weight: 600; color: #33302e !important; line-height: 1.5 !important; margin: 28px 0 12px; font-family: Georgia, serif;',
      h6: 'font-size: 17px; font-weight: 600; color: #33302e !important; line-height: 1.5 !important; margin: 24px 0 10px; font-family: Georgia, serif; font-style: italic;',
      p: 'margin: 20px 0 !important; line-height: 1.75 !important; color: #33302e !important;',
      strong: 'font-weight: 700; color: #990f3d !important;',
      em: 'font-style: italic; color: #33302e !important;',
      a: 'color: #0d7680 !important; text-decoration: none; border-bottom: 2px solid #0d7680; font-weight: 600;',
      ul: 'margin: 24px 0; padding-left: 32px;',
      ol: 'margin: 24px 0; padding-left: 32px;',
      li: 'margin: 12px 0; line-height: 1.75 !important; color: #33302e !important;',
      blockquote: 'margin: 24px 0; padding: 14px 20px; background-color: #fff1e5 !important; color: #990f3d !important; font-size: 17px; line-height: 1.6 !important; font-style: italic; font-family: Georgia, serif; border-left: 6px solid #990f3d; box-shadow: 0 2px 8px rgba(153, 15, 61, 0.1);',
      code: 'font-family: "Courier New", Courier, monospace; font-size: 15px; padding: 3px 8px; background-color: #fff !important; color: #990f3d !important; border: 1px solid #cec6b9; font-weight: 600;',
      pre: 'margin: 28px 0; padding: 24px; background-color: #fff !important; border-left: 4px solid #990f3d; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 48px auto; border: none; height: 2px; background-color: #990f3d !important; max-width: 80px;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 32px auto; border: 3px solid #990f3d;',
      table: 'width: 100%; margin: 32px 0; border-collapse: collapse; font-size: 16px; background-color: #fff !important;',
      th: 'background-color: #990f3d !important; color: #fff !important; padding: 14px 16px; text-align: left; border: 1px solid #990f3d; font-weight: 700; font-family: Georgia, serif;',
      td: 'padding: 14px 16px; border: 1px solid #cec6b9; color: #33302e !important; background-color: #fff !important;',
      tr: 'border-bottom: 1px solid #cec6b9;',
    }
  },

  'wechat-anthropic': {
    name: 'Claude',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 20px 24px 40px 24px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.75 !important; color: #2b2b2b !important; background-color: #faf9f7 !important; word-wrap: break-word; letter-spacing: -0.01em;',
      h1: 'font-size: 32px; font-weight: 600; color: #C15F3C !important; line-height: 1.2 !important; margin: 36px 0 18px; letter-spacing: -0.02em; background: linear-gradient(135deg, #C15F3C 0%, #e97d5b 50%, #CC8B7A 100%); -webkit-background-clip: text; background-clip: text;',
      h2: 'font-size: 26px; font-weight: 600; color: #C15F3C !important; line-height: 1.25 !important; margin: 32px 0 16px; letter-spacing: -0.015em; background: linear-gradient(135deg, #C15F3C 0%, #9DC88D 100%); -webkit-background-clip: text; background-clip: text;',
      h3: 'font-size: 22px; font-weight: 600; color: #2b2b2b !important; line-height: 1.3 !important; margin: 28px 0 14px; letter-spacing: -0.01em;',
      h4: 'font-size: 19px; font-weight: 600; color: #3a3a3a !important; line-height: 1.35 !important; margin: 24px 0 12px; letter-spacing: -0.01em;',
      h5: 'font-size: 17px; font-weight: 600; color: #4a4a4a !important; line-height: 1.4 !important; margin: 20px 0 10px;',
      h6: 'font-size: 16px; font-weight: 600; color: #5a5a5a !important; line-height: 1.45 !important; margin: 18px 0 9px;',
      p: 'margin: 20px 0 !important; line-height: 1.8 !important; color: #2b2b2b !important; font-size: 17px; letter-spacing: -0.005em;',
      strong: 'font-weight: 600; color: #C15F3C !important; background-color: rgba(193, 95, 60, 0.08) !important; padding: 2px 6px; border-radius: 3px;',
      em: 'font-style: italic; color: #5a5a5a !important;',
      a: 'color: #C15F3C !important; text-decoration: none; border-bottom: 1px solid rgba(193, 95, 60, 0.4); font-weight: 500;',
      ul: 'margin: 20px 0; padding-left: 28px;',
      ol: 'margin: 20px 0; padding-left: 28px;',
      li: 'margin: 10px 0; line-height: 1.8 !important; color: #2b2b2b !important; font-size: 17px;',
      blockquote: 'margin: 18px 0; padding: 10px 16px; background: linear-gradient(135deg, rgba(193, 95, 60, 0.06) 0%, rgba(157, 200, 141, 0.06) 100%); border-left: 4px solid #C15F3C; color: #2b2b2b !important; font-size: 17px; line-height: 1.6 !important; font-style: italic; border-radius: 6px;',
      code: 'font-family: "SF Mono", Consolas, Monaco, monospace; font-size: 15px; padding: 2px 6px; background-color: rgba(193, 95, 60, 0.08) !important; color: #C15F3C !important; border-radius: 6px; font-weight: 500; border: 1px solid rgba(193, 95, 60, 0.15);',
      pre: 'margin: 24px 0; padding: 20px; background: linear-gradient(135deg, #2b2b2b 0%, #3a3a3a 100%); color: #f5f5f5 !important; border-radius: 10px; overflow-x: auto; line-height: 1.55 !important; box-shadow: 0 4px 16px rgba(193, 95, 60, 0.12);',
      hr: 'margin: 36px auto; border: none; height: 2px; background: linear-gradient(to right, transparent, rgba(193, 95, 60, 0.3), rgba(157, 200, 141, 0.3), transparent); max-width: 200px;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 24px auto; border-radius: 10px; box-shadow: 0 6px 24px rgba(193, 95, 60, 0.1);',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 16px; border-radius: 8px; overflow: hidden;',
      th: 'background: linear-gradient(135deg, rgba(193, 95, 60, 0.08) 0%, rgba(157, 200, 141, 0.08) 100%); padding: 12px 16px; text-align: left; border: none; font-weight: 600; color: #2b2b2b !important; border-bottom: 2px solid rgba(193, 95, 60, 0.2);',
      td: 'padding: 12px 16px; border: none; border-bottom: 1px solid rgba(193, 95, 60, 0.1); color: #2b2b2b !important;',
      tr: 'border: none;',
    }
  },

  'wechat-tech': {
    name: '技术风格',
    styles: {
      container: 'max-width: 740px; margin: 0 auto; padding: 10px 20px 20px 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 1.75 !important; color: #2c3e50 !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 26px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 36px 0 18px; padding: 0 0 12px; border-bottom: 3px solid #0066cc;',
      h2: 'font-size: 22px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 32px 0 16px; padding-left: 16px; padding-top: 4px; padding-bottom: 4px; border-left: 5px solid #00a67d; background: linear-gradient(to right, #f0f9ff 0%, transparent 100%);',
      h3: 'font-size: 20px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 12px; border-left: 3px solid #ff9800;',
      h4: 'font-size: 18px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 24px 0 12px;',
      h5: 'font-size: 17px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 20px 0 10px;',
      h6: 'font-size: 16px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 18px 0 9px;',
      p: 'margin: 18px 0 !important; line-height: 1.8 !important; color: #3a3a3a !important;',
      strong: 'font-weight: 700; color: #1a1a1a !important; background-color: #fff3cd !important; padding: 2px 4px; border-radius: 8px;',
      em: 'font-style: italic; color: #666 !important;',
      a: 'color: #0066cc !important; text-decoration: none; border-bottom: 1px solid #0066cc;',
      ul: 'margin: 18px 0; padding-left: 28px;',
      ol: 'margin: 18px 0; padding-left: 28px;',
      li: 'margin: 10px 0; line-height: 1.8 !important; color: #3a3a3a !important;',
      blockquote: 'margin: 16px 0; padding: 8px 16px; background-color: #f5f9fc !important; border-left: 3px solid #2196f3; color: #555 !important; line-height: 1.5 !important;',
      code: 'font-family: "Fira Code", Consolas, Monaco, "Courier New", monospace; font-size: 14px; padding: 3px 6px; background-color: #ffe6e6 !important; color: #d63031 !important; border-radius: 8px; font-weight: 500;',
      pre: 'margin: 24px 0; padding: 20px; background-color: #1e1e1e !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.1);',
      hr: 'margin: 36px 0; border: none; height: 2px; background: linear-gradient(to right, transparent, #0066cc, transparent);',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 24px auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 15px; box-shadow: 0 1px 4px rgba(0,0,0,0.1);',
      th: 'background-color: #0066cc !important; color: #fff !important; padding: 12px; text-align: left; border: 1px solid #0052a3; font-weight: 600;',
      td: 'padding: 12px; border: 1px solid #e0e0e0; background-color: #fff !important;',
      tr: 'border-bottom: 1px solid #e0e0e0;',
    }
  },

  'wechat-deepread': {
    name: '深度阅读',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 14px 12px 32px 12px; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.75 !important; color: #1a1a1a !important; background-color: #fff !important; word-wrap: break-word; letter-spacing: 0.01em;',
      h1: 'font-size: 26px; font-weight: 700; color: #0a0a0a !important; line-height: 1.25 !important; margin: 36px 0 18px; letter-spacing: -0.02em;',
      h2: 'font-size: 22px; font-weight: 700; color: #0a0a0a !important; line-height: 1.3 !important; margin: 32px 0 16px; letter-spacing: -0.01em;',
      h3: 'font-size: 19px; font-weight: 600; color: #1a1a1a !important; line-height: 1.35 !important; margin: 28px 0 14px;',
      h4: 'font-size: 17px; font-weight: 600; color: #2a2a2a !important; line-height: 1.4 !important; margin: 24px 0 12px;',
      h5: 'font-size: 16px; font-weight: 600; color: #3a3a3a !important; line-height: 1.45 !important; margin: 20px 0 10px;',
      h6: 'font-size: 15px; font-weight: 500; color: #4a4a4a !important; line-height: 1.45 !important; margin: 18px 0 9px;',
      p: 'margin: 20px 0 !important; line-height: 1.8 !important; color: #1a1a1a !important;',
      strong: 'font-weight: 700; color: #0a0a0a !important;',
      em: 'font-style: italic; color: #2a2a2a !important;',
      a: 'color: #0066cc !important; text-decoration: none; border-bottom: 1px solid #0066cc;',
      ul: 'margin: 20px 0; padding-left: 28px;',
      ol: 'margin: 20px 0; padding-left: 28px;',
      li: 'margin: 10px 0; line-height: 1.8 !important; color: #1a1a1a !important;',
      blockquote: 'margin: 20px 0; padding: 12px 18px; background-color: #f8f9fa !important; border-left: 4px solid #0a0a0a; color: #1a1a1a !important; font-size: 16px; line-height: 1.6 !important; font-style: normal;',
      code: 'font-family: "SF Mono", Consolas, Monaco, "Courier New", monospace; font-size: 15px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #d73a49 !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 20px; background-color: #f6f8fa !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important; border: 1px solid #e1e4e8;',
      hr: 'margin: 36px 0; border: none; height: 1px; background-color: #e1e4e8 !important;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 24px auto; border-radius: 8px;',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 16px;',
      th: 'background-color: #f6f8fa !important; padding: 10px 14px; text-align: left; border: 1px solid #e1e4e8; font-weight: 600; color: #1a1a1a !important;',
      td: 'padding: 10px 14px; border: 1px solid #e1e4e8; color: #1a1a1a !important;',
      tr: 'border-bottom: 1px solid #e1e4e8;',
    }
  },

'wechat-nyt': {
    name: '纽约时报',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 20px 12px 48px 12px; font-family: Georgia, "Times New Roman", Times, serif; font-size: 18px; line-height: 1.8 !important; color: #121212 !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 42px; font-weight: 700; color: #000 !important; line-height: 1.2 !important; margin: 56px 0 16px; font-family: Georgia, serif; letter-spacing: -0.02em; border-bottom: 1px solid #000; padding-bottom: 16px;',
      h2: 'font-size: 32px; font-weight: 700; color: #000 !important; line-height: 1.3 !important; margin: 48px 0 16px; font-family: Georgia, serif; letter-spacing: -0.01em;',
      h3: 'font-size: 24px; font-weight: 700; color: #121212 !important; line-height: 1.4 !important; margin: 40px 0 16px; font-family: Georgia, serif;',
      h4: 'font-size: 20px; font-weight: 700; color: #1a1a1a !important; line-height: 1.5 !important; margin: 32px 0 12px; font-family: Georgia, serif;',
      h5: 'font-size: 18px; font-weight: 700; color: #2a2a2a !important; line-height: 1.5 !important; margin: 28px 0 12px; font-family: Georgia, serif;',
      h6: 'font-size: 16px; font-weight: 700; color: #3a3a3a !important; line-height: 1.5 !important; margin: 24px 0 10px; font-family: Georgia, serif; font-style: italic;',
      p: 'margin: 20px 0 !important; line-height: 1.8 !important; color: #121212 !important; text-align: left;',
      strong: 'font-weight: 700; color: #000 !important;',
      em: 'font-style: italic; color: #121212 !important;',
      a: 'color: #326891 !important; text-decoration: none; border-bottom: 1px solid #326891; word-break: break-all;',
      ul: 'margin: 24px 0; padding-left: 40px;',
      ol: 'margin: 24px 0; padding-left: 40px;',
      li: 'margin: 12px 0; line-height: 1.8 !important; color: #121212 !important; text-align: left;',
      blockquote: 'margin: 24px 0; padding: 14px 24px; background-color: #f7f7f7 !important; border-left: 5px solid #121212; color: #121212 !important; font-size: 18px; line-height: 1.6 !important; font-style: italic; font-family: Georgia, serif;',
      code: 'font-family: "Courier New", Courier, monospace; font-size: 16px; padding: 2px 6px; background-color: #f0f0f0 !important; color: #666 !important; border: 1px solid #ddd;',
      pre: 'margin: 28px 0; padding: 24px; background-color: #f7f7f7 !important; border: 1px solid #ddd; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 48px auto; border: none; height: 1px; background-color: #ddd !important; max-width: 100px;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 32px auto; border: 1px solid #ddd;',
      table: 'width: 100%; margin: 32px 0; border-collapse: collapse; font-size: 16px; border: 1px solid #ddd;',
      th: 'background-color: #f7f7f7 !important; padding: 14px 16px; text-align: left; border: 1px solid #ddd; font-weight: 700; color: #121212 !important; font-family: Georgia, serif;',
      td: 'padding: 14px 16px; border: 1px solid #ddd; color: #121212 !important;',
      tr: 'border-bottom: 1px solid #ddd;',
    }
  },

'wechat-medium': {
    name: 'Medium 长文',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 20px 12px 40px 12px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.7 !important; color: #242424 !important; background-color: #fff !important; word-wrap: break-word; letter-spacing: -0.003em;',
      h1: 'font-size: 28px; font-weight: 700; color: #242424 !important; line-height: 1.2 !important; margin: 36px 0 18px; letter-spacing: -0.02em; font-family: Georgia, "Times New Roman", serif;',
      h2: 'font-size: 24px; font-weight: 700; color: #242424 !important; line-height: 1.25 !important; margin: 32px 0 16px; letter-spacing: -0.015em; font-family: Georgia, "Times New Roman", serif;',
      h3: 'font-size: 20px; font-weight: 700; color: #242424 !important; line-height: 1.3 !important; margin: 28px 0 14px; letter-spacing: -0.01em; font-family: Georgia, "Times New Roman", serif;',
      h4: 'font-size: 18px; font-weight: 700; color: #242424 !important; line-height: 1.35 !important; margin: 24px 0 12px; font-family: Georgia, "Times New Roman", serif;',
      h5: 'font-size: 17px; font-weight: 700; color: #242424 !important; line-height: 1.4 !important; margin: 20px 0 10px; font-family: Georgia, "Times New Roman", serif;',
      h6: 'font-size: 16px; font-weight: 700; color: #242424 !important; line-height: 1.4 !important; margin: 18px 0 9px; font-family: Georgia, "Times New Roman", serif;',
      p: 'margin: 20px 0 !important; line-height: 1.75 !important; color: #242424 !important; font-size: 17px; letter-spacing: -0.003em;',
      strong: 'font-weight: 700; color: #242424 !important;',
      em: 'font-style: italic; color: #242424 !important;',
      a: 'color: #242424 !important; text-decoration: none; border-bottom: 1px solid #242424;',
      ul: 'margin: 20px 0; padding-left: 32px;',
      ol: 'margin: 20px 0; padding-left: 32px;',
      li: 'margin: 10px 0; line-height: 1.7 !important; color: #242424 !important; font-size: 17px;',
      blockquote: 'margin: 20px 0; padding: 0 20px; border-left: 3px solid #242424; color: #242424 !important; font-size: 17px; line-height: 1.6 !important; font-style: italic; font-family: Georgia, "Times New Roman", serif;',
      code: 'font-family: Menlo, Monaco, "Courier New", monospace; font-size: 15px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #d73a49 !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 20px; background-color: #f7f7f7 !important; border-radius: 8px; overflow-x: auto; line-height: 1.5 !important;',
      hr: 'margin: 36px auto; border: none; text-align: center; height: 1px; background-color: #e6e6e6 !important; max-width: 300px;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 24px auto;',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 16px;',
      th: 'background-color: #f7f7f7 !important; padding: 10px 14px; text-align: left; border-bottom: 2px solid #e6e6e6; font-weight: 700; color: #242424 !important;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e6e6e6; color: #242424 !important;',
      tr: 'border: none;',
    }
  },

  // === 建筑大师跨界设计 ===
  'gaudi-organic': {
    name: '高迪·有机',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 20px 24px 45px 24px; font-family: "Baskerville", "Georgia", serif; font-size: 17px; line-height: 1.8 !important; color: #3d2914 !important; background-color: #fff5e6 !important; word-wrap: break-word;',
      h1: 'font-size: 32px; font-weight: 700; color: #ff6b6b !important; background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #5b86e5, #a55eea); -webkit-background-clip: text; background-clip: text; line-height: 1.25 !important; margin: 36px 0 18px; text-align: center; letter-spacing: -0.02em; position: relative; padding: 12px;',
      h2: 'font-size: 26px; font-weight: 600; color: #c0392b !important; line-height: 1.3 !important; margin: 32px 0 16px; text-align: center; position: relative; padding: 10px 20px; background: radial-gradient(ellipse at center, rgba(192, 57, 43, 0.08) 0%, transparent 70%); border-radius: 50% 20% / 10% 40%;',
      h3: 'font-size: 21px; font-weight: 600; color: #27ae60 !important; line-height: 1.35 !important; margin: 28px 0 14px; padding-left: 24px; position: relative; border-left: 4px wavy #27ae60;',
      h4: 'font-size: 18px; font-weight: 600; color: #2980b9 !important; line-height: 1.4 !important; margin: 24px 0 12px; padding: 8px 16px; background: linear-gradient(90deg, rgba(41, 128, 185, 0.1) 0%, transparent 50%); border-radius: 100px 0 100px 0;',
      h5: 'font-size: 17px; font-weight: 600; color: #8e44ad !important; line-height: 1.45 !important; margin: 20px 0 10px;',
      h6: 'font-size: 16px; font-weight: 600; color: #d35400 !important; line-height: 1.45 !important; margin: 18px 0 9px; font-style: italic;',
      p: 'margin: 20px 0 !important; line-height: 1.85 !important; color: #3d2914 !important; text-indent: 2em;',
      strong: 'font-weight: 700; color: #c0392b !important; background: linear-gradient(180deg, transparent 60%, rgba(192, 57, 43, 0.2) 60%); padding: 2px 4px;',
      em: 'font-style: italic; color: #27ae60 !important; font-weight: 500;',
      a: 'color: #2980b9 !important; text-decoration: none; border-bottom: 2px wavy #2980b9; position: relative;',
      ul: 'margin: 20px 0; padding-left: 28px; list-style-type: square;',
      ol: 'margin: 20px 0; padding-left: 28px; list-style-type: decimal;',
      li: 'margin: 10px 0; line-height: 1.8 !important; color: #3d2914 !important; padding: 10px 18px 10px 32px; position: relative; background: linear-gradient(90deg, rgba(255, 193, 7, 0.1) 0%, transparent 30%); border-radius: 20px 40px 80px 20px / 80px 20px 40px 20px;',
      blockquote: 'margin: 20px auto; padding: 16px 22px; background: radial-gradient(circle at top left, rgba(255, 107, 107, 0.1) 0%, rgba(109, 207, 127, 0.1) 25%, rgba(78, 205, 196, 0.1) 50%, rgba(91, 134, 229, 0.1) 75%, rgba(165, 94, 234, 0.1) 100%); border: 3px solid transparent; border-image: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #5b86e5, #a55eea) 1; border-radius: 50% 20% / 10% 40%; color: #3d2914 !important; font-size: 17px; line-height: 1.6 !important; font-style: italic; text-align: center; max-width: 600px;',
      code: 'font-family: "Courier New", Courier, monospace; font-size: 15px; padding: 3px 8px; background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 217, 61, 0.2)); color: #c0392b !important; border-radius: 50% / 30%; font-weight: 600;',
      pre: 'margin: 24px 0; padding: 22px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%); color: #fff !important; border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%; overflow-x: auto; line-height: 1.55 !important; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18); position: relative;',
      hr: 'margin: 36px auto; border: none; height: 24px; background: url("data:image/svg+xml,%3Csvg width=\'100\' height=\'30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,15 Q25,0 50,15 T100,15\' stroke=\'%23c0392b\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E") repeat-x center; background-size: 80px 24px; max-width: 240px;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 24px auto; border-radius: 10px; box-shadow: 0 8px 20px rgba(255, 193, 7, 0.12); border: 2px solid #ffd93d;',
      table: 'width: 100%; margin: 24px 0; border-collapse: separate; border-spacing: 4px; font-size: 15px;',
      th: 'background: linear-gradient(45deg, #ff6b6b 0%, #ffd93d 100%); color: #fff !important; padding: 12px; text-align: left; font-weight: 600; border-radius: 12px 12px 0 0; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);',
      td: 'padding: 10px; background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(109, 207, 127, 0.1) 100%); color: #3d2914 !important; border-radius: 8px;',
      tr: 'border: none;',
    }
  },

  // === 国际媒体风格 ===
  'guardian': {
    name: 'Guardian 卫报',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 16px 12px 40px 12px; font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.6 !important; color: #121212 !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 42px; font-weight: 700; color: #052962 !important; line-height: 1.15 !important; margin: 40px 0 20px; padding-bottom: 12px; border-bottom: 3px solid #052962;',
      h2: 'font-size: 32px; font-weight: 600; color: #052962 !important; line-height: 1.25 !important; margin: 35px 0 18px; padding-left: 16px; border-left: 5px solid #C70000; background-color: #f6f6f6 !important; padding: 12px 16px;',
      h3: 'font-size: 24px; font-weight: 600; color: #052962 !important; line-height: 1.3 !important; margin: 30px 0 15px; padding: 8px 12px; background-color: #FEC200 !important; display: inline-block;',
      h4: 'font-size: 20px; font-weight: 600; color: #052962 !important; line-height: 1.4 !important; margin: 25px 0 12px; border-left: 3px solid #0084C6; padding-left: 12px;',
      h5: 'font-size: 18px; font-weight: 500; color: #333 !important; line-height: 1.4 !important; margin: 20px 0 10px;',
      h6: 'font-size: 16px; font-weight: 500; color: #666 !important; line-height: 1.4 !important; margin: 18px 0 8px;',
      p: 'margin: 18px 0 !important; line-height: 1.7 !important; color: #121212 !important;',
      strong: 'font-weight: 700; color: #052962 !important; background-color: rgba(5, 41, 98, 0.05) !important; padding: 1px 4px;',
      em: 'font-style: italic; color: #333 !important;',
      a: 'color: #0084C6 !important; text-decoration: none; border-bottom: 1px solid #0084C6;',
      ul: 'margin: 20px 0; padding-left: 24px;',
      ol: 'margin: 20px 0; padding-left: 24px;',
      li: 'margin: 10px 0; line-height: 1.7 !important; color: #121212 !important;',
      blockquote: 'margin: 24px 0; padding: 14px 20px; background-color: #FEC200 !important; border-left: 4px solid #C70000; color: #052962 !important; font-size: 17px; line-height: 1.5 !important; font-weight: 500; position: relative;',
      code: 'font-family: "SF Mono", Consolas, monospace; font-size: 15px; padding: 3px 6px; background-color: #f6f6f6 !important; color: #C70000 !important; border-radius: 3px;',
      pre: 'margin: 25px 0; padding: 20px; background-color: #052962 !important; color: #fff !important; border-radius: 4px; overflow-x: auto; line-height: 1.5 !important;',
      hr: 'margin: 40px 0; border: none; height: 2px; background-color: #052962 !important;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 30px auto; border: 2px solid #052962;',
      table: 'width: 100%; margin: 25px 0; border-collapse: collapse; font-size: 16px;',
      th: 'background-color: #052962 !important; color: #fff !important; padding: 12px 15px; text-align: left; font-weight: 600; border: 1px solid #052962;',
      td: 'padding: 10px 15px; border: 1px solid #e0e0e0; color: #121212 !important;',
      tr: 'border-bottom: 1px solid #e0e0e0;',
    }
  },

  'nikkei': {
    name: 'Nikkei 日経',
    styles: {
      container: 'max-width: 650px; margin: 0 auto; padding: 10px 12px 20px 12px; font-family: "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif; font-size: 15px; line-height: 1.6 !important; color: #1a1a1a !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 24px; font-weight: 700; color: #000 !important; line-height: 1.3 !important; margin: 25px 0 15px; padding-bottom: 8px; border-bottom: 2px solid #000;',
      h2: 'font-size: 18px; font-weight: 700; color: #c41230 !important; line-height: 1.4 !important; margin: 20px 0 12px; padding-left: 10px; border-left: 3px solid #c41230;',
      h3: 'font-size: 16px; font-weight: 600; color: #000 !important; line-height: 1.4 !important; margin: 18px 0 10px; padding: 4px 8px; background-color: #f5f5f5 !important;',
      h4: 'font-size: 15px; font-weight: 600; color: #333 !important; line-height: 1.5 !important; margin: 15px 0 8px; text-decoration: underline; text-decoration-color: #c41230; text-underline-offset: 3px;',
      h5: 'font-size: 14px; font-weight: 600; color: #666 !important; line-height: 1.5 !important; margin: 12px 0 6px;',
      h6: 'font-size: 13px; font-weight: 600; color: #999 !important; line-height: 1.5 !important; margin: 10px 0 5px;',
      p: 'margin: 12px 0 !important; line-height: 1.6 !important; color: #1a1a1a !important; text-align: justify;',
      strong: 'font-weight: 700; color: #000 !important; background-color: #fff3f3 !important; padding: 0 2px;',
      em: 'font-style: normal; color: #c41230 !important; font-weight: 600;',
      a: 'color: #0066cc !important; text-decoration: none; border-bottom: 1px solid #0066cc;',
      ul: 'margin: 15px 0; padding-left: 28px; list-style-type: disc;',
      ol: 'margin: 15px 0; padding-left: 28px; list-style-type: decimal;',
      li: 'margin: 6px 0; line-height: 1.6 !important; color: #1a1a1a !important;',
      blockquote: 'margin: 16px 0; padding: 10px 15px; background-color: transparent !important; border-left: 2px solid #c41230; border-right: 2px solid #c41230; color: #1a1a1a !important; font-size: 14px; line-height: 1.5 !important;',
      code: 'font-family: "Courier New", monospace; font-size: 13px; padding: 2px 4px; background-color: #f5f5f5 !important; color: #c41230 !important;',
      pre: 'margin: 20px 0; padding: 15px; background-color: #f5f5f5 !important; border: 1px solid #ddd; overflow-x: auto; line-height: 1.4 !important;',
      hr: 'margin: 30px 0; border: none; height: 1px; background-color: #000 !important;',
      img: 'max-width: 100%; max-height: 400px !important; height: auto; display: block; margin: 20px auto; border: 1px solid #ddd;',
      table: 'width: 100%; margin: 20px 0; border-collapse: collapse; font-size: 14px; border: 1px solid #000;',
      th: 'background-color: #c41230 !important; color: #fff !important; padding: 8px 10px; text-align: left; font-weight: 600; border: 1px solid #c41230;',
      td: 'padding: 6px 10px; border: 1px solid #ddd; color: #1a1a1a !important; background-color: #fff !important;',
      tr: 'border-bottom: 1px solid #ddd;',
    }
  },

  'warm-docs': {
    name: '焦橙文档',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 16px 20px 40px 20px; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Noto Sans SC", "Helvetica Neue", sans-serif; font-size: 16px; line-height: 1.8 !important; color: #1A1A1A !important; background-color: #FAFAF9 !important; word-wrap: break-word;',
      h1: 'font-size: 28px; font-weight: 700; color: #1A1A1A !important; line-height: 1.3 !important; margin: 36px 0 12px; padding-bottom: 12px; border-bottom: 3px solid #C2410C;',
      h2: 'font-size: 22px; font-weight: 700; color: #1A1A1A !important; line-height: 1.35 !important; margin: 36px 0 14px; padding-top: 16px; border-top: 3px solid #C2410C;',
      h3: 'font-size: 18px; font-weight: 600; color: #1A1A1A !important; line-height: 1.4 !important; margin: 28px 0 12px; padding-left: 14px; border-left: 4px solid #C2410C;',
      h4: 'font-size: 16px; font-weight: 600; color: #C2410C !important; line-height: 1.45 !important; margin: 24px 0 10px;',
      h5: 'font-size: 15px; font-weight: 600; color: #6B6B6B !important; line-height: 1.5 !important; margin: 20px 0 8px;',
      h6: 'font-size: 14px; font-weight: 600; color: #6B6B6B !important; line-height: 1.5 !important; margin: 18px 0 8px;',
      p: 'margin: 18px 0 !important; line-height: 1.8 !important; color: #1A1A1A !important;',
      strong: 'font-weight: 600; color: #C2410C !important;',
      em: 'font-style: italic; color: #6B6B6B !important;',
      a: 'color: #C2410C !important; text-decoration: none; border-bottom: 1px solid #C2410C;',
      ul: 'margin: 18px 0; padding-left: 28px;',
      ol: 'margin: 18px 0; padding-left: 28px;',
      li: 'margin: 8px 0; line-height: 1.8 !important; color: #1A1A1A !important;',
      blockquote: 'margin: 20px 0; padding: 12px 18px; background-color: #FFF7ED !important; border-left: 4px solid #C2410C; color: #1A1A1A !important; font-size: 15px; line-height: 1.7 !important; border-radius: 0 4px 4px 0;',
      code: 'font-family: "JetBrains Mono", "SF Mono", Consolas, monospace; font-size: 14px; padding: 2px 6px; background-color: #F5F5F0 !important; color: #C2410C !important; border-radius: 3px; border: 1px solid #E5E5E5;',
      pre: 'margin: 22px 0; padding: 18px; background-color: #F5F5F0 !important; border: 1px solid #E5E5E5; border-radius: 4px; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 32px 0; border: none; border-top: 1px solid #E5E5E5;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 22px auto; border-radius: 4px;',
      table: 'width: 100%; margin: 22px 0; border-collapse: collapse; font-size: 15px;',
      th: 'background-color: #F5F5F0 !important; padding: 10px 14px; text-align: left; border: 1px solid #E5E5E5; font-weight: 600; color: #1A1A1A !important;',
      td: 'padding: 10px 14px; border: 1px solid #E5E5E5; color: #1A1A1A !important;',
      tr: 'border-bottom: 1px solid #E5E5E5;',
    }
  },

  // 复刻「翻箱」档案皮肤：暖纸点阵底纹 + 衬线标题 + 陶土橙/橄榄/琥珀
  'warm-dossier': {
    name: '档案馆',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 24px 22px 44px 22px; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif; font-size: 16px; line-height: 1.85 !important; color: #1a1a18 !important; background-color: #f5f0e8 !important; background-image: radial-gradient(rgba(140,110,70,0.06) 1px, transparent 1px); background-size: 4px 4px; word-wrap: break-word; letter-spacing: 0.005em;',
      h1: 'font-size: 28px; font-weight: 700; color: #1a1a18 !important; line-height: 1.35 !important; margin: 40px 0 18px; padding-bottom: 12px; border-bottom: 2px solid #cc785c; font-family: Fraunces, Georgia, "Songti SC", "STSong", serif; letter-spacing: 0.01em;',
      h2: 'font-size: 22px; font-weight: 700; color: #cc785c !important; line-height: 1.4 !important; margin: 36px 0 16px; padding: 2px 0 2px 14px; border-left: 4px solid #cc785c; font-family: Fraunces, Georgia, "Songti SC", "STSong", serif;',
      h3: 'font-size: 19px; font-weight: 600; color: #1a1a18 !important; line-height: 1.45 !important; margin: 30px 0 12px; padding-bottom: 6px; border-bottom: 1px dashed #a39882; font-family: Fraunces, Georgia, "Songti SC", "STSong", serif;',
      h4: 'font-size: 17px; font-weight: 600; color: #6b6355 !important; line-height: 1.5 !important; margin: 24px 0 10px; font-family: Fraunces, Georgia, "Songti SC", "STSong", serif;',
      h5: 'font-size: 15px; font-weight: 600; color: #6b6355 !important; line-height: 1.5 !important; margin: 20px 0 8px;',
      h6: 'font-size: 14px; font-weight: 600; color: #a39882 !important; line-height: 1.5 !important; margin: 18px 0 8px; letter-spacing: 0.08em; text-transform: uppercase;',
      p: 'margin: 18px 0 !important; line-height: 1.85 !important; color: #1a1a18 !important; font-size: 16px;',
      strong: 'font-weight: 700; color: #cc785c !important; background-color: rgba(204,120,92,0.10) !important; padding: 1px 4px; border-radius: 3px;',
      em: 'font-style: italic; color: #6b6355 !important;',
      a: 'color: #cc785c !important; text-decoration: none; border-bottom: 1px dotted #cc785c;',
      ul: 'margin: 18px 0; padding-left: 28px;',
      ol: 'margin: 18px 0; padding-left: 28px;',
      li: 'margin: 8px 0; line-height: 1.85 !important; color: #1a1a18 !important;',
      blockquote: 'margin: 22px 0; padding: 14px 18px; background-color: #faf6ef !important; border: 1px solid #e3d9c8; border-left: 3px solid #cc785c; color: #6b6355 !important; font-size: 15px; line-height: 1.7 !important; border-radius: 0 6px 6px 0;',
      code: 'font-family: "SF Mono", Menlo, Consolas, Monaco, monospace; font-size: 14px; padding: 2px 6px; background-color: rgba(204,120,92,0.10) !important; color: #cc785c !important; border: 1px solid #e3d9c8; border-radius: 4px;',
      pre: 'margin: 24px 0; padding: 18px 20px; background-color: #2e2a23 !important; color: #f1ebdf !important; border-radius: 8px; overflow-x: auto; line-height: 1.65 !important; box-shadow: 0 6px 20px rgba(90,66,42,0.18);',
      hr: 'margin: 40px auto; border: none; height: 2px; background: repeating-linear-gradient(to right, #cc785c 0, #cc785c 4px, transparent 4px, transparent 8px); max-width: 180px;',
      img: 'max-width: 100%; max-height: 560px !important; height: auto; display: block; margin: 24px auto; border-radius: 8px; border: 1px solid #e3d9c8; box-shadow: 0 6px 20px rgba(90,66,42,0.12);',
      table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 15px;',
      th: 'background-color: #ece2d2 !important; padding: 10px 14px; text-align: left; border: 1px solid #e3d9c8; font-weight: 700; color: #1a1a18 !important; font-family: Fraunces, Georgia, "Songti SC", "STSong", serif;',
      td: 'padding: 10px 14px; border: 1px solid #e3d9c8; color: #1a1a18 !important; background-color: #faf6ef !important;',
      tr: 'border-bottom: 1px solid #e3d9c8;',
    }
  }
};

// ===== 技术风格（wechat-tech）变体：主色 + 二级标题样式 =====
// 只作用于「技术风格」，其他主题不受影响。所有值最终都写成行内样式（公众号不认 CSS 变量/伪元素/计数器）。
// classic 与原版技术风格逐字一致，作为默认值，老用户切过来看到的还是原样。
const TECH_PALETTES = {
  classic: {
    name: '经典蓝', primary: '#0066cc', primaryDark: '#0052a3', h2Bar: '#00a67d', tint: '#f0f9ff',
    quoteBar: '#2196f3', quoteBg: '#f5f9fc', h3Bar: '#ff9800', strongBg: '#fff3cd',
    codeColor: '#d63031', codeBg: '#ffe6e6', quoteBorder: '#cfe3f5', numberColor: '#0066cc'
  },
  green: {
    name: '墨绿', primary: '#2f6b55', primaryDark: '#24533f', h2Bar: '#2f6b55', tint: '#eef5f1',
    quoteBar: '#6f9c89', quoteBg: '#f3f8f5', h3Bar: '#8fb3a2', strongBg: '#e2efe7',
    codeColor: '#2f6b55', codeBg: '#eaf3ee', quoteBorder: '#cfe2d7', numberColor: '#9dbdae'
  },
  brick: {
    name: '砖红', primary: '#a24a3c', primaryDark: '#83392e', h2Bar: '#a24a3c', tint: '#f9f0ed',
    quoteBar: '#c58676', quoteBg: '#fbf5f3', h3Bar: '#d0a08f', strongBg: '#f5e2dc',
    codeColor: '#a24a3c', codeBg: '#f7ebe7', quoteBorder: '#ecd5ce', numberColor: '#d9aa9d'
  },
  purple: {
    name: '深紫', primary: '#5a4a8c', primaryDark: '#463a70', h2Bar: '#5a4a8c', tint: '#f2f0f8',
    quoteBar: '#8a7cb5', quoteBg: '#f6f5fa', h3Bar: '#a79dc8', strongBg: '#e8e4f3',
    codeColor: '#5a4a8c', codeBg: '#efedf7', quoteBorder: '#dad5ea', numberColor: '#b3a9d3'
  },
  amber: {
    name: '琥珀', primary: '#946326', primaryDark: '#774f1e', h2Bar: '#946326', tint: '#faf4ea',
    quoteBar: '#c19a63', quoteBg: '#fcf8f1', h3Bar: '#d1b384', strongBg: '#f5e8cf',
    codeColor: '#8a5a20', codeBg: '#f7efe1', quoteBorder: '#ebd9ba', numberColor: '#d8bf96'
  },
  slate: {
    name: '藏青', primary: '#2d4a6a', primaryDark: '#213a55', h2Bar: '#2d4a6a', tint: '#eef2f6',
    quoteBar: '#6d839c', quoteBg: '#f4f6f9', h3Bar: '#93a4b8', strongBg: '#e3e9f0',
    codeColor: '#2d4a6a', codeBg: '#ebf0f5', quoteBorder: '#d2dbe6', numberColor: '#a3b3c6'
  }
};

const TECH_H2_STYLES = {
  bar: { name: '左竖条' },
  number: { name: '编号式' },
  underline: { name: '下划线' },
  block: { name: '底色块' }
};

function buildTechStyles(paletteKey, h2Key) {
  const c = TECH_PALETTES[paletteKey] || TECH_PALETTES.classic;
  const h2Font = 'font-size: 22px; font-weight: 700; line-height: 1.3 !important; ';
  const h2Base = 'font-size: 22px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; ';
  const h2 = {
    bar: h2Base + `margin: 32px 0 16px; padding-left: 16px; padding-top: 4px; padding-bottom: 4px; border-left: 5px solid ${c.h2Bar}; background: linear-gradient(to right, ${c.tint} 0%, transparent 100%);`,
    // 编号数字由 app.js 作为真实文本插入（<span> 块），这里只给标题本体
    number: h2Base + 'margin: 40px 0 18px; padding: 0;',
    // 下划线由 app.js 插入的内层 <span> 画出 4px 主色粗线（至少 72px 宽），标题本体画一条浅灰全宽底线
    underline: h2Base + `margin: 40px 0 20px; padding: 0; border-bottom: 1px solid #e6e6e6;`,
    // 底色块：主色实底 + 白字，贴合文字宽度的标签块，6 套主色对白字都够深。
    // inline-block 的外边距不与相邻段落折叠，所以上下 margin 比其他样式小，实际间距相当
    block: h2Font + `display: inline-block; color: #ffffff !important; margin: 22px 0 4px; padding: 8px 18px; background-color: ${c.primary} !important; border-radius: 6px;`
  }[h2Key] || null;

  return {
    container: 'max-width: 740px; margin: 0 auto; padding: 10px 20px 20px 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 1.75 !important; color: #2c3e50 !important; background-color: #fff !important; word-wrap: break-word;',
    h1: `font-size: 26px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 36px 0 18px; padding: 0 0 12px; border-bottom: 3px solid ${c.primary};`,
    h2: h2 || (h2Base + `margin: 32px 0 16px; padding-left: 16px; padding-top: 4px; padding-bottom: 4px; border-left: 5px solid ${c.h2Bar}; background: linear-gradient(to right, ${c.tint} 0%, transparent 100%);`),
    h3: `font-size: 20px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 12px; border-left: 3px solid ${c.h3Bar};`,
    h4: 'font-size: 18px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 24px 0 12px;',
    h5: 'font-size: 17px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 20px 0 10px;',
    h6: 'font-size: 16px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 18px 0 9px;',
    p: 'margin: 18px 0 !important; line-height: 1.8 !important; color: #3a3a3a !important;',
    strong: `font-weight: 700; color: #1a1a1a !important; background-color: ${c.strongBg} !important; padding: 2px 4px; border-radius: 8px;`,
    em: 'font-style: italic; color: #666 !important;',
    a: `color: ${c.primary} !important; text-decoration: none; border-bottom: 1px solid ${c.primary};`,
    ul: 'margin: 18px 0; padding-left: 28px;',
    ol: 'margin: 18px 0; padding-left: 28px;',
    li: 'margin: 10px 0; line-height: 1.8 !important; color: #3a3a3a !important;',
    // 引用：不用左竖条（避免和二级标题「左竖条」撞车），改为浅底圆角 + 细边框；大引号由 app.js 作为真实文本插入
    blockquote: `margin: 20px 0; padding: 14px 20px 6px; background-color: ${c.quoteBg} !important; border: 1px solid ${c.quoteBorder}; border-radius: 8px; color: #555 !important; line-height: 1.5 !important;`,
    code: `font-family: "Fira Code", Consolas, Monaco, "Courier New", monospace; font-size: 14px; padding: 3px 6px; background-color: ${c.codeBg} !important; color: ${c.codeColor} !important; border-radius: 8px; font-weight: 500;`,
    pre: 'margin: 24px 0; padding: 20px; background-color: #1e1e1e !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.1);',
    hr: `margin: 36px 0; border: none; height: 2px; background: linear-gradient(to right, transparent, ${c.primary}, transparent);`,
    img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 24px auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);',
    table: 'width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 15px; box-shadow: 0 1px 4px rgba(0,0,0,0.1);',
    th: `background-color: ${c.primary} !important; color: #fff !important; padding: 12px; text-align: left; border: 1px solid ${c.primaryDark}; font-weight: 600;`,
    td: 'padding: 12px; border: 1px solid #e0e0e0; background-color: #fff !important;',
    tr: 'border-bottom: 1px solid #e0e0e0;',
  };
}
