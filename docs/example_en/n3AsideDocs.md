<template>

### Aside

<div class="bs-docs-section">
<div class="bs-example">
  <n3-button @click.native="openLeft">left</n3-button>
  <n3-button @click.native="openRight">right</n3-button>

  <n3-aside  placement="left" title="Title" width="350px" ref="asideLeft">
    <h4>left</h4>
    <p height="10000px">...</p>
    <p>...</p>
    <p>...</p>
    <n3-button @click.native="closeLeft">close</n3-button>
  </n3-aside>

  <n3-aside  placement="right" title="Title" width="350px" ref="asideRight" :header="false">
    <h4>right</h4>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <n3-button @click.native="closeRight">close</n3-button>
  </n3-aside>
</div>

```html
<!-- left -->
<n3-aside  placement="left" title="Title" width="350px" ref="asideLeft">
  <h4>left</h4>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <n3-button @click.native="closeLeft">close</n3-button>
</n3-aside>

<!-- right -->
<n3-aside  placement="right" title="Title" width="350px" ref="asideRight" :header="false">
  <h4>右侧侧边栏</h4>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <n3-button @click.native="closeRight">close</n3-button>
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
### Params
| name | type | default | description |
| --- | --- | --- | --- |
| placement | `String`, 如: `left`, `right` | `right` | placement |
| title | `String` |  | title |
| header | `Boolean` |  | Whether the head is needed |
| width | `String` |  |  |

### Events

| name          |   description          |        
|-------------  |---------------- |
| show          | show     |  
| hide          | hide     |  


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