<template>

### 页面提示

<div class="bs-docs-section" id="页面提示"  >
<div class="bs-example">
  <n3-button @click.native="showToast">点击</n3-button>
<div>

```html
<n3-button @click.native="showToast">点击</n3-button>
```

```javascript
export default {
  methods: {
    showToast () {
      this.n3Toast({
        text: '成功',
        type: 'success',
        placement: 'top',
        closeOnClick : true
      })
    }
  }
}
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| placement | `String` | `String`. 如: `top`, `top-right`,`top-left`, `bottom`,`bottom-left`, `bottom-right`默认在页面中间 | 位置 |
| type | `String` | default | 颜色 |
| duration | `Number` | `3000` | `0`为不消失 |
| closeOnClick | `Boolean` | `true` | 点击消失 |

</div>
</template>

<script>
export default {
  methods: {
    showToast () {
      this.n3Toast({
        text: '成功',
        type: 'success',
        placement: 'top',
        closeOnClick : true
      })
    }
  }
}
</script>
