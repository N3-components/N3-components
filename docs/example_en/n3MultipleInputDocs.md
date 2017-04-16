<template>

### MultipleInput

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

### Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| data          | `Array`     |    -        |     locale data     |
| format          | `Function`     |    -        |     format function     |
| limit          | `Number`     |    `8`      |     the limited number of items       |
| items          | `Array`     |    `[]`        |     suggestion items，for asyc     |
| positionMove          | `Boolean`     |    `true`        |     whether the position of cursor can be moved or not     |
| async          | `Boolean`     |    `false`       |     whether is async or not     |
| render          | `Function`     |    -       |     render function     |
| add-format          | `Function`     |    -       |     format function to get right data     |
| dropdown-width          | `String`     |    `220px`       |     width of dropdown      |
| dropdown-height          | `String`     |    `300px`       |     max height of dropdown      |


### Events

| name          |   description          |     params   
|-------------  |---------------- | ------- |
| blur          |blur     | -  |
| focus          | focus     | - |
| change | change |  (currentValue) | |
| positionChange | the position of cursor change | (currentPosition)  |
| inputChange | input value change |  (query) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>
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
