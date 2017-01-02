<template>

## 开关

<div class="bs-docs-section" id="开关"  >
<div class="bs-example">

<h3><n3-switch v-model="value"></n3-switch></h3>

<h3><n3-switch ontext="开" offtext="关" @change="toggle" v-model="value"></n3-switch></h3>

<h3><n3-switch ontext="开" offtext="关" @change="toggle" :disabled="true"></n3-switch></h3>

</div>


```html

<n3-switch v-model="value"></n3-switch>

<n3-switch ontext="开" offtext="关" @change="toggle" v-model="value"></n3-switch>

<n3-switch ontext="开" offtext="关" @change="toggle" :disabled="true"></n3-switch>

```

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| disabled          | boolean     |    false        |     禁用     |
| ontext          | String     |    ON        |     开文案     |
| offtext          | String     |    OFF        |     关文案     |
| disabled          | boolean     |    false        |     禁用     |


### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| change | 值变化 |

<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: false
    }
  },
  methods: {
    toggle (state) {
      console.log(state)
    }
  }
}
</script>
