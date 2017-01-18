<template>

### 选择框

<div class="bs-docs-section" id="选择框"  >
<div class="bs-example">

> 单选

  <p>
    <pre>
Select data : {{single}}
    </pre>
  </p>
  <n3-select v-model="single" :badge="5">
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> 多选
  
  <p>
    <pre>
Select data : {{multiple.join(', ')}}
    </pre>
  </p>
  <n3-select multiple v-model="multiple" search>
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> 多选限制

  <p>
    <pre>
Select data : {{multipleLimit.join(', ')}}
    </pre>
  </p>
  <n3-select multiple :limit="2" v-model="multipleLimit" search extra>
    <n3-option value="Apple">Apple</n3-option>
    <n3-option value="Banana">Banana</n3-option>
    <n3-option value="Cherry">Cherry</n3-option>
    <n3-option value="Orange">Orange</n3-option>
    <n3-option value="Grape">Grape</n3-option>
  </n3-select>
  <hr>

> 自定义内容

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

> 传递数组，支持搜索

  <p>
    支持只传递接json数组，可以支持搜索
    <pre>
Select data : {{arr}}
    </pre>
  </p>
  <n3-select v-model="arr" :options="fruitOptions" :search="true" multiple extra width="200px">
  </n3-select>
</div>

```html
<!-- 单选框 -->
<n3-select v-model="single" :badge="5">
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- 多选框 -->
<n3-select multiple v-model="multiple" search>
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- 多选限制 -->
<n3-select multiple :limit="2" v-model="multipleLimit" search extra>
  <n3-option value="Apple">Apple</n3-option>
  <n3-option value="Banana">Banana</n3-option>
  <n3-option value="Cherry">Cherry</n3-option>
  <n3-option value="Orange">Orange</n3-option>
  <n3-option value="Grape">Grape</n3-option>
</n3-select>

<!-- 自定义内容 -->
<n3-select multiple v-model="custom" >
  <n3-option value="Star"><span  class="n3-fa n3-fa-star"></span> Star</n3-option>
  <n3-option value="Heart"><span class="n3-fa n3-fa-heart"></span> Heart</n3-option>
  <n3-option value="Film"><span  class="n3-fa n3-fa-film"></span> Film</n3-option>
  <n3-option value="Inbox"><span class="n3-fa n3-fa-inbox"></span> Inbox</n3-option>
</n3-select>

<!-- 传递数组，支持搜索 -->
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

### 参数

样式的参数和 <a href="#n3ButtonsDocs">按钮</a> 相同
    
| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value |  |  | 多选为数组，单选为单个数字或者字符串 |
| options | `Array` | `[]` |  |
| placeholder | `String` | '请选择' |  |
| multiple | `Boolean` | `false` | 支持多选 |
| limit | `Number` | `1024` | 多选限制 |
| search | `Boolean` | `false` | 是否支持搜索 |
| extra | `Boolean` | `false` | 可支持在输入款内添加新的选项(需要search支持) |
| input-placeholder | `String` | `请输入` | 输入框的placeholder |
| width | `String` |  | 选择框大小 |
| menu-max-height | `String` | 300px | 下拉框最大高度 |
| menu-width | `String` |  | 下拉框宽度 |
| format | `Function` | `function(item){ return item.label }` | 选中内容的格式化显示 |
| on-change | `Function` |  | value改变回调函数 |
| disabled | `Boolean` | `false` |  |
| readonly | `Boolean` | `false` |  |
| badge | `String``Number` |  | 徽标 |
| cancelled | `Boolean` |  | 单选时，是否可撤销 |

其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数

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
