var defaultOptions = {
  countable:true,
  fontsize:'0.9em',
  color:'rgb(90,90,90)',
  language:'english'
};

// Docsify plugin functions
function plugin(hook, vm) {
  let wordsCount;
  hook.beforeEach(function (content) {
    // 每次开始解析 Markdown 内容时调用
    wordsCount = content.match(/([\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g).length;
    return content;
  });
  hook.afterEach(function (html, next) {
    let str = wordsCount+' words';
    if (defaultOptions.language==='chinese'){
      str=wordsCount+' 字';
    }

    next(`<div><span style="
    float: right;font-size: ${defaultOptions.fontsize};
   color:${defaultOptions.color};
">${str}</span><div style="clear: both"></div></div>` + html)
  });
}

// Docsify plugin options
window.$docsify['count'] = Object.assign(defaultOptions, window.$docsify['count']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
