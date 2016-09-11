<template>
  <div class="bs-docs-section" id="日期选择器"  >
    <h1 class="page-header"><a href="#日期选择器" class="anchor">日期选择器</a><span class="author"> </span></h1>
    <div class="bs-example">
      <p>
        <pre>
          Selected date is: {{new Date(value).toString().slice(0, -23)}}
        </pre>
      </p>
      <n3-datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
      :format="format.toString()" @change="change"></n3-datepicker>
      <h4>一周内无法选择的日期</h4>

      <n3-select multiple :value.sync="disabled">
        <n3-option value="0">0</n3-option>
        <n3-option value="1">1</n3-option>
        <n3-option value="2">2</n3-option>
        <n3-option value="3">3</n3-option>
        <n3-option value="4">4</n3-option>
        <n3-option value="5">5</n3-option>
        <n3-option value="6">6</n3-option>
      </n3-select>

      <h4>Format</h4>
      <n3-select :value.sync="format" >
        <n3-option value="yyyy,MM,dd">yyyy,MM,dd</n3-option>
        <n3-option value="yyyy-MM-dd">yyyy-MM-dd</n3-option>
        <n3-option value="yyyy.MM.dd">yyyy.MM.dd</n3-option>
        <n3-option value="MMM/dd/yyyy">MMM/dd/yyyy</n3-option>
        <n3-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</n3-option>
      </n3-select>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-datepicker
  :value.sync="value"
  :disabled-days-of-Week="disabled"
  :format="format">
</n3-datepicker>

<n3-select multiple :value.sync="disabled" size=5>
  <n3-option value="0">0</n3-option>
  <n3-option value="1">1</n3-option>
  <n3-option value="2">2</n3-option>
  <n3-option value="3">3</n3-option>
  <n3-option value="4">4</n3-option>
  <n3-option value="5">5</n3-option>
  <n3-option value="6">6</n3-option>
</n3-select>
<n3-select  :value.sync="format">
  <n3-option value="yyyy,MM,dd">yyyy,MM,dd</n3-option>
  <n3-option value="yyyy-MM-dd">yyyy-MM-dd</n3-option>
  <n3-option value="yyyy.MM.dd">yyyy.MM.dd</n3-option>
  <n3-option value="MMM/dd/yyyy">MMM/dd/yyyy</n3-option>
  <n3-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</n3-option>
</n3-select>
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
          <td><code>String</code></td>
          <td></td>
          <td>日期值,需要<code>.sync</code></td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code></td>
          <td>200px</td>
          <td>输入框宽度</td>
        </tr>
        <tr>
          <td>format</td>
          <td><code>String</code></td>
          <td><code>yyyy-MM-dd</code></td>
          <td>日期格式, 如 d, dd, M, MM ,MMM , MMMM, yyyy.</td>
        </tr>
        <tr>
          <td>disabled-days-of-week</td>
          <td><code>Array</code></td>
          <td></td>
          <td>一周内无法选择的日期</td>
        </tr>
         <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td></td>
          <td>值变化触发</td>
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
      disabled: [],
      value: '2016-03-25',
      format: ['MMM/dd/yyyy']
    }
  },
  methods: {
    change (val) {
    }
  },
  watch: {
    disabled () {
      this.$refs.dp.getDateRange()
    },
    format (newV) {
      this.value = this.$refs.dp.stringify(new Date(this.value))
    }
  }
}
</script>
