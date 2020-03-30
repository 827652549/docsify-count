# docsify-count

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-count</code>
</p>

This is a plugin to add word count for markdown files of docsify.

*这是一款为docsify提供文字统计的插件*


It only counts Chinese characters and English words excludes special characters like `*`、`-`、……  in markdown file.

*它提供了统计中文汉字和英文单词的功能，并且排除了一些markdown语法的特殊字符例如`*`、`-`等等*
## To use

![Show](https://s1.ax1x.com/2020/03/30/GuYhjI.jpg)


Add JS
```html
<script src="//unpkg.com/docsify-count/dist/countable.js"></script>
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
