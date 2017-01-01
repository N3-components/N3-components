<template>
  <div class="bs-docs-section" id="数字输入框"  >
    <h1 class="page-header"><a href="#数字输入框" class="anchor">数字输入框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-input-number v-model="value"></n3-input-number>
    </div>
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
          <td>value</td>
          <td><code>String</code><code>Number</code></td>
          <td></td>
          <td>输入的值</td>
        </tr>
        <tr>
          <td>max</td>
          <td><code>Number</code></td>
          <td></td>
          <td>最大值</td>
        </tr>
        <tr>
          <td>min</td>
          <td><code>Number</code></td>
          <td></td>
          <td>最小值</td>
        </tr>
        <tr>
          <td>step</td>
          <td><code>Number</code></td>
          <td></td>
          <td>增减量值</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td></td>
          <td>值变化回调函数</td>
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
      value: ''
    }
  }
}
</script>
