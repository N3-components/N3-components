<template>

## 表单

<div class="bs-docs-section" >
<div class="bs-example">
<n3-form ref='form' >
<n3-form-item
    need
    label="姓名"
    :label-col="3">
<n3-input
    name="name"
    v-model="model.name"
    :rules="[{type:'required'}]"
    :custom-validate="nameValidate">
</n3-input>
</n3-form-item>

<n3-form-item
    need
    label="年龄"
    :label-col="3">
<n3-input-number
    name="age"
    v-model="model.age"
    :rules="[{type:'number'},{type:'required'}]">
</n3-input-number>
</n3-input>
</n3-form-item>
<n3-form-item
    need
    label="地址"
    :label-col="3">
<n3-cascader
    name="address"
    :options="options"
    v-model="model.address"
    :rules="[{type:'required'}]">
</n3-cascader>
</n3-form-item>
<n3-form-item
    need
    label="生日"
    :label-col="3">
<n3-datepicker
    name="birthday"
    v-model="model.birthday"
    :rules="[{type:'required'}]">
</n3-datepicker>
</n3-form-item>
<n3-form-item
    need
    label="学校"
    :label-col="3">
<n3-typeahead
    name="学校"
    v-model = "model.school"
    :data="schoolData"
    :rules="[{type:'required'}]">
</n3-typeahead>
</n3-form-item>
<n3-form-item
    need
    label="爱好"
    :label-col="3">
<n3-checkbox-group
    name="hobby"
    v-model = "model.hobby"
    :rules="[{type:'required'}]">
    <n3-checkbox label="0">看书</n3-checkbox>
    <n3-checkbox label="1">运动</n3-checkbox>
    <n3-checkbox value="2">旅行</n3-checkbox>
</n3-checkbox-group>
</n3-form-item>

<n3-form-item
    need
    label="性别"
    :label-col="3">
<n3-radio-group
    name="sex"
    v-model = "model.sex"
    :rules="[{type:'required'}]">
    <n3-radio label="0">男</n3-radio>
    <n3-radio label="1">女</n3-radio>
</n3-radio-group>
</n3-form-item>

<n3-form-item
    need
    label="专业"
    :label-col="3">
<n3-select
    name="sex"
    :options='profession'
    v-model = "model.profession"
    :rules="[{type:'required'}]">
</n3-select>
</n3-form-item>

<n3-form-item
    need
    label="级别"
    :label-col="3">
  <n3-slider
      name="level"
      v-model="model.level"
      :rules="[{type:'required'}]">
  </n3-slider>
</n3-form-item>

<n3-form-item
    need
    label="开启状态"
    :label-col="3">
  <n3-switch
      name="state"
      v-model = "model.state"
      :rules="[{type:'required'}]">
  </n3-switch>
</n3-form-item>
<n3-form-item
    need
    label="喜欢的明星"
    :label-col="3">
  <n3-multiple-input
      name="star"
      v-model = "model.star"
      :rules="[{type:'required'}]">
  </n3-multiple-input>
</n3-form-item>
<n3-form-item
    need
    label="想说的话"
    :label-col="3">
  <n3-textarea
      name="suggestion"
      v-model = "model.suggestion"
      :rules="[{type:'required'}]">
  </n3-textarea>
</n3-form-item>

 <n3-form-item>
     <n3-button type="primary" @click.native="submit" >提交</n3-button>
</n3-form-item>
</n3-form>

