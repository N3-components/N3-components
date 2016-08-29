<template>
  <div class="bs-docs-section" id="单选框"  >
    <h1 class="page-header"><a href="#单选框" class="anchor">单选框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>Radio</h4>
      <n3-radio-group :value.sync="radioValue" type="primary">
        <n3-radio-btn value="left" disabled>Left</n3-radio-btn>
        <n3-radio-btn value="middle" checked>Middle</n3-radio-btn>
        <n3-radio-btn value="right">Right</n3-radio-btn>
      </n3-radio-group>

      <n3-radio-group :value.sync="radioValue" >
        <n3-radio value="left" disabled>Left</n3-radio>
        <n3-radio value="middle" checked>Middle</n3-radio>
        <n3-radio value="right">Right</n3-radio>
      </n3-radio-group>
      <p>
        <pre>
Radio value: {{radioValue}}
        </pre>
      </p>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
     <n3-radio-group :value.sync="radioValue" type="primary">
        <n3-radio-btn value="left" disabled>Left</n3-radio-btn>
        <n3-radio-btn value="middle" checked>Middle</n3-radio-btn>
        <n3-radio-btn value="right">Right</n3-radio-btn>
      </n3-radio-group>

      <n3-radio-group :value.sync="radioValue" >
        <n3-radio value="left" disabled>Left</n3-radio>
        <n3-radio value="middle" checked>Middle</n3-radio>
        <n3-radio value="right">Right</n3-radio>
      </n3-radio-group>
    </script></code></pre>
    <br>
    <h2>group</h2>
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
          <td><code>String,Number</code></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>color</td>
          <td><code>String</code>, 如:  <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code></td>
          <td><code>default</code></td>
          <td></td>
        </tr>
        <tr>
          <td>options</td>
          <td><code>Array</code></td>
          <td></td>
          <td><code>[{value:'a',label:'a'}]</code></td>
        </tr>
         <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td></td>
          <td>radio,button(radio) 使用options时起作用</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td></td>
          <td>值变化时调用</td>
        </tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>

    <h2>radio</h2>
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
          <td><code>String</code>  <code>Number</code></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td></td>
        </tr>
        <tr>
          <td>checked</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>初始化选中</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      radioValue: ''
    }
  }
}
</script>
