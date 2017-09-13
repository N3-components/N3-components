<template>

### Form

<div class="bs-docs-section" >
<div class="bs-example">
<n3-form ref='form' >
<n3-form-item
    need
    label="name"
    :label-col="3">
<n3-input
    show-clean
    name="name"
    v-model="model.name"
    :rules="[{type:'required'}]"
    :custom-validate="nameValidate">
</n3-input>
</n3-form-item>

<n3-form-item
    need
    label="age"
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
    label="address"
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
    label="birthday"
    :label-col="3">
<n3-datepicker
    name="birthday"
    v-model="model.birthday"
    :rules="[{type:'required'}]">
</n3-datepicker>
</n3-form-item>
<n3-form-item
    need
    label="school"
    :label-col="3">
<n3-typeahead
    show-clean
    name="school"
    v-model = "model.school"
    :data="schoolData"
    :rules="[{type:'required'}]">
</n3-typeahead>
</n3-form-item>
<n3-form-item
    need
    label="hobby"
    :label-col="3">
<n3-checkbox-group
    name="hobby"
    v-model = "model.hobby"
    :rules="[{type:'required'}]">
    <n3-checkbox label="0">read</n3-checkbox>
    <n3-checkbox label="1">sport</n3-checkbox>
    <n3-checkbox value="2">travel</n3-checkbox>
</n3-checkbox-group>
</n3-form-item>

<n3-form-item
    need
    label="sex"
    :label-col="3">
<n3-radio-group
    name="sex"
    v-model = "model.sex"
    :rules="[{type:'required'}]">
    <n3-radio label="0">male</n3-radio>
    <n3-radio label="1">female</n3-radio>
</n3-radio-group>
</n3-form-item>

<n3-form-item
    need
    label="profession"
    :label-col="3">
<n3-select
    name="profession"
    :options='profession'
    v-model = "model.profession"
    :rules="[{type:'required'}]">
</n3-select>
</n3-form-item>

<n3-form-item
    need
    label="level"
    :label-col="3">
  <n3-slider
      name="level"
      v-model="model.level"
      :rules="[{type:'required'}]">
  </n3-slider>
</n3-form-item>

<n3-form-item
    need
    label="state"
    :label-col="3">
  <n3-switch
      name="state"
      v-model = "model.state"
      :rules="[{type:'required'}]">
  </n3-switch>
</n3-form-item>
<n3-form-item
    need
    label="Favorite singer"
    :label-col="3">
  <n3-multiple-input
      name="star"
      v-model = "model.star"
      :rules="[{type:'required'}]">
  </n3-multiple-input>
</n3-form-item>
<n3-form-item
    need
    label="suggestion"
    :label-col="3">
  <n3-textarea
      name="suggestion"
      v-model = "model.suggestion"
      :rules="[{type:'required'}]">
  </n3-textarea>
</n3-form-item>

 <n3-form-item>
     <n3-button type="primary" @click.native="submit" >submit</n3-button>
</n3-form-item>
</n3-form>

```html
<n3-form ref='form' >
<n3-form-item
    need
    label="name"
    :label-col="3">
<n3-input
    show-clean
    name="name"
    v-model="model.name"
    :rules="[{type:'required'}]"
    :custom-validate="nameValidate">
</n3-input>
</n3-form-item>

<n3-form-item
    need
    label="age"
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
    label="address"
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
    label="birthday"
    :label-col="3">
<n3-datepicker
    name="birthday"
    v-model="model.birthday"
    :rules="[{type:'required'}]">
</n3-datepicker>
</n3-form-item>
<n3-form-item
    need
    label="school"
    :label-col="3">
<n3-typeahead
    show-clean
    name="school"
    v-model = "model.school"
    :data="schoolData"
    :rules="[{type:'required'}]">
</n3-typeahead>
</n3-form-item>
<n3-form-item
    need
    label="hobby"
    :label-col="3">
<n3-checkbox-group
    name="hobby"
    v-model = "model.hobby"
    :rules="[{type:'required'}]">
    <n3-checkbox label="0">read</n3-checkbox>
    <n3-checkbox label="1">sport</n3-checkbox>
    <n3-checkbox value="2">travel</n3-checkbox>
</n3-checkbox-group>
</n3-form-item>

<n3-form-item
    need
    label="sex"
    :label-col="3">
<n3-radio-group
    name="sex"
    v-model = "model.sex"
    :rules="[{type:'required'}]">
    <n3-radio label="0">male</n3-radio>
    <n3-radio label="1">female</n3-radio>
</n3-radio-group>
</n3-form-item>

<n3-form-item
    need
    label="profession"
    :label-col="3">
<n3-select
    name="profession"
    :options='profession'
    v-model = "model.profession"
    :rules="[{type:'required'}]">
</n3-select>
</n3-form-item>

<n3-form-item
    need
    label="level"
    :label-col="3">
  <n3-slider
      name="level"
      v-model="model.level"
      :rules="[{type:'required'}]">
  </n3-slider>
</n3-form-item>

<n3-form-item
    need
    label="state"
    :label-col="3">
  <n3-switch
      name="state"
      v-model = "model.state"
      :rules="[{type:'required'}]">
  </n3-switch>
</n3-form-item>
<n3-form-item
    need
    label="Favorite singer"
    :label-col="3">
  <n3-multiple-input
      name="star"
      v-model = "model.star"
      :rules="[{type:'required'}]">
  </n3-multiple-input>
</n3-form-item>
<n3-form-item
    need
    label="suggestion"
    :label-col="3">
  <n3-textarea
      name="suggestion"
      v-model = "model.suggestion"
      :rules="[{type:'required'}]">
  </n3-textarea>
</n3-form-item>

 <n3-form-item>
     <n3-button type="primary" @click.native="submit" >submit</n3-button>
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

### n3-form Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| type          | `String`     |    `horizontal`        |     form type,  `horizontal`,`inline`   |
| validate          | `Boolean`     |    `false`       |     whether the form will be   validated or not   |


### Events

| name          |   description          |     params   
|-------------  |---------------- |   ---- |
| validateChange    | validate results change     |    (validateResults) |


### Methods

| name          |   description          |        
|-------------  |---------------- |
| validateFields    | validate method     |  


### n3-form-item Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| label          | `String`     |    －        |    description of  form item    |
| label-col          | `Number`     |    `2`       |   label col     |
| wrap-col         | `Number`     |    `12`        |   form item col    |
| form-col        | `Number`     |    `10`       |    form item content col     |
| need       | `Boolean`     |    `false`       |     need marked     |

### validate components Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| custom－validate          | `Function`     |     |  custom－validate     |
| rules          | `Array`     |    －        |   validate rules , ``` [{type: 'required' }, {type: 'maxlength=6' }, {type:'minlength=3'}, {type: 'phone' }, {type: 'number' }, {type: 'telephone' }, {type: 'email' }] ```  |
      
</div>
</template>
<script>
export default {
  data () {
    return {
      profession: [{
        value: 'student',
        label: 'student'
      }, {
        value: 'engineer',
        label: 'engineer'
      }, {
        value: 'doctor',
        label: 'doctor'
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
        label: 'male'
      }, {
        value: '0',
        label: 'female'
      }],
      options: [{
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
        children: [{
          value: 'nanjing',
          label: 'nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'zhonghuamen'
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
          tips: 'chinese name please'
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
