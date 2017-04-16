<template>

### Cascader

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
    label: 'zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'hangzhou',
      children: [{
        value: 'xihu',
        label: 'xihu',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'jiangsu',
    disabled:true,
    children: [{
      value: 'nanjing',
      label: 'nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'zhonghuamen',
      }],
    }],
  }]
```   

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| options          | Array     |    -        |       |
| width | `String`| `200px` | width |
| disabled | `Boolean`| `false` | disabled |
| placeholder | `String`| - | |
| display-render |`Function` | - | |
| select-change  | `Boolean` | - | Whether to select to change |


### Events

| name      | description    | params      |
|---------- |-------- |---------- |
| change | change | (currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

</div>
</template>

<script>
const options = [{
  value: 'zhejiang',
  label: 'zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'hangzhou',
    children: [{
      value: 'xihu',
      label: 'xihu'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'zhonghuamen'
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
