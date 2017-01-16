<template>

### 侧边栏

<div class="bs-docs-section">
<div class="bs-example">
  <n3-button @click.native="openLeft">左侧栏</n3-button>
  <n3-button @click.native="openRight">右侧栏</n3-button>

  <n3-aside  placement="left" header="Title" width="350px" ref="asideLeft">
    <h4>左侧侧边栏</h4>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <n3-button @click.native="closeLeft">关闭</n3-button>
  </n3-aside>

  <n3-aside  placement="right" header="Title" width="350px" ref="asideRight">
    <h4>右侧侧边栏</h4>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <n3-button @click.native="closeRight">关闭</n3-button>
  </n3-aside>
</div>

```html
<!-- 左侧栏 -->
<n3-aside  placement="left" header="Title" width="350px" ref="asideLeft">
  <h4>左侧侧边栏</h4>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <n3-button @click.native="closeLeft">关闭</n3-button>
</n3-aside>

<!-- 右侧栏 -->
<n3-aside  placement="right" header="Title" width="350px" ref="asideRight">
  <h4>右侧侧边栏</h4>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <n3-button @click.native="closeRight">关闭</n3-button>
</n3-aside>
```

```javascript
export default {
  methods: {
    openLeft () {
      this.$refs.asideLeft.open()
    },
    openRight () {
      this.$refs.asideRight.open()
    },
    closeLeft () {
      this.$refs.asideLeft.close()
    },
    closeRight () {
      this.$refs.asideRight.close()
    }
  }
}
```
### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| placement | `String`, 如: `left`, `right` | `right` | 组件位置 |
| header | `String` |  | 组件头部文本 |
| width | `String` |  |  |
| on-show | `Function` |  | 侧边栏出现时候触发 |
| on-hide | `Function` |  | 侧边栏隐藏时候触发 |

</div>
</template>

<script>
export default {
  methods: {
    openLeft () {
      this.$refs.asideLeft.open()
    },
    openRight () {
      this.$refs.asideRight.open()
    },
    closeLeft () {
      this.$refs.asideLeft.close()
    },
    closeRight () {
      this.$refs.asideRight.close()
    }
  }
}
</script>