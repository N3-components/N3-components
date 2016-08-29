<template>
  <div class="bs-docs-section" id="按钮组"  >
    <h1 class="page-header"><a href="#按钮组" class="anchor">按钮组</a><span class="author"> </span></h1>
    <div class="bs-example">
      
      <h4>Checkbox</h4>
      <n3-checkbox-group :value.sync="checkboxValue" >
        <n3-checkbox-btn value="left" disabled>Left</n3-checkbox-btn>
        <n3-checkbox-btn value="middle" checked>Middle</n3-checkbox-btn>
        <n3-checkbox-btn value="right">Right</n3-checkbox-btn>
      </n3-checkbox-group>
      <br>
      <n3-checkbox-group :value.sync="checkboxValue">
        <n3-checkbox value="left" disabled>Left</n3-checkbox>
        <n3-checkbox value="middle" checked>Middle</n3-checkbox>
        <n3-checkbox value="right">Right</n3-checkbox>
      </n3-checkbox-group>

      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
      </p>

      <pre><code class="language-markup"><script type="language-mark-up">
     <n3-checkbox-group :value.sync="checkboxValue" >
        <n3-checkbox-btn value="left" disabled>Left</n3-checkbox-btn>
        <n3-checkbox-btn value="middle" checked>Middle</n3-checkbox-btn>
        <n3-checkbox-btn value="right">Right</n3-checkbox-btn>
      </n3-checkbox-group>
      <br>
      <n3-checkbox-group :value.sync="checkboxValue">
        <n3-checkbox value="left" disabled>Left</n3-checkbox>
        <n3-checkbox value="middle" checked>Middle</n3-checkbox>
        <n3-checkbox value="right">Right</n3-checkbox>
      </n3-checkbox-group>
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
          <td><code>Array</code></td>
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
          <td>Array</td>
          <td></td>
          <td><code>[{value:'a',label:'a'}]</code></td>
        </tr>
         <tr>
          <td>type</td>
          <td>String</td>
          <td></td>
          <td>checkbox,button(checkbox)   radio,button(radio) 使用options时起作用</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>Function</td>
          <td></td>
          <td>值变化时调用</td>
        </tr>
      </tbody>
    </table>
    <p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
    
    <h2>checkbox</h2>
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
          <td>String,Number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td></td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
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
      checkboxValue: []
    }
  }
}
</script>
