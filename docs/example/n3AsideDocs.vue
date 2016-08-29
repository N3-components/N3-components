<template>
  <div class="bs-docs-section" id="侧边栏"  >
    <h1 class="page-header"><a href="#侧边栏" class="anchor">侧边栏</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-button  @click="showLeft = true">左侧栏</n3-button>

      <n3-aside  :show.sync="showLeft" placement="left" header="Title" width="350px">
        <h4>左侧侧边栏</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        
        <n3-button  @click="showLeft = close">关闭</n3-button>
      </n3-aside>
      
      <n3-button  @click="showRight = true">右侧栏</n3-button>

      <n3-aside :show.sync="showRight" placement="right" header="Title" width="350px">
        <h4>右侧侧边栏</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
          
        <n3-button  @click="showRight = false">关闭</n3-button>
      </n3-aside>
      
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
      <n3-button  @click="showLeft = true">左侧栏</n3-button>

      <n3-aside  :show.sync="showLeft" placement="left" header="Title" width="350px">
        <h4>左侧侧边栏</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        
        <n3-button  @click="showLeft = close">关闭</n3-button>
      </n3-aside>
      
      <n3-button  @click="showRight = true">右侧栏</n3-button>

      <n3-aside :show.sync="showRight" placement="right" header="Title" width="350px">
        <h4>右侧侧边栏</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
          
        <n3-button  @click="showRight = false">关闭</n3-button>
      </n3-aside>
      
    </script></code></pre>

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
          <td>show</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>是否显示组件</td>
        </tr>
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
    data () {
      return {
        showLeft: false,
        showRight: false
      }
    }
  }
</script>