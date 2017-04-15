<template>

### Uploader

<div class="bs-docs-section"   >
<div class="bs-example">

#### simplie file

<n3-uploader  url="http://test.com/" :multiple="false" @error="onError" :max-size="0.5"></n3-uploader>

---

#### click

<n3-uploader url="http://test.com/" @error="onError"></n3-uploader>

---

#### drag

<n3-uploader type="drag" url="http://test.com/" @error="onError"></n3-uploader>

</div>

```html
<!-- single file -->
<n3-uploader url="http://test.com/" :multiple="false" @error="onError" :max-size="0.5"></n3-uploader>

<!-- click -->
<n3-uploader url="http://test.com/" @error="onError"></n3-uploader>

<!-- drag -->
<n3-uploader type="drag" url="http://test.com/" @error="onError"></n3-uploader>
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| name | `String` | files | file name |
| type | `String`：`click` 或 `drag` | click | type |
| accept | `String` | '' (accept all) | file type example: `'image/jpeg'` or `'image'`, `'txt|image|mp3'` |
| url | `String` |  | target url |
| params | `Object` |  | params |
| multiple | `Boolean` | true | accept multiple files |
| drag-width | `String` | 300px | width |
| drag-height | `String` | 200px | height |
| max-length | `Number` | 10 | number limit for files |
| with-credentials | `Boolean` | false | cookies support |
| max-size | `Number` | 10 | size limit of file（MB）

### Events

| name          |   description          |     params   
|---------- |-------- |---------- |
| success | when uploaded mask is done successfully | ({response, file}) |
| finish | when  all masks are finished | () |
| delete | when mask is deleted | (uploadItem) |
| error | when error occurs | ({message, file}) |

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
