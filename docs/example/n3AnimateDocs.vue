<template>
  <div class="bs-docs-section" id="动画"  >
    <h1 class="page-header">
      <a href="#动画" class="anchor">动画</a><span class="author"> </span>
    </h1>
    <div class="bs-example" >
        <n3-button  @click="show1=!show1">fadeLeft</n3-button>
        <div v-if="show1" transition="fadeLeft" class="content">
            <h4>Title</h4>
            <p>...</p>
            <p>...</p>
            <p>...</p>
        </div>
        <br>
        <br>
         <n3-button  @click="show2=!show2">fadeDown</n3-button>
        <div v-if="show2" transition="fadeDown" class="content">
            <h4>Title</h4>
            <p>...</p>
            <p>...</p>
            <p>...</p>
        </div>
        <br>
        <br>
        <n3-button  @click="show3=!show3">bounce</n3-button>
        <div v-if="show3" transition="bounce" style="width:100px">
            <p>提示:作用于尺寸比较小的元素</p>
        </div>
    </div>

<pre><code class="language-markup">
  <script type="language-mark-up">     作用于( v-if , v-show , v-for) 等元素

        <n3-button  @click="show=!show">切换</n3-button>
        <div v-if="show" transition="fadeLeft" >
            <h4>Title</h4>
            <p>...</p>
            <p>...</p>
            <p>...</p>
        </div>
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
          <td>transition</td>
          <td><code>String</code></td>
          <td><code></code></td>
          <td><code>fade</code> 
              <code>fadeLeft</code>
              <code>fadeDown</code>
              <code>bounce</code>
              <code>collapse</code>
              <code>scale</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false
      }
    }
  }
</script>

<style scoped>
  .content {
    box-shadow: 1px 1px 10px #ddd;
    padding:10px; 
  }
</style>
