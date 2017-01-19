<template>

### 评分

<div class="bs-docs-section" id="评分">
<div class="bs-example">
  <n3-rate :value="value"></n3-rate>
</div>

```html
<n3-rate :value="value"></n3-rate>
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Number | 2 | 选中数据 |
| max | Number | `5` | 最大个数 |
| allow-half | Boolean | false | 是否支持半数 |
| colors | array | '#F7BA2A', '#F7BA2A', '#F7BA2A' | 颜色 |
| voidColor | string | #C6D1DE | 未选中颜色 |
| disabledVoidColor | string | #EFF2F7 | 禁止情况下为选中颜色 |
| disabled | Boolean | false | 禁止操作 |
| disabled-void-icon | string | `star` | 禁止操作的图标 |
| void-icon | string | `star-o` | 未选中图标 |
| icons | array | `['star', 'star', 'star']` | 选中图标 |
| show-text | Boolean | false | 是否显示文本解释 |
| text-color | string | `#1f2d3d` | 文本颜色 |
| texts | Array | `['极差', '失望', '一般', '满意', '惊喜']` | 文本 |

</div>
</template>

<script>
  export default {
    data () {
      return {
        value: 3
      }
    }
  }
</script>
