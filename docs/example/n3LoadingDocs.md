<template>
  <div class="bs-docs-section" id="加载提示"  >
    <h1 class="page-header"><a href="#加载提示" class="anchor">加载提示</a><span class="author"> </span></h1>
    <div class="bs-example">
      <p>大图标：<n3-loading size="lg"></n3-loading></p>
      <p>默认图标：<n3-loading ></n3-loading></p>
      <p>刷新图标：<n3-loading type="refresh"></n3-loading></p>
      <p>颜色：<n3-loading color="primary"></n3-loading></p>
    </div>
    <div class="bs-example">
       <p>居中：<n3-loading center></n3-loading></p>
    </div>
```html
<p>大图标：<n3-loading size="lg"></n3-loading></p>
<p>默认图标：<n3-loading ></n3-loading></p>
<p>刷新图标：<n3-loading type="refresh"></n3-loading></p>
<p>颜色：<n3-loading color="primary"></n3-loading></p>
<p>居中：<n3-loading center></n3-loading></p>
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
        <td>size</td>
        <td><code>String</code></td>
        <td><code></code></td>
        <td>图标大小`lg` `sm` `xs` 和默认</td>
      </tr>
      <tr>
        <td>type</td>
        <td><code>String</code></td>
        <td><code></code></td>
        <td>图标类型 `refresh`  和默认菊花</td>
      </tr>
      <tr>
        <td>center</td>
        <td><code>Boolean</code></td>
        <td><code></code></td>
        <td>居中</td>
      </tr>
      <tr>
        <td>color</td>
        <td><code>String</code></td>
        <td><code></code></td>
        <td>颜色</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
}
</script>
