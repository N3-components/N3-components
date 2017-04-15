<template>

### Input

<div class="bs-docs-section" >
<div class="bs-example">

<n3-input v-model="value" ref="input" show-clean></n3-input>
<n3-button @click.native="$refs.input.focus()">focus</n3-button>

</div>

```html
<n3-input v-model="value" ref="input" icon="archive"></n3-input>
<n3-button @click.native="$refs.input.focus()">focus</n3-button>
```

### Password Input

<n3-input v-model="value2" type="password" ref="input2" show-clean></n3-input>
<n3-button @click.native="$refs.input2.focus()">focus</n3-button>

```html
<n3-input v-model="value2" ref="password" icon="archive"></n3-input>
<n3-button @click.native="$refs.input2.focus()">focus</n3-button>
```

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| name           | `String`     |    －        |        |
| readonly          | `Boolean`     |    `false`        |   readonly    |
| disabled          | `Boolean`     |    `false`       |    disabled    |
| width          | `String`     |    `220px`        |   width    |
| placeholder          | `String`   |    －        |  placeholder      |
| type          | `String`     |    `text`        |     type `number` `password` `test`     |
| icon          | `String`     |    -        |     icon     |
| show-clean          | `Boolean`     |    `false`       |     clean icon     |

### Methods

| name      | description    | 
|---------- |-------- |
| clean  | clean value | 
| focus  | focus |  |
| blur  | blur |  |

### Events

| name          |   description          |  params  |      
|-------------  |---------------- | -----|
| blur          | blur     | - |
| focus          | focus     | - |
| change | change |  (currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>
   
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      value2: ''
    }
  },
  mounted () {
    this.value = 100
  }
}
</script>
