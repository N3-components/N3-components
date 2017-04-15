<template>

### 评分

<div class="bs-docs-section" id="评分">
<div class="bs-example">
<n3-rate v-model="value"></n3-rate>

```html
<n3-rate v-model="value"></n3-rate>
```


<n3-rate v-model="value1" allow-half></n3-rate>


```html
<n3-rate v-model="value1" allow-half></n3-rate>
```

<n3-rate v-model="value2" show-text :colors="['#ffeb3b','#ff9800','#f44336']"></n3-rate>


```html
<n3-rate v-model="value2" show-text :colors="['#ffeb3b','#ff9800','#f44336']"></n3-rate>
```

</div>



### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | `Number` | `5` | 最大个数 |
| allow-half | `Boolean` | `false` | 是否支持半数 |
| colors | `Array` | `['#F7BA2A', '#F7BA2A', '#F7BA2A']` | 颜色 |
| voidColor | `String` | `#C6D1DE` | 未选中颜色 |
| disabledVoidColor | `String` | `#EFF2F7` | 禁止情况下为选中颜色 |
| disabled | `Boolean` | `false` | 禁止操作 |
| disabled-void-icon | `String` | `star` | 禁止操作的图标 |
| void-icon | `String` | `star-o` | 未选中图标 |
| icons | `Array` | `['star', 'star', 'star']` | 选中图标 |
| show-text | `Boolean` | `false` | 是否显示文本解释 |
| text-color | `string` | `#1f2d3d` | 文本颜色 |
| texts | `Array` | `['极差', '失望', '一般', '满意', '惊喜']` | 文本 |

</div>
</template>

<script>
  export default {
    data () {
      return {
        value: 3,
        value1: 2.5,
        value2: 4
      }
    },
    mounted() {
      this.value =1
    }
  }
</script>
