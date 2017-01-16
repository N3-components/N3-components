<template>

## 提示消息

<div class="bs-docs-section" id="提示消息"  >
<div class="bs-example" >
  <n3-button type='success'
    @click.native="openRight">
    点击出现在右边
  </n3-button>
  <n3-button type='danger'
    @click.native="openTop">
    点击出现在顶部
  </n3-button>
  <hr>
  <n3-alert dismissable :show="true">
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
    message="信息提示"
    description>
    这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示这里是信息提示这里是信息提示这里是信息提示
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="danger"
    width="700px"
    message="错误提示"
    description
    dismissable>
    这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示这里是信息提示这里是信息提示这里是信息提示
  </n3-alert>
  <br>
  <n3-alert
    :show="true"
    type="info"
    width="700px"
    message="错误提示"
    :on-close="close"
    description
    dismissable>
    点击关闭按钮的回调函数,打开控制台看看:)
  </n3-alert>
  <n3-alert
    ref="alertRight"
    type="success"
    width="700px"
    placement="top-right"
    message="信息提示"
    description
    dismissable>
    <p>You successfully read this important alert message.</p>
  </n3-alert>
  <n3-alert
    ref="alertTop"
    :duration="3000"
    type="danger"
    placement="top"
    message="警告"
    description
    dismissable>
    <strong>Heads up!</strong>
    <p>This alert needs your attention.</p>
  </n3-alert>
</div>

```html
<n3-button type='success'
  @click.native="openRight">
  点击出现在右边
</n3-button>

<n3-button type='danger'
  @click.native="openTop">
 点击出现在顶部
</n3-button>

<n3-alert dismissable :show="true">
  <strong>default style</strong>
  This is the default style.
</n3-alert>

<n3-alert type="success" show="true">
  <strong>Well Done!</strong>
  You successfully read this important alert message.
</n3-alert>

<n3-alert type="info" show="true">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</n3-alert>

<n3-alert type="danger" dismissable show="true">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</n3-alert>

<n3-alert type="warning" dismissable show="true">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
  <hr>
</n3-alert>

<n3-alert
  :show="true"
  type="success"
  width="700px"
  message="信息提示"
  description>
  这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示这里是信息提示这里是信息提示这里是信息提示
</n3-alert>

<n3-alert
  :show="true"
  type="danger"
  width="700px"
  message="错误提示"
  description
  dismissable>
  这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示，这里是信息提示这里是信息提示这里是信息提示这里是信息提示
</n3-alert>

<n3-alert
  show="true"
  type="info"
  width="700px"
  message="错误提示"
  :on-close="close"
  description
  dismissable>
  点击关闭按钮的回调函数,打开控制台看看:)
</n3-alert>

<n3-alert
  ref="alertRight"
  type="success"
  width="700px"
  placement="top-right"
  message="信息提示"
  description
  dismissable>
  <p>You successfully read this important alert message.</p>
</n3-alert>

<n3-alert
  ref="alertTop"
  :duration="3000"
  type="danger"
  placement="top"
  message="警告"
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
      console.log('你点击了关闭按钮')
    }
  }
}
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | `Boolean` | `false` | 是否显示 |
| dismissable | `Boolean` | `false` | 是否显示关闭按钮 |
| type | `String`, 如: `default` `success` `info` `warning` `danger` | `success` | 组件样式 |
| duration | `Number` | `0` | 自动关闭延时,设置 `0` 或者负数，表示不会自动关闭 |
| width | `String`例如"700px" |  |  |
| small | `Boolean` |  | 缩小 |
| placement | `String`. 如: `top`, `top-right`,`top-left`, `bottom`,`bottom-left`, `bottom-right` |  | 组件位置 |
| description | `Boolean` | false | 警告提示 |
| message | `String` |  | 在设置description时有效 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close  | 点击关闭按钮时触发 |  |

</div>
</template>

<script >
  import n3Alert from 'src/n3Alert.vue'
  import n3Button from 'src/n3Button.vue'

  export default {
    methods: {
      openRight () {
        this.$refs.alertRight.open()
      },
      openTop () {
        this.$refs.alertTop.open()
      },
      close () {
        console.log('你点击了关闭按钮')
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
