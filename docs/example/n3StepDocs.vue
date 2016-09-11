<template>
  <div class="bs-docs-section" id="步骤条"  >
    <h1 class="page-header"><a href="#步骤条" class="anchor">步骤条</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-step :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2" ></n3-step>
      <hr></hr>
       <h4>前台步骤条</h4>
      <n3-step  round :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2" ></n3-step>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-step :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2" ></n3-step>

<n3-step round :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2" ></n3-step>
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
          <td>labels</td>
          <td><code>Array</code></td>
          <td><code></code></td>
          <td>文案数组</td>
        </tr>
        <tr>
          <td>current</td>
          <td><code>Number</code></td>
          <td><code></code></td>
          <td>当前步数</td>
        </tr>
        <tr>
          <td>round</td>
          <td><code>Boolean</code></td>
          <td><code></code></td>
          <td>是否是前台步骤条（原形）</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>


