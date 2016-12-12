<template>
  <div class="bs-docs-section" id="选择框"  >
    <h1 class="page-header"><a href="#选择框" class="anchor">选择框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <p>
        <pre>
Select data : {{single}}
        </pre>
      </p>
      <n3-select v-model="single" :badge="5">
        <n3-option value="Apple">Apple</n3-option>
        <n3-option value="Banana">Banana</n3-option>
        <n3-option value="Cherry">Cherry</n3-option>
        <n3-option value="Orange">Orange</n3-option>
        <n3-option value="Grape">Grape</n3-option>
      </n3-select>
      <hr>
      <h4>多选</h4>
      <p>
        <pre>
Select data : {{multiple.join(', ')}}
        </pre>
      </p>
      <n3-select multiple v-model="multiple" search>
        <n3-option value="Apple">Apple</n3-option>
        <n3-option value="Banana">Banana</n3-option>
        <n3-option value="Cherry">Cherry</n3-option>
        <n3-option value="Orange">Orange</n3-option>
        <n3-option value="Grape">Grape</n3-option>
      </n3-select>
      <hr>
      <h4>多选限制</h4>
      <p>
        <pre>
Select data : {{multipleLimit.join(', ')}}
        </pre>
      </p>
      <n3-select multiple :limit="2" v-model="multipleLimit" search extra>
        <n3-option value="Apple">Apple</n3-option>
        <n3-option value="Banana">Banana</n3-option>
        <n3-option value="Cherry">Cherry</n3-option>
        <n3-option value="Orange">Orange</n3-option>
        <n3-option value="Grape">Grape</n3-option>
      </n3-select>
      <hr>
      <h4>自定义内容</h4>
      <p>
        <pre>
Select data : {{custom.join(', ')}}
        </pre>
      </p>
      <n3-select multiple v-model="custom" >
        <n3-option value="Star"><span  class="n3-fa n3-fa-star"></span> Star</n3-option>
        <n3-option value="Heart"><span class="n3-fa n3-fa-heart"></span> Heart</n3-option>
        <n3-option value="Film"><span  class="n3-fa n3-fa-film"></span> Film</n3-option>
        <n3-option value="Inbox"><span class="n3-fa n3-fa-inbox"></span> Inbox</n3-option>
      </n3-select>
      <hr />
      <h4>传递数组，支持搜索</h4>
      <p>
        支持只传递接json数组，可以支持搜索
        <pre>
Select data : {{arr}}
        </pre>
      </p>
      <n3-select v-model="arr" :options="fruitOptions" :search="true" multiple extra width="200px">
      </n3-select>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

    </script></code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">
fruitOptions = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'cherry', label: 'Cherry'},
  {value: 'orange', label: 'Orange'},
  {value: 'grape', label: 'Grape'},
]
    </script></code></pre>
    <h2>参数</h2>
    <p>样式的参数和 <a href="#n3ButtonsDocs">按钮</a> 相同</p>
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
          <td><code></code></td>
          <td><code></code></td>
          <td>多选为数组，单选为单个数字或者字符串</td>
        </tr>
        <tr>
          <td>options</td>
          <td><code>Array</code></td>
          <td><code>[]</code></td>
          <td>json数组</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>'请选择'</td>
          <td></td>
        </tr>
        <tr>
          <td>multiple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>支持多选</td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>1024</code></td>
          <td>多选限制</td>
        </tr>
        <tr>
          <td>search</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否支持搜索</td>
        </tr>
         <tr>
          <td>extra</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>可支持在输入款内添加新的选项(需要search支持)</td>
        </tr>
        <tr>
          <td>input-placeholder</td>
          <td><code>String</code></td>
          <td><code>请输入</code></td>
          <td>输入框的placeholder</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code></td>
          <td><code></code></td>
          <td>选择框大小</td>
        </tr>
        <tr>
          <td>menu-max-height</td>
          <td><code>String</code></td>
          <td><code>300px</code></td>
          <td>下拉框最大高度</td>
        </tr>
        <tr>
          <td>menu-width</td>
          <td><code>String</code></td>
          <td><code></code></td>
          <td>下拉框宽度</td>
        </tr>
        <tr>
          <td>format</td>
          <td><code>Function</code></td>
          <td><code>function(item){
            return item.label
          }</code></td>
          <td>选中内容的格式化显示</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td><code></code></td>
          <td>value改变回调函数</td>
        </tr>
         <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
         <tr>
          <td>readonly</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
         <tr>
          <td>badge</td>
          <td><code>String</code><code>Number</code></td>
          <td></td>
          <td>徽标</td>
        </tr>
        <tr>
          <td>cancelled</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>单选时，是否可撤销</td>
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
      fruitOptions: [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'orange', label: 'Orange'},
        {value: 'grape', label: 'Grape'}
      ],
      arr: ['apple', 'banana'],
      single: 'Apple',
      multiple: [],
      multipleLimit: [],
      custom: []
    }
  }
}
</script>
