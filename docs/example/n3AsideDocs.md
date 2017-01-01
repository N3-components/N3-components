<template>
### 侧边栏

<div class="bs-docs-section">
  <div class="bs-example">
    <n3-button @click.native="openLeft">左侧栏</n3-button>

    <n3-aside  placement="left" header="Title" width="350px" ref="asideLeft">
      <h4>左侧侧边栏</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      
      <n3-button @click.native="closeLeft">关闭</n3-button>
    </n3-aside>
    
    <n3-button @click.native="openRight">右侧栏</n3-button>

    <n3-aside  placement="right" header="Title" width="350px" ref="asideRight">
      <h4>右侧侧边栏</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
        
      <n3-button @click.native="closeRight">关闭</n3-button>
    </n3-aside>
  </div>


```html
  <n3-button @click.native="openLeft">左侧栏</n3-button>
  <n3-aside  placement="left" header="Title" width="350px" ref="asideLeft">
    <h4>左侧侧边栏</h4>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    
    <n3-button @click.native="closeLeft">关闭</n3-button>
  </n3-aside>
  
  <n3-button @click.native="openRight">右侧栏</n3-button>

  <n3-aside  placement="right" header="Title" width="350px" ref="asideRight">
    <h4>右侧侧边栏</h4>
    <p>...</p>
    <p>...</p>
    <p>...</p>
      
    <n3-button @click.native="closeRight">关闭</n3-button>
  </n3-aside>
```

```javascript
    new Vue({
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
    })
```

    <h2>参数</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>placement</td>
          <td><code>String</code>, 如:  <code>left</code>, <code>right</code></td>
          <td><code>right</code></td>
          <td>组件位置</td>
        </tr>
        <tr>
          <td>header</td>
          <td><code>String</code></td>
          <td></td>
          <td>组件头部文本</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>on-show</td>
          <td><code>Function</code></td>
          <td></td>
          <td>侧边栏出现时候触发</td>
        </tr>
        <tr>
          <td>on-hide</td>
          <td><code>Function</code></td>
          <td></td>
          <td>侧边栏隐藏时候触发</td>
        </tr>
      </tbody>
    </table>
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