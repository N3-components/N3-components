<template>

### Select

<div class="bs-docs-section">
<div class="bs-example">

> Single

  <p>
    <pre>
Select data : {{single}}
    </pre>
  </p>
  <n3-select v-model="single" >
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> Multiple
  
  <p>
    <pre>
Select data : {{multiple.join(', ')}}
    </pre>
  </p>
  <n3-select multiple v-model="multiple" search >
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> Multiple limit

  <p>
    <pre>
Select data : {{multipleLimit.join(', ')}}
    </pre>
  </p>
  <n3-select multiple :limit="2" v-model="multipleLimit" search extra >
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> Custom content

  <p>
    <pre>
Select data : {{custom.join(', ')}}
    </pre>
  </p>
  <n3-select multiple v-model="custom" >
    <n3-option value="Star"><span  class="n3-fa n3-fa-star"></span> Star</n3-option>
    <n3-option value="Heart"><span class="n3-fa n3-fa-heart"></span> Heart</n3-option>
    <n3-option value="Film"><span  class="n3-fa n3-fa-film"></span> Film</n3-option>
    <n3-option value="Inbox"><span class="n3-fa n3-fa-inbox"></span> Inbox</n3-option>
  </n3-select>
  <hr />

> Search

  <p>
    <pre>
Select data : {{arr}}
    </pre>
  </p>
  <n3-select v-model="arr" :options="fruitOptions" :search="true" multiple extra width="200px">
  </n3-select>
</div>

```html
<!-- single -->
<n3-select v-model="single">
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- multiple -->
<n3-select multiple v-model="multiple" search >
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- limit -->
<n3-select multiple :limit="2" v-model="multipleLimit" search extra>
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- Custom content -->
<n3-select multiple v-model="custom" >
  <n3-option value="Star"><span  class="n3-fa n3-fa-star"></span> Star</n3-option>
  <n3-option value="Heart"><span class="n3-fa n3-fa-heart"></span> Heart</n3-option>
  <n3-option value="Film"><span  class="n3-fa n3-fa-film"></span> Film</n3-option>
  <n3-option value="Inbox"><span class="n3-fa n3-fa-inbox"></span> Inbox</n3-option>
</n3-select>

<!-- search -->
<n3-select v-model="arr" :options="fruitOptions" :search="true" multiple extra width="400px">
</n3-select>

```

```javascript
export default {
  data () {
    return {
      fruitOptions: [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'orange', label: 'Orange'},
        {value: 'grape', label: 'Grape'}
      ],
      arr: ['apple', 'banana'],
      single: 'Apple',
      multiple: [],
      multipleLimit: [],
      custom: []
    }
  }
}
```

### Params
| name | type | default | description |
| --- | --- | --- | --- |
| value | `Array`(multiple) `Number`,`String` | - | Selected value |
| options | `Array` | `[]` |  |
| placeholder | `String` | '' |  |
| multiple | `Boolean` | `false` | multiple |
| limit | `Number` | `1024` | Multiple choice limit |
| search | `Boolean` | `false` | search  |
| extra | `Boolean` | `false` |show add new option icon (work width `search`) |
| input-placeholder | `String` | '' | search input placeholder |
| width | `String` |  | width |
| menu-max-height | `String` | `300px` | max height of dropdown |
| menu-width | `String` |  | width of dropdown |
| format | `Function` | `function(item){ return item.label }` | format function |
| disabled | `Boolean` | `false` | disabled  |
| readonly | `Boolean` | `false` | readonly  |
| cancelled | `Boolean` |  | Whether it can be cancelled when you are radio |

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
      fruitOptions: [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'orange', label: 'Orange'},
        {value: 'grape', label: 'Grape'}
      ],
      arr: ['apple', 'banana'],
      single: 'Apple',
      multiple: [],
      multipleLimit: [],
      custom: []
    }
  }
}
</script>
