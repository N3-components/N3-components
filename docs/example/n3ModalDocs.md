<template>

### 弹出框

<div class="bs-docs-section" id="弹出框"  >
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

```html
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
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `String` |  | 弹出框标题 |
| show | `Boolean` |  | 是否显示,需要`.sync` |
| effect | `String` | 'fade' | `fade``zoom` |
| width | `String` | `600px` |  |
| backdrop | `Boolean` | `true` | 点击遮罩层是否关闭弹出框 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| show  | 显示模态框时 |  |
| hide  | 隐藏模态框时 |  |
| confirm  | 按下确认时 |  |

### 用法说明

如果你只需要一个简单的弹出框 ，你只需要传递 <code>title</code> 参数 ，将默认带上footer.

但是如果你需要自己定制弹出框内容，你可以实现

```html
<div slot="header">...</div>
<div slot="body">...</div>
<div slot="footer">...</div>
```

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
