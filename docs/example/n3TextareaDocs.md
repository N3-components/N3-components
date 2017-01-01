<template>
  <div class="bs-docs-section" id="文本框"  >
    <h1 class="page-header"><a href="#文本框" class="anchor">文本框</a><span class="author"> </span></h1>
    <div class="bs-example">
      {{value}}
     <n3-textarea v-model="value" ></n3-textarea>
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
          <td>resize</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>是否支持拖动</td>
        </tr>
        <tr>
          <td>max-length</td>
          <td><code>Number</code></td>
          <td></td>
          <td>字符数限制</td>
        </tr>
        <tr>
          <td>max-height</td>
          <td><code>String</code></td>
          <td></td>
          <td>最大高度</td>
        </tr>
        <tr>
          <td>min-height</td>
          <td><code>String</code></td>
          <td></td>
          <td>最小高度</td>
        </tr>
        <tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value:''
    }
  },
  methods: {
  }
}
</script>
