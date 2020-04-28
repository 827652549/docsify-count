//default values
var defaultOptions = {
    countable: true,
    position: 'top',
    float: "right",
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    language: "english",
}

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
        ${defaultOptions.position === 'bottom' ? html : ''}
        <div>
            <span style="
                  float: ${defaultOptions.float === 'right' ? 'right' : 'left'};
                  font-size: ${defaultOptions.fontsize};
                  color:${defaultOptions.color};">
            ${str}
            </span>
            <div style="clear: both"></div>
        </div>
        ${defaultOptions.position !== 'bottom' ? html : ''}
        `
        )
    });
}

// Docsify plugin options
window.$docsify['count'] = Object.assign(defaultOptions, window.$docsify['count']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
