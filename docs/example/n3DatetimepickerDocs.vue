<template>
  <div class="bs-docs-section" id="日期时间选择器"  >
    <h1 class="page-header"><a href="#日期时间选择器" class="anchor">日期时间选择器</a><span class="author"> </span></h1>
    <div class="bs-example">
     
      <n3-datetimepicker :value.sync="value" format="yyyy-MM-dd hh:mm"></n3-datetimepicker>

      <n3-datetimepicker :value.sync="value1" ></n3-datetimepicker>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
      <n3-datetimepicker :value.sync="value" ></n3-datetimepicker>
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
          <td>时间值,需要<code>.sync</code></td>
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
          <td><code>yyyy-MM-dd hh:mm:ss</code></td>
          <td>日期格式</td>
        </tr>
        <tr>
          <td>disabled-days-of-week</td>
          <td><code>Array</code></td>
          <td></td>
          <td>一周内无法选择的日期</td>
        </tr>
        <tr>
          <td>hour-range</td>
          <td><code>Array</code></td>
          <td>[0,60]</td>
          <td>时钟范围</td>
        </tr>
        <tr>
          <td>minute-range</td>
          <td><code>Array</code></td>
          <td>[0,60]</td>
          <td>分钟范围</td>
        </tr>
        <tr>
          <td>second-range</td>
          <td><code>Array</code></td>
          <td>[0,60]</td>
          <td>秒钟范围</td>
        </tr>
       <tr>
          <td>on-hide</td>
          <td><code>Function</code></td>
          <td></td>
          <td>隐藏时候触发</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  methods: {
    hide (val) {
      console.log(val)
    }
  },
  data () {
    return {
      value: '2016-03-25 06:00:00',
      value1: ''
    }
  }
}
</script>
