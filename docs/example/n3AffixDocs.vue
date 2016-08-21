<template>
  <div class="bs-docs-section" id="固钉"  >
    <h1 class="page-header"><a href="#固钉" class="anchor">固钉</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h3>
        <n3-affix :offset="0" >
          <nav class="sidebar">
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </nav>
        </n3-affix>
        
      </h3>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
    <n3-affix :offset="0">
      <nav class="sidebar">
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </nav>
    </n3-affix>
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
          <td>offset</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>离屏幕顶部的像素值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.sidebar{
  background-color: #fff;
  border:1px solid #ddd;
  box-shadow: 1px 1px 10px #ddd;
  z-index: 10000;
  padding:10px; 
}
pre[class*='language-']{
  position: static;
}
</style>
