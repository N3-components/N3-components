<template>

### 弹出框

<div class="bs-docs-section" id="弹出框"  >
<div class="bs-example">

> 组件调用

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
  <n3-button @click.native="showConfirm">Show confirm</n3-button>
  <n3-button @click.native="showAlert">Show alert</n3-button>
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

> 函数调用 

```javascript
export default {
  methods: {
    showAlert () {
      this.n3Modal.alert({
        title: '消息框'
        message: '这是一个消息框。',
        effect: 'fade',
        type: 'info',
        onShow () {
          console.log('打开对话框时触发')
        },
        onHide () {
          console.log('关闭对话框时触发')
        }
      })
    },
    showConfirm () {
      this.n3Modal.confirm({
        title: '对话框',
        message: '这是一个提供选择的对话框。',
        effect: 'zoom',
        type: 'success',
        onShow () {
          console.log('打开对话框时触发')
        },
        onConfirm () {
          console.log('点击确定按钮时触发')
        },
        onHide () {
          console.log('关闭对话框时触发')
        }
      })
    }
  }
}
```

### 参数

#### 组件参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `String` |  | 弹出框标题 |
| effect | `String` | 'fade' | `fade``zoom` |
| width | `String` | `600px` |  |
| backdrop | `Boolean` | `true` | 点击遮罩层是否关闭弹出框 |

#### 函数参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `String` |  | 弹出框标题，如果为空则不渲染 header|
| message | `String` |  | 弹出框内容|
| effect | `String` | 'fade' | `fade``zoom` |
| type | `String` | `600px` | 弹出框类型，用于决定弹出框提示图标。 |
| width | `String` | `600px` | 弹出框宽度 |
| onShow | `Function` || 打开弹出框时的回调函数 |
| onHide | `Function` || 关闭弹出框时的回调函数 |
| onConfirm | `Function` || 点击弹出框确定按钮时的回调函数 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| show  | 显示模态框时 |  |
| hide  | 隐藏模态框时 |  |
| confirm  | 按下确认时 |  |

### 用法说明

#### 组件驱动

如果你只需要一个简单的弹出框 ，你只需要传递 <code>title</code> 参数 ，将默认带上footer.

但是如果你需要自己定制弹出框内容，你可以实现

```html
<div slot="header">...</div>
<div slot="body">...</div>
<div slot="footer">...</div>
```

#### 函数驱动

N3 提供函数驱动的一次性模态框，通过实例属性 n3Modal.alert 及 n3Modal.confirm 调用，它会在使用时动态绑定到 DOM 树中，并在关闭后自动销毁。

为了还原原生对话框操作体验，函数驱动的弹出框将不能通过点击背景进行关闭。

```javascript
const options = {...}

export default {
  methods: {
    showAlert () {
      this.n3Modal.alert(options)
    },
    showConfirm () {
      this.n3Modal.confirm(options)
    }
  }
}

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
    showConfirm () {
      this.n3Modal.confirm({
        title: '对话框',
        message: '这是一个提供选择的对话框。',
        effect: 'zoom',
        type: 'info',
        onShow () {
          console.log('打开对话框时触发')
        },
        onConfirm () {
          console.log('点击确定按钮时触发')
        },
        onHide () {
          console.log('关闭对话框时触发')
        }
      })
    },
    showAlert () {
      this.n3Modal.alert({
        title: '消息框',
        message: '这是一个消息框。',
        effect: 'fade',
        type: 'success',
        onShow () {
          console.log('打开对话框时触发')
        },
        onHide () {
          console.log('关闭对话框时触发')
        }
      })
    }
  }
}
</script>