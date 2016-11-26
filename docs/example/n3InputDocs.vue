<template>
  <div class="bs-docs-section" id="输入框"  >
    <h1 class="page-header"><a href="#输入框" class="anchor">输入框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-input v-model="value" ref="input" ></n3-input>
      <n3-button @click.native="$refs.input.focused=true">聚焦</n3-button>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

<n3-button @click="focused=true">聚焦</n3-button>
    </script></code></pre>
    <br>
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
          <td>password</td>
          <td><code>String</code></td>
          <td>false</td>
          <td>密码输入框</td>
        </tr>
        <tr>
          <td>on-blur</td>
          <td><code>Function</code></td>
          <td></td>
          <td>失去焦点触发函数</td>
        </tr>
        <tr>
          <td>on-focus</td>
          <td><code>Function</code></td>
          <td></td>
          <td>聚焦触发函数</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td></td>
          <td>值变化触发函数</td>
        </tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'ds'
    }
  }
}
</script>
