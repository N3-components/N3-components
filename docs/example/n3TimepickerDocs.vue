<template>
  <div class="bs-docs-section" id="时间选择器"  >
    <h1 class="page-header"><a href="#时间选择器" class="anchor">时间选择器</a><span class="author"> </span></h1>
    <div class="bs-example">

       <n3-timepicker v-model="value"  format="hh:mm:ss"></n3-timepicker>

       <n3-timepicker v-model="value1"  format="hh:mm:ss"></n3-timepicker>
     
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-timepicker :value.sync="value" ></n3-timepicker>
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
          <td>format</td>
          <td><code>String</code></td>
          <td>hh:mm:ss</td>
          <td>格式</td>
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
          <td>隐藏时触发</td>
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
      value: '',
      value1: ''
    }
  }
}
</script>
