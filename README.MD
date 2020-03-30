# docsify-count

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-count</code>
</p>

This is a plugin to add word count for markdown files of docsify.

*这是一款为docsify提供文字统计的插件*


It excludes special characters like `*`、`-`、……  in markdown file.

*它排除了一些markdown语法的特殊字符例如`*`、`-`等等*
## To use

Add JS
```html
<script src="https://unpkg.com/docsify-count@1.0.0/dist/countable.js"></script>
```

Add settings
```js
window.$docsify = {
  count:{
    countable:true,
    fontsize:'0.9em',
    color:'rgb(90,90,90)'
  }
}
```
