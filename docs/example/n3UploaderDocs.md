<template>

### 文件上传

<div class="bs-docs-section" id="文件上传"  >
<div class="bs-example">

#### 单个文件上传

<n3-uploader url="http://test.com/" :multiple="false" @error="onError" :max-size="0.5"></n3-uploader>

---

#### 点击上传

<n3-uploader url="http://test.com/" @error="onError"></n3-uploader>

---

#### 支持拖拽

<n3-uploader type="drag" url="http://test.com/" @error="onError"></n3-uploader>

</div>

```html
<!-- 单个上传 -->
<n3-uploader url="http://test.com/" :multiple="false" @error="onError" :max-size="0.5"></n3-uploader>

<!-- 点击上传 -->
<n3-uploader url="http://test.com/" @error="onError"></n3-uploader>

<!-- 拖拽上传 -->
<n3-uploader type="drag" url="http://test.com/" @error="onError"></n3-uploader>
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `String` | files | 文件对象的name |
| type | `String`：`click` 或 `drag` | click | 拖拽或者点击 |
| accept | `String` | '' (全支持) | 支持的文件类型 例如: `'image/jpeg'` 或者 `'image'`支持所有图片格式,多个如 `'txt|image|mp3'` |
| url | `String` |  | 上传地址 |
| params | `Object` |  | 上传参数 |
| multiple | `Boolean` | true | 支持多文件上传 |
| drag-width | `String` | 300px | 拖拽框宽度 |
| drag-height | `String` | 200px | 拖拽框高度 |
| max-length | `Number` | 10 | 上传文件个数限制 |
| with-credentials | `Boolean` | false | 跨域时带cookies |
| max-size | `Number` | 10 | 单个文件的size限制（MB）

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| success | 成功上传回调时 | ({response, file}) |
| finish | 完成所有上传任务时 | () |
| delete | 删除一个上传的项目时 | (uploadItem) |
| error | 发生错误时 | ({message, file}) |

</div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    onError ({ message, file }) {
      console.error(message, file)
    }
  }
}
</script>
