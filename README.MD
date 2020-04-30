# docsify-count

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-count</code>
</p>

This is a plugin to add word count for markdown files of docsify.

> *这是一款为docsify提供文字统计的插件*

It only counts Chinese characters and English words excludes special characters like `*`、`-`、……  in markdown file.

> *它提供了统计中文汉字和英文单词的功能，并且排除了一些markdown语法的特殊字符例如`*`、`-`等*

<img alt="show count.english" src="https://s1.ax1x.com/2020/03/30/GuUeAK.jpg" width="60%">

And you can set count.language 'chinese'/'english'

<img alt="show count.chinese" src="https://s1.ax1x.com/2020/03/30/GuUrBq.jpg" width="60%">

## To use

Add JS

```html
<script src="//unpkg.com/docsify-count/dist/countable.js"></script>
```

Add settings

```js
window.$docsify = {
  count:{
    countable: true,
    position: 'top',
    margin: '10px',
    float: 'right',
    fontsize:'0.9em',
    color:'rgb(90,90,90)',
    language:'chinese'
  }
}
```

| 属性名Attribute | 类型Type | 解释Description | 可选值Value |
| --- | --- | --- | --- |
| position | string | 设置展示位置 Set display position | 'top'(默认值Default) / 'bottom' |
| margin | string | 设置与邻近DOM的距离 Set margin to the near DOM element | '10px' |
| float | string | 设置元素对齐 Set alignment | 'right'(默认值Default) / 'top' |
| fontsize | string | 设置字体大小 Set font size | '0.9em' |
| color | string | 设置颜色 Set color | 'rgb(90,90,90)' |
| language | string | 设置语言 Set language | 'english'(默认值Default) / 'chinese' |
