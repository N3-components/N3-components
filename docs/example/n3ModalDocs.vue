<template>
  <div class="bs-docs-section" id="弹出框"  >
    <h1 class="page-header"><a href="#弹出框" class="anchor">弹出框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-button @click.native="showModal">Show modal</n3-button>
      <n3-modal title="Modal title" effect="fade" width="400px" ref="modal">
        <div slot="body">
          What's in a name? That which we call a rose 
          By any other name would smell as sweet. 
        </div>
      </n3-modal>

      <n3-button class="btn btn-success" @click.native="showBigModal">Big modal</n3-button>
      <n3-modal title="Big Modal"  effect="fade" width="800px" ref="bigModal">
        <div slot="body">
          What's in a name? That which we call a rose 
          By any other name would smell as sweet. 
        </div>
      </n3-modal>


      <n3-button class="btn btn-primary" @click.native="showZoomModal">Zoom modal</n3-button>
      <n3-modal title="Zoom Modal" effect="zoom" width="400px" ref="zoomModal">
        <div slot="body">
          What's in a name? That which we call a rose 
          By any other name would smell as sweet. 
        </div>
      </n3-modal>


      <n3-button @click.native="showCustomModal">Show custom modal</n3-button>
      <n3-modal  effect="fade" width="400px" ref="customModal">
        <div slot="header">
        </div>
        <div slot="body">
          What's in a name? That which we call a rose 
          By any other name would smell as sweet. 
        </div>
        <div slot="footer">
        </div>
      </n3-modal>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

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
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td>弹出框标题</td>
      </tr>
       <tr>
        <td>show</td>
        <td><code>Boolean</code></td>
        <td></td>
        <td>是否显示,需要<code>.sync</code></td>
      </tr>
       <tr>
        <td>effect</td>
        <td><code>String</code></td>
        <td>'fade'</td>
        <td><code>fade</code><code>zoom</code></td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>String</code></td>
        <td><code>600px</code></td>
        <td></td>
      </tr>
      <tr>
        <td>backdrop</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>点击遮罩层是否关闭弹出框</td>
      </tr>
      <tr>
        <td>on-show</td>
        <td><code>Function</code></td>
        <td></td>
        <td>弹出框出现时触发</td>
      </tr>
      <tr>
        <td>on-hide</td>
        <td><code>Function</code></td>
        <td></td>
        <td>弹出框隐藏时触发</td>
      </tr>
      <tr>
        <td>on-confirm</td>
        <td><code>Function</code></td>
        <td></td>
        <td>点击弹出框确认按钮时触发</td>
      </tr>
    </tbody>
  </table>
  <h2>用法</h2>
  <p>
    如果你只需要一个简单的弹出框 ，你只需要传递 <code>title</code> 参数 ，将默认带上footer. 但是如果你需要自己定制弹出框内容，你可以实现
    <code>&lt;div slot="header"&gt;...&lt;/div&gt;</code> ,
    <code>&lt;div slot="body"&gt;...&lt;/div&gt;</code>和
    <code>&lt;div slot="footer"&gt;...&lt;/div&gt;</code>.
  </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    showModal () {
      this.$refs.modal.open()
    },
    showBigModal () {
      this.$refs.bigModal.open()
    },
    showZoomModal () {
      this.$refs.zoomModal.open()
    },
    showCustomModal () {
      this.$refs.customModal.open()
    },
    show () {
      console.log('show')
    },
    confirm () {
      console.log('confirm')
    }
  }
}
</script>