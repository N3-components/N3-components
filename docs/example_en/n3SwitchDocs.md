<template>

### Switch

<div class="bs-docs-section" >
<div class="bs-example">

<h3><n3-switch v-model="value"></n3-switch></h3>

<h3><n3-switch ontext="ON" offtext="OFF" @change="toggle" v-model="value"></n3-switch></h3>

<h3><n3-switch ontext="NO" offtext="OFF" @change="toggle" :disabled="true"></n3-switch></h3>

</div>

```html
<n3-switch v-model="value"></n3-switch>

<n3-switch ontext="ON" offtext="OFF" @change="toggle" v-model="value"></n3-switch>

<n3-switch ontext="ON" offtext="OFF" @change="toggle" :disabled="true"></n3-switch>
```

### Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| disabled          | `boolean`     |    `false`        |     disabled     |
| ontext          | `String`     |    `ON`        |     text of NO     |
| offtext          | `String`     |    `OFF`        |     text of OFF     |


### Events

| name          |   description          |        
|-------------  |---------------- |
| change | change |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

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
