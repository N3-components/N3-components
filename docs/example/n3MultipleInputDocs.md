<template>

### 自定义输入

<div class="bs-docs-section" >
<div class="bs-example">
<n3-multiple-input
  @focus="focus" 
  @inputChange="getResult"
  :async="true"
  v-model="a.list" 
  :format="format" 
  :render="render"
  :items="items" >
</n3-multiple-input>
</div>

```html
<n3-multiple-input
  @focus="focus" 
  @inputChange="getResult"
  v-model="a.list" 
  :format="format" 
  :render="render"
  :items="items" >
</n3-multiple-input>
```

```javascript
methods: {
  focus () {
    console.log(1)
  },
  render (item) {
    return item.formatted_address
  },
  getResult (query) {
    console.log(query, 1)
    let self = this
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
      success (ret) {
        self.items = ret.results
      }
    })
  },
  format (item, index) {
    let content = item.formatted_address
    return content
  }
}
```

### 参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| data          | `Array`     |    -        |     本地数组     |
| format          | `Function`     |    -        |     显示格式化函数     |
| limit          | `Number`     |    `8`      |     显示的条数     |
| items          | `Array`     |    `[]`        |     列表数组，用于异步请求     |
| positionMove          | `Boolean`     |    `true`        |     输入框位置是否能控制移动     |
| async          | `Boolean`     |    `false`       |     异步     |
| render          | `Function`     |    -       |     渲染函数     |
| add-format          | `Function`     |    -       |     获取需要的值     |
| dropdow-width          | `String`     |    `220px`       |     下拉宽度     |
| dropdown-height          | `String`     |    `300px`       |     下拉框最大高度     |


### Events

| 名称          |   说明          |    参数 |  
|-------------  |---------------- | ------- |
| blur          | 失焦     | -  |
| focus          | 聚焦     | - |
| change | 值变化 |  (currentValue) | |
| positionChange | 位置变化 | (currentPosition)  |
| inputChange | 输入值变化 |  (query) |


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
      console.log(query, 1)
      let self = this
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
        success (ret) {
          self.items = ret.results
        }
      })
    },
    format (item, index) {
      let content = typeof item === 'string' ? item : item.formatted_address
      return content
    }
  }
}
</script>
