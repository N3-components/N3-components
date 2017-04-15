<template>

### Datetimepicker

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-datetimepicker v-model="value" format="yyyy-MM-dd hh:mm:ss" ></n3-datetimepicker>
</div>


```html
<n3-datetimepicker v-model="value" format="yyyy-MM-dd hh:mm" ></n3-datetimepicker>
```

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| width          | `String`     |    `200px`        |     width      |
| format          | `String`     |    `yyyy-MM-dd hh:mm:ss`       |     format   |

### Events

| name          |   description          |     params   
|-------------  |---------------- |---------- |
| hide | hide | (currentValue) |
| change |change |(currentValue) |

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
      value: '2016-03-25 06:00:00',
      value1: ''
    }
  }
}
</script>
