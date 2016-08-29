<template>
  <div class="bs-docs-section" id="页面提示"  >
    <h1 class="page-header"><a href="#页面提示" class="anchor">页面提示</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-button @click="showToast">点击</n3-button>
      <hr>
     <pre><code class="language-markup"><script type="language-mark-up">
      <a class="btn btn-default" @click="showToast">点击</a>

      new Vue({
        methods:{
          showToast(){
            this.n3Toast({
                text: '成功',
                type: 'success',
                placement: 'top'
            })
          }
        }
      })
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
        <td>placement</td>
        <td><code>String</code></td>
        <td><code>String</code>. 如:  <code>top</code>, <code>top-right</code>,<code>top-left</code>, <code>bottom</code>,<code>bottom-left</code>, <code>bottom-right</code>默认在页面中间</td>
        <td>位置</td>
      </tr>
       <tr>
        <td>type</td>
        <td><code>String</code></td>
        <td>default</td>
        <td>颜色</td>
      </tr>
       <tr>
        <td>duration</td>
        <td><code>Number</code></td>
        <td>3000</td>
        <td>0为不消失</td>
      </tr>
      <tr>
        <td>close-on-click</td>
        <td><code>Boolean</code></td>
        <td>true</td>
        <td>点击消失</td>
      </tr>
      
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
  methods: {
    showToast () {
      this.n3Toast({
        text: '成功',
        type: 'success',
        placement: 'top'
      })
    }
  }
}
</script>