```html
<n3-form ref='form' >
  <n3-form-item
      need
      label="姓名"
      :label-col="3">
  <n3-input
      name="name"
      v-model="model.name"
      :rules="[{type:'required'}]"
      :custom-validate="nameValidate">
  </n3-input>
  </n3-form-item>

  <n3-form-item
      need
      label="年龄"
      :label-col="3">
  <n3-input-number
      name="age"
      v-model="model.age"
      :rules="[{type:'number'},{type:'required'}]">
  </n3-input-number>
  </n3-input>
  </n3-form-item>
  <n3-form-item
      need
      label="地址"
      :label-col="3">
  <n3-cascader
      name="address"
      :options="options"
      v-model="model.address"
      :rules="[{type:'required'}]">
  </n3-cascader>
  </n3-form-item>
  <n3-form-item
      need
      label="生日"
      :label-col="3">
  <n3-datepicker
      name="birthday"
      v-model="model.birthday"
      :rules="[{type:'required'}]">
  </n3-datepicker>
  </n3-form-item>
  <n3-form-item
      need
      label="学校"
      :label-col="3">
  <n3-typeahead
      name="学校"
      v-model = "model.school"
      :data="schoolData"
      :rules="[{type:'required'}]">
  </n3-typeahead>
  </n3-form-item>
  <n3-form-item
      need
      label="爱好"
      :label-col="3">
  <n3-checkbox-group
      name="hobby"
      v-model = "model.hobby"
      :rules="[{type:'required'}]">
      <n3-checkbox label="0">看书</n3-checkbox>
      <n3-checkbox label="1">运动</n3-checkbox>
      <n3-checkbox value="2">旅行</n3-checkbox>
  </n3-checkbox-group>
  </n3-form-item>

  <n3-form-item
      need
      label="性别"
      :label-col="3">
  <n3-radio-group
      name="sex"
      v-model = "model.sex"
      :rules="[{type:'required'}]">
      <n3-radio label="0">男</n3-radio>
      <n3-radio label="1">女</n3-radio>
  </n3-radio-group>
  </n3-form-item>

  <n3-form-item
      need
      label="专业"
      :label-col="3">
  <n3-select
      name="sex"
      :options='profession'
      v-model = "model.profession"
      :rules="[{type:'required'}]">
  </n3-select>
  </n3-form-item>

  <n3-form-item
      need
      label="级别"
      :label-col="3">
    <n3-slider
        name="level"
        v-model="model.level"
        :rules="[{type:'required'}]">
    </n3-slider>
  </n3-form-item>

  <n3-form-item
      need
      label="开启状态"
      :label-col="3">
    <n3-switch
        name="state"
        v-model = "model.state"
        :rules="[{type:'required'}]">
    </n3-switch>
  </n3-form-item>
  <n3-form-item
      need
      label="喜欢的明星"
      :label-col="3">
    <n3-multiple-input
        name="star"
        v-model = "model.star"
        :rules="[{type:'required'}]">
    </n3-multiple-input>
  </n3-form-item>
  <n3-form-item
      need
      label="想说的话"
      :label-col="3">
    <n3-textarea
        name="suggestion"
        v-model = "model.suggestion"
        :rules="[{type:'required'}]">
    </n3-textarea>
  </n3-form-item>

   <n3-form-item>
       <n3-button type="primary" @click.native="submit" >提交</n3-button>
  </n3-form-item>
</n3-form>
```

```javascript
  methods: {
    nameValidate (val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: 'success'
        }
      } else {
        return {
          validStatus: 'error',
          tips: '请输入中文名'
        }
      }
    },
    submit () {
      this.$refs.form.validateFields(result => {
        console.log(result)
     })
    }
  }
}
```



### n3-from参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| type          | String     |    horizontal        |     布局方式  horizontal,inline   |
| validate          | Boolean     |    false       |     是否打开验证     |


### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| validateChange    | 校验结果变化     |  


### 方法

| 名称          |   说明          |        
|-------------  |---------------- |
| validateFields    | 校验     |  


### n3-from-item参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| label          | String     |    －        |     表单项说明   |
| label-col          | Number     |    2       |   表单项说明所占栅格数     |
| wrap-col         | Number     |    12        |   表单项所占栅格数     |
| form-col        | Number     |    10       |     表单元素所占栅格数     |
| need       | Boolean     |    false       |     必填标示红点     |

### 待验证组件参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| name          | String     |    －        |     标示输入项，与结果内的值对应   |
| readonly          | Boolean     |    false        |   只读    |
| disabled          | Boolean     |    false       |    禁止改变值    |
| width          | String     |    220px        |   宽度    |
| placeholder          | String     |    －        |  placeholder      |
| custom－validate          | Function     |     |  自定义校验器     |
| name           | String     |    －        |        |
| rules          | Array     |    －        |   验证规则,如 ``` [{type: 'required' }, {type: 'maxlength=6' }, {type:'minlength=3'}, {type: 'phone' }, {type: 'number' }, {type: 'telephone' }, {type: 'email' }] ```  |
| has-feedback    | Boolean     |    true        |    是否显示状态icon    |
      
</div>
</template>
<script>
export default {
  data () {
    return {
      profession: [{
        value: '学生',
        label: '学生'
      }, {
        value: '工程师',
        label: '工程师'
      }, {
        value: '医生',
        label: '医生'
      }],
      model: {
        name: '',
        age: '',
        address: [],
        birthday: '',
        sex: '',
        school: '',
        hobby: [],
        profession: '',
        state: false,
        star: [],
        suggestion: ''
      },
      schoolData: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      sexOptions: [{
        value: '1',
        label: '男'
      }, {
        value: '0',
        label: '女'
      }],
      options: [{
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
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{
            value: 'zhonghuamen',
            label: '中华门'
          }]
        }]
      }],
      validate: false,
      result: {}
    }
  },
  methods: {
    nameValidate (val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: 'success'
        }
      } else {
        return {
          validStatus: 'error',
          tips: '请输入中文名'
        }
      }
    },
    submit () {
      this.$refs.form.validateFields(result => {
        console.log(result)
     })
    }
  }
}
</script>
