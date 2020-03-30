var defaultOptions = {
  countable:true,
  fontsize:'0.9em',
  color:'rgb(90,90,90)'
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
    next(`<div><span style="
    float: right;font-size: ${defaultOptions.fontsize};
   color:${defaultOptions.color};
">全文${wordsCount}字</span><div style="clear: both"></div></div>` + html)
  });
}

// Docsify plugin options
window.$docsify['count'] = Object.assign(defaultOptions, window.$docsify['count']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
