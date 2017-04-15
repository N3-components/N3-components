<template>

## Textarea

<div class="bs-docs-section"  >
  <div class="bs-example">
   <n3-textarea v-model="value" ></n3-textarea>
  </div>

```html
<n3-textarea v-model="value" ></n3-textarea>
```

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| resize          | `boolean`     |    `false`        |     resize suggestion     |
| max-length| `Number` | - | length limit of value |
| max-height| `String` | - |max height |
| min-height| `String` | - |min height |

### Events

| name          |   description          |        
|-------------  |---------------- |
| blur          | blur     |  
| focus          | focus     |  
| change | change |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>
</div>
</template>

<script>

export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
