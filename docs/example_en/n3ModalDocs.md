<template>

### Modal

<div class="bs-docs-section">
<div class="bs-example">

> component

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

---

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

```javascript
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
    }
  }
}
```

---

> methods 

```javascript
export default {
  methods: {
    showAlert () {
      this.n3Modal.alert({
        title: 'Title'
        message: 'This is a  Modal。',
        effect: 'fade',
        type: 'info',
        onShow () {
          console.log('open')
        },
        onHide () {
          console.log('close')
        }
      })
    },
    showConfirm () {
      this.n3Modal.confirm({
        title: 'Title',
        message: 'This is a Modal。',
        effect: 'zoom',
        type: 'success',
        onShow () {
          console.log('open')
        },
        onConfirm () {
          console.log('confirm')
        },
        onHide () {
          console.log('hide')
        }
      })
    }
  }
}
```

---

### components

#### Params

| name | type | default | description |
| --- | --- | --- | --- |
| title | `String` |  | title |
| effect | `String` | 'fade' | `fade``zoom` |
| width | `String` | `600px` |  |
| backdrop | `Boolean` | `true` | Click whether the mask layer closes the pop-up box |

#### Events

| name      | description    | 
|---------- |-------- |
| show  | show |  
| hide  | hide |  
| confirm  | confirm |  


#### Methods

| name      | description    | 
|---------- |-------- |
| open  | open  Modal |  |
| close  | close  Modal|  |
| confirm  | emit confirm event |  

---

### Methods

> Directly in the instance call `this.n3Model` modal creation and operation

#### Params

| name | type | default | description |
| --- | --- | --- | --- |
| title | `String` |  | title|
| message | `String` |  | message|
| effect | `String` | 'fade' | `fade``zoom` |
| type | `String` | `600px` | Modal type, used to determine Modal prompt icon. |
| width | `String` | `600px` | width |
| onShow | `Function` || The callback function when the Modal is opened |
| onHide | `Function` || The callback function when the Modal is opened |
| onConfirm | `Function` || Click the callback function when the Modal determines the button |


### Usage

#### component

If you need to customize the contents of the Modal, you can achieve it

```html
<div slot="header">...</div>
<div slot="body">...</div>
<div slot="footer">...</div>
```

#### Methods

N3 provides a function-driven one-time modal, invoked by the instance attributes n3Modal.alert and n3Modal.confirm, which are dynamically bound to the DOM tree when used and automatically destroyed after shutdown.

In order to restore the native dialog operation experience, the function-driven Modal will not be closed by clicking on the background.

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
        title: 'Title',
        message: 'This is a Modal',
        effect: 'zoom',
        type: 'info',
        onShow () {
          console.log('open')
        },
        onConfirm () {
          console.log('confirm')
        },
        onHide () {
          console.log('hide')
        }
      })
    },
    showAlert () {
      this.n3Modal.alert({
        title: 'title',
        message: 'This is a Modal',
        effect: 'fade',
        type: 'success',
        onShow () {
          console.log('open')
        },
        onHide () {
          console.log('hide')
        }
      })
    }
  }
}
</script>