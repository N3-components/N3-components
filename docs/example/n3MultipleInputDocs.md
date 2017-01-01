<template>
  <div class="bs-docs-section" id="自定义输入"  >
    <h1 class="page-header"><a href="#自定义输入" class="anchor">自定义输入</a><span class="author"> </span></h1>
    <div class="bs-example">
        <n3-multiple-input
          :on-focus="focus" 
          v-model="a.list" 
          :format="format" 
          :on-inputchange="getResult"
          :render="render"
          :items="items"
        ></n3-multiple-input>
    </div>
    {{a.list}}

```javascript
new Vue({
  data:{
    list:[{
      value:'tag1',
      label:'tag1',
    },{
      value:'tag2',
      label:'tag2',
    },{
      value:'tag3',
      label:'tag3',
    }]
  },
  methods:{
    render (item) {
      return item.formatted_address
    },
    getResult (query) {
      let self = this
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
        success (ret) {
          self.items = ret.results
        }
      })
    },
    del (item, index) {
      this.list.splice(index, 1)
    },
    format (item, index) {
      let content = typeof item === 'string' ? item : item.formatted_address
      return `<label class="m-tag" ">${content}</label>`
    }
  }
})
```
  <h2>参数</h2>
  <p>自动补全的参数请参考<a href="./component.html#n3TypeaheadDocs" target="_blank">自动补全组件</a></p>
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
        <td>需要<code>.sync</code></td>
      </tr>
      <tr>
        <td>position</td>
        <td><code>Number</code></td>
        <td></td>
        <td>输入框所在位置,需要<code>.sync</code></td>
      </tr>
      <tr>
        <td>format</td>
        <td><code>Function</code></td>
        <td></td>
        <td>格式化显示函数</td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>String</code></td>
        <td>220px</td>
        <td>组件宽度</td>
      </tr>
      <tr>
        <td>height</td>
        <td><code>String</code></td>
        <td></td>
        <td>组件高度</td>
      </tr>
      <tr>
        <td>input-width</td>
        <td><code>String</code></td>
        <td>50px</td>
        <td>输入框宽度</td>
      </tr>
      <tr>
        <td>dropdown-width</td>
        <td><code>String</code></td>
        <td>220px</td>
        <td>下拉框宽度</td>
      </tr>
      <tr>
        <td>dropdown-height</td>
        <td><code>String</code></td>
        <td>300px</td>
        <td>下拉框最大高度</td>
      </tr>
      <tr>
        <td>add-format</td>
        <td><code>Function</code></td>
        <td><code>function(text){return {
        value:text,
        label:text
        }}</code></td>
        <td>通过输入添加的处理函数</td>
      </tr>
      <tr>
        <td>on-change</td>
        <td><code>Function</code></td>
        <td></td>
        <td>value变化的回调函数</td>
      </tr>
      <tr>
        <td>position-move</td>
        <td><code>Boolean</code></td>
        <td>true</td>
        <td>是否允许用户改变输入框的位置</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
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
      query: '',
      items: [],
      a: {list: []}
    }
  },
  methods: {
    focus () {
      console.log(1)
    },
    render (item) {
      return item.formatted_address
    },
    getResult (query) {
      let self = this
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
        success (ret) {
          self.items = ret.results
        }
      })
    },
    del (item, index) {
      this.list.splice(index, 1)
    },
    format (item, index) {
      let content = typeof item === 'string' ? item : item.formatted_address
      return content
    }
  }
}
</script>
