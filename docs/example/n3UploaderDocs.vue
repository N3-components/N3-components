<template>
  <div class="bs-docs-section" id="文件上传"  >
    <h1 class="page-header"><a href="#文件上传" class="anchor">文件上传</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>点击</h4>
      <n3-uploader url=""></n3-uploader>
      <hr>
       <h4>拖拽</h4>
      <n3-uploader type="drag" ></n3-uploader>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
       <n3-uploader url="/upload"></n3-uploader>

       <n3-uploader url="/upload" type="drag"></n3-uploader>
    </script></code></pre>
  <h2>参数</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
         <th>参数名</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>name</td>
        <td><code>String</code></td>
        <td>files</td>
        <td>文件对象的name</td>
      </tr>
      <tr>
        <td>type</td>
        <td><code>String</code> oneof <code>click</code> <code>drag</code> </td>
        <td>click</td>
        <td>拖拽或者点击</td>
      </tr>
      <tr>
        <td>accept</td>
        <td><code>String</code></td>
        <td>'' (全支持)</td>
        <td>支持的文件类型 例如: 'image/jpeg' 或者 'image'支持所有图片格式</td>
      </tr>
      <tr>
        <td>url</td>
        <td><code>String</code></td>
        <td></td>
        <td>上传地址</td>
      </tr>
      <tr>
        <td>multiple</td>
        <td><code>Boolean</code></td>
        <td>true</td>
        <td>支持多文件上传</td>
      </tr>
      <tr>
        <td>drag-width</td>
        <td><code>String</code></td>
        <td>300px</td>
        <td>拖拽框宽度</td>
      </tr>
      <tr>
        <td>drag-height</td>
        <td><code>String</code></td>
        <td>200px</td>
        <td>拖拽框高度</td>
      </tr>
      <tr>
        <td>on-error</td>
        <td><code>Function</code></td>
        <td><pre><code class="language-javascript">
function (data) {
  this.n3Toast({
    text: data.message
  })
} </code></pre></td>
        <td>出错时触发函数</td>
      </tr>
      <tr>
        <td>on-success</td>
        <td><code>Function</code></td>
        <td></td>
        <td>成功时触发函数</td>
      </tr>
      <tr>
        <td>on-delete</td>
        <td><code>Function</code></td>
        <td></td>
        <td>文件删除时触发函数</td>
      </tr>
      <tr>
        <td>on-finish</td>
        <td><code>Function</code></td>
        <td></td>
        <td>所有上传任务结束时触发函数</td>
      </tr>
      <tr>
        <td>max-length</td>
        <td><code>Number</code></td>
        <td>10</td>
        <td>上传文件个数限制</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>
