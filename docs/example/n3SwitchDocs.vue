<template>
  <div class="bs-docs-section" id="开关"  >
    <h1 class="page-header"><a href="#开关" class="anchor">开关</a><span class="author"> </span></h1>
    <div class="bs-example">
      
      <h3><n3-switch></n3-switch></h3>
      
      <h3><n3-switch ontext="开" offtext="关" :on-change="toggle" ></n3-switch></h3>

       <h3><n3-switch ontext="开" offtext="关 :disabled="true"></n3-switch></h3>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
      <n3-switch></n3-switch>
      <n3-switch ontext="开" offtext="关" :on-change="toggle" ></n3-switch>
      <n3-switch ontext="开" offtext="关" :disabled="true"></n3-switch>
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
          <td>value</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>开关状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否禁用状态</td>
        </tr>
        <tr>
          <td>ontext</td>
          <td><code>String</code></td>
          <td><code>ON</code></td>
          <td>开状态的文本</td>
        </tr>
        <tr>
          <td>offtext</td>
          <td><code>String</code></td>
          <td><code>OFF</code></td>
          <td>关状态的文本</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td><code></code></td>
          <td>开关状态变化时触发</td>
        </tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
  </div>
</template>

<script>
export default {
  methods: {
    toggle (value) {
      console.log(value)
    }
  }
}
</script>
