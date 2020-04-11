//default values
var defaultOptions = {
    countable: true,
    fontsize: '0.9em',
    color: 'rgb(90,90,90)',
    language: 'english'
};

// Docsify plugin functions
function plugin(hook, vm) {
    let wordsCount;
    hook.beforeEach(function (content) {
        // Match regex every time you start parsing .md
        wordsCount = content.match(/([\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g).length;
        return content;
    });
    hook.afterEach(function (html, next) {
        let str = wordsCount + ' words';
        //Determine whether to use the Chinese style according to the attribute "language"
        if (defaultOptions.language === 'chinese') {
            str = wordsCount + ' 字';
        }

        //add html string
        next(
            `
        <div>
            <span style="
                  float: right;font-size: ${defaultOptions.fontsize};
                  color:${defaultOptions.color};">
            ${str}
            </span>
            <div style="clear: both"></div>
        </div>` + html)
    });
}

// Docsify plugin options
window.$docsify['count'] = Object.assign(defaultOptions, window.$docsify['count']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
