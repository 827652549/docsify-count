# docsify-count

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-count</code>
</p>

[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/docsify-count/badge)](https://www.jsdelivr.com/package/npm/docsify-count)

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
<script src="//unpkg.com/docsify-count/dist/countable.min.js"></script>

or

<script src="https://cdn.jsdelivr.net/npm/docsify-count@latest/dist/countable.min.js"></script>
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
    language:'chinese',
    localization: {
      words: "",
      minute: ""
    },
    isExpected: true
  }
}
```

| 属性名Attribute | 类型Type | 解释Description | 可选值Value |
| --- | --- | --- | --- |
| countable | boolean | 设置字符统计展示与否 Set display this plugin or not | true(默认值Default) / false |
| position | string | 设置展示位置 Set display position | 'top'(默认值Default) / 'bottom' |
| margin | string | 设置与邻近DOM的距离 Set margin to the near DOM element | '10px' |
| float | string | 设置元素对齐 Set alignment | 'right'(默认值Default) / 'top' |
| fontsize | string | 设置字体大小 Set font size | '0.9em' |
| color | string | 设置颜色 Set color | 'rgb(90,90,90)' |
| language | string | 设置语言 Set language | 'english'(默认值Default) / 'chinese' |
| localization | Object | 支持本土化 Support localization | `words: ""`, `minute: ""` |
| isExpected | boolean | 是否显示预计阅读时长 Display the reading time or not | true(默认值Default) / false |

> `localization`的优先级高于`language`，如果`localization`的`words`和`minute`属性值不为空，则会取代`language`的作用。The priority of `localization` is higher than `language`'s. Thus, if the length of the value of `localization`'s attributes(`words`, `minutes`) were not equal with `0`, the function of `language` would be replaced.
