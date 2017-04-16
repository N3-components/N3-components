<template>

### Slider

<div class="bs-docs-section" >
<div class="bs-example">
<n3-slider v-model="value" @change="change" orientation="vertical" ></n3-slider>
<p> {{value}}</p> 

<n3-slider v-model="value1" @change="change" :range="true"></n3-slider>
<p> {{value1}}</p> 
</div>

```html
<n3-slider v-model="value" @change="change" orientation="vertical"></n3-slider>
<n3-slider v-model="value1" @change="change" :range="true"></n3-slider>
```

```javascript
export default {
  data () {
    return {
      value: 2
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
```

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| min          | `Number`    |    `0`        |     min value    |
| max          | `Number`     |    `0`        |     max value    |
| step          | `Number`     |    `1`       |     step value    |
| orientation          | `String`     |    `horizontal`      |     `horizontal` `vertical`   |
| range          | `Boolean`     |    `false`       |     range support    |
| tooltip          | `String`     |    `show`      |     tooltip  one of 'show' 'hide' 'always'    |
| disabled          | `Boolean`     |    `false`       |     disabled    |
| formatter          | `Function`     |    -       |     tooltip format function  |
| width          | `String`     |   `220px`      |     width    |
| height          | `String`     |    `220px`      |     height    |

### Events

| name          |   description          |     params   
|-------------  |---------------- |---|
| change | value change |(currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>


</div>
</template>

<script>
export default {
  data () {
    return {
      value:1,
      value1: [1, 2]
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>
