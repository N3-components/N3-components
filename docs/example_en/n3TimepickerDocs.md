<template>

### Timepicker

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-timepicker v-model="value"  format="hh:mm:ss" ></n3-timepicker>
</div>

```html
<n3-timepicker v-model="value"  format="hh:mm:ss" ></n3-timepicker>
```


### Params
| name | type | default | description 
|-------------  |---------------- |----------------  |-------- |
| format          | `String`     |    `hh:mm:ss`        |     format     |
| hour-range          | `String`     |    `[0,60]`      |     range of hour     |
| minute-range          | `String`     |    `[0,60]`      |     range of minute     |
| second-range          | `String`     |    `[0,60]`       |     range of second     |

### Events

| name          |   description          |     params         
|-------------  |---------------- |  ----- |
| hide | hide | (currentValue) |
| change | change | (currentValue) |


<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

</div>
</template>

<script>

export default {
  methods: {
    hide (val) {
      console.log(val)
    }
  },
  data () {
    return {
      value: '',
      value1: ''
    }
  }
}
</script>
