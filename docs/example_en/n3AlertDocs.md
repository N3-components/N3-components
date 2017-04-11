<template>

### Alert

<div class="bs-docs-section" id="Alert"  >
<div class="bs-example" >

> component 

  <n3-button type='success'
    @click.native="openRight">
    open right
  </n3-button>
  <n3-button type='danger'
    @click.native="openTop">
    open top
  </n3-button>
  <hr>
  <n3-alert dismissable :show="true" icon="smile-o">
    <strong>default style</strong>
    This is the default style.
  </n3-alert>
  <br>
  <n3-alert type="success" :show="true">
    <strong>Well Done!</strong>
    You successfully read this important alert message.
  </n3-alert>
  <br>
  <n3-alert type="info" :show="true">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </n3-alert>
  <br>
  <n3-alert type="danger" dismissable :show="true">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </n3-alert>
  <br>
  <n3-alert type="warning" dismissable :show="true">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
    <hr>
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="success"
    width="700px"
    message="Tip"
    description>
    Tip content
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="danger"
    width="700px"
    message="Error"
    description
    dismissable>
    Error content
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="info"
    width="700px"
    message="Error"
    :on-close="close"
    description
    dismissable>
    click close button
  </n3-alert>
  <n3-alert
    ref="alertRight"
    type="success"
    width="700px"
    placement="top-right"
    message="Tip"
    description
    dismissable>
    <p>You successfully read this important alert message.</p>
  </n3-alert>
  <n3-alert
    ref="alertTop"
    :duration="3000"
    type="danger"
    placement="top"
    message="Warning"
    description
    dismissable>
    <strong>Heads up!</strong>
    <p>This alert needs your attention.</p>
  </n3-alert>
</div>

```html
<n3-button type='success'
    @click.native="openRight">
    open right
  </n3-button>
  <n3-button type='danger'
    @click.native="openTop">
    open top
  </n3-button>
  <hr>
  <n3-alert dismissable :show="true" icon="smile-o">
    <strong>default style</strong>
    This is the default style.
  </n3-alert>
  <br>
  <n3-alert type="success" :show="true">
    <strong>Well Done!</strong>
    You successfully read this important alert message.
  </n3-alert>
  <br>
  <n3-alert type="info" :show="true">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </n3-alert>
  <br>
  <n3-alert type="danger" dismissable :show="true">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </n3-alert>
  <br>
  <n3-alert type="warning" dismissable :show="true">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
    <hr>
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="success"
    width="700px"
    message="Tip"
    description>
    Tip content
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="danger"
    width="700px"
    message="Error"
    description
    dismissable>
    Error content
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="info"
    width="700px"
    message="Error"
    :on-close="close"
    description
    dismissable>
    click close button
  </n3-alert>
  <n3-alert
    ref="alertRight"
    type="success"
    width="700px"
    placement="top-right"
    message="Tip"
    description
    dismissable>
    <p>You successfully read this important alert message.</p>
  </n3-alert>
  <n3-alert
    ref="alertTop"
    :duration="3000"
    type="danger"
    placement="top"
    message="Warning"
    description
    dismissable>
    <strong>Heads up!</strong>
    <p>This alert needs your attention.</p>
  </n3-alert>
```

```javascript
export default {
  methods: {
    openRight () {
      this.$refs.alertRight.open()
    },
    openTop () {
      this.$refs.alertTop.open()
    },
    close () {
      console.log('you click the close button')
    }
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| show | `Boolean` | `false` | whether a Alert is visible or not |
| icon | `String` | - | icon |
| dismissable | `Boolean` | `false` | whether a close button is visible or not |
| type | `String`, one of `default` `success` `info` `warning` `danger` | `success` | type of Alert |
| duration | `Number` | `0` | duration setting ,you can set it as `0` to prevent Alert to be closed |
| width | `String`  |  |  |
| small | `Boolean` |  | small style |
| placement | `String`. 如: `top`, `top-right`,`top-left`, `bottom`,`bottom-left`, `bottom-right` |  | placement of Alert |
| description | `Boolean` | `false` | whether a description is visible or not |
| message | `String` |  | work when description is `true` |

### Events

| name      | description    | params      |
|---------- |-------- |---------- |
| close  | emited when  Alert is closed|  |
| show  | emited when Alert show|  |
| hide  | emited when Alert hide|  |


> Method


<n3-button type='success'
  @click.native="open">
  Method 
</n3-button>


```javascript

export default {
  methods: {
    showAlert () {
      this.n3Alert({
        content: 'success',
          type: 'success',
          placement: 'top-right',
          duration: 2000,
          width:'200px' // please set the width when the content is unknown 
      })
    },
  }
}
```



</div>
</template>

<script >
  import n3Alert from 'src/Alert/n3Alert.vue'
  import n3Button from 'src/Button/n3Button.vue'

  export default {
    methods: {
      openRight () {
        this.$refs.alertRight.open()
      },
      openTop () {
        this.$refs.alertTop.open()
      },
      close () {
        console.log('you click close button')
      },
      open () {
        this.n3Alert({
          content: 'success',
          type: 'success',
          placement: 'top-right',
          duration: 2000,
          width:'200px'
        })
      }
    },
    components: {
      n3Alert,
      n3Button
    }
  }
</script>

<style>
.alert-icon-float-left {
  font-size:32px;float:left;margin-right:5px;
}
</style>
