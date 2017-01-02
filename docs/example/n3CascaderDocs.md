<template>

## 级联选择

<div class="bs-docs-section" >
  <div class="bs-example">
    <n3-cascader :options="options" :on-change="selectChange" v-model="value" :select-change="true"></n3-cascader>
  </div>

```html
<n3-cascader :options="options" @change="selectChange" v-model="value" :select-change="true"></n3-cascader>
```
```javascript
  [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    disabled:true,
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }]
```   

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| options          | Array     |    -        |       |
|width | String| 200px |宽度 |
|disabled | Boolean| false | 禁用 |
| placeholder | String| - | |
| display-render |Function | - | |
|select-change  | Boolean | - | 选择值就改变 |


### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| change | 值变化 |

    
<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
</div>
</template>

<script>
const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖'
    }]
  }]
}, {
  value: 'jiangsu',
  label: '江苏',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门'
    }]
  }]
}]

const value = ['zhejiang', 'hangzhou']

export default {
  data () {
    return {
      options: options,
      value: value
    }
  },
  methods: {
    selectChange (selectedValue) {
      console.log(this.value)
    }
  }
}
</script>

<style>

</style>
