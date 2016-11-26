<template>
  <div class="bs-docs-section" id="滑块"  >
    <h1 class="page-header"><a href="#滑块" class="anchor">滑块</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-slider v-model="value" :on-change="change" ></n3-slider>

      <n3-slider v-model="value" :on-change="change" orientation="vertical"></n3-slider>

      <p>滑块的值: {{value}}</p> 
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-slider :value.sync = "value" :on-change="change"></n3-slider>
<n3-slider :value.sync = "value" :on-change="change" orientation="vertical"></n3-slider>
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
        <td><code></code></td>
        <td>滑块的值,需要<code>.sync</code></td>
      </tr>
      <tr>
        <td>min</td>
        <td><code>Number</code></td>
        <td><code>0</code></td>
        <td>最小值</td>
      </tr>
      <tr>
        <td>max</td>
        <td><code>Number</code></td>
        <td><code>10</code></td>
        <td>最大值</td>
      </tr>
      <tr>
        <td>step</td>
        <td><code>Number</code></td>
        <td><code>1</code></td>
        <td>单步增量</td>
      </tr>
      <tr>
        <td>orientation</td>
        <td><code>String</code></td>
        <td><code>horizontal</code></td>
        <td>horizontal(水平) vertical(垂直)</td>
      </tr>
      <tr>
        <td>range</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>是否范围选择</td>
      </tr>
      </tr>
      <tr>
        <td>tooltip</td>
        <td><code>String</code></td>
        <td><code>show</code></td>
        <td>tooltip显示参数 'show' 'hide' 'always'</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>是否禁用</td>
      </tr>
      <tr>
        <td>formatter</td>
        <td><code>Function</code></td>
        <td><code></code></td>
        <td>格式化tooltip显示内容</td>
      </tr>
       <tr>
        <td>width</td>
        <td><code>String</code></td>
        <td><code>220px</code></td>
        <td>水平显示的宽度</td>
      </tr>
       <tr>
        <td>height</td>
        <td><code>String</code></td>
        <td><code>220px</code></td>
        <td>垂直显示的高度</td>
      </tr>
      <tr>
        <td>on-change</td>
        <td><code>Function</code></td>
        <td><code></code></td>
        <td>滑块值变化时触发</td>
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
      value: 2
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>
