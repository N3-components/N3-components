<template>

### 分页

<div class="bs-docs-section" id="分页"  >
<div class="bs-example">
  <n3-page :total="100" @change="pagechange" v-model="current"  :show-sizer="true" :show-elevator="true"></n3-page>
  <hr></hr>
  <n3-page :total="100"  simple></n3-page>
</div>

```html
<n3-page :total="100" @change="pagechange" v-model="current"  :show-sizer="true" :show-elevator="true"></n3-page>
<n3-page :total="100" simple></n3-page>
```

```javascript
export default {
  data () {
    return {
      current: 1
    }
  },
  methods: {
    pagechange (page) {
      console.log(page)
    }
  }
}
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| total | `Number` |  | 总条数 |
| current | `Number` | 1 | 当前页数 |
| value | `Number` |  |  |
| pagesize | `Number` | 10 | 每页条数 |
| pagesize-opts | `Array` | `[10, 20, 30, 40]` | 每页条数选项 |
| simple | `Boolean` | `false` | 简单分页 |
| show-total | `Boolean` | `false` | 显示全部 |
| show-elevator | `Boolean` | `false` | 显示跳转 |
| show-sizer | `Boolean` | `false` | 显示分页选项 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 值变化时 | (page, currentPagesize) |

</div>
</template>

<script>
export default {
  data () {
    return {
      current: 1
    }
  },
  methods: {
    pagechange (page) {
      console.log(page)
    }
  }
}
</script>
