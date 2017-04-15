<template>

### Rate

<div class="bs-docs-section">
<div class="bs-example">
<n3-rate v-model="value"></n3-rate>

```html
<n3-rate v-model="value"></n3-rate>
```


<n3-rate v-model="value1" allow-half></n3-rate>


```html
<n3-rate v-model="value1" allow-half></n3-rate>
```

<n3-rate v-model="value2" show-text :colors="['#ffeb3b','#ff9800','#f44336']"></n3-rate>


```html
<n3-rate v-model="value2" show-text :colors="['#ffeb3b','#ff9800','#f44336']"></n3-rate>
```

</div>



### Params

| name | type | default | description |
| --- | --- | --- | --- |
| max | `Number` | `5` | max number |
| allow-half | `Boolean` | `false` | allow half  |
| colors | `Array` | `['#F7BA2A', '#F7BA2A', '#F7BA2A']` | color |
| voidColor | `String` | `#C6D1DE` | Unchecked color |
| disabledVoidColor | `String` | `#EFF2F7` | disable the selected color |
| disabled | `Boolean` | `false` | disabled |
| disabled-void-icon | `String` | `star` | Disable the icon for the operation |
| void-icon | `String` | `star-o` | Unchecked icon |
| icons | `Array` | `['star', 'star', 'star']` | checked icon |
| show-text | `Boolean` | `false` | Whether to show text interpretation |
| text-color | `string` | `#1f2d3d` | Text color |
| texts | `Array` | `[]` | Text |

</div>
</template>

<script>
  export default {
    data () {
      return {
        value: 3,
        value1: 2.5,
        value2: 4
      }
    }
  }
</script>
