<template>
  <div class="bs-docs-section" id="提示消息"  >
    <h1 class="page-header">
      <a href="#提示消息" class="anchor">提示消息</a><span class="author"> </span>
    </h1>
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

      <n3-alert  dismissable :show="true">
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
      <hr>

      <n3-alert  dismissable :show="true">
        <strong>default style</strong>
        This is the default style.
      </n3-alert>
      <br>
      <n3-alert type="success" show="true">
        <strong>Well Done!</strong>
        You successfully read this important alert message.
      </n3-alert>
      <br>
      <n3-alert type="info" show="true">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </n3-alert>
      <br>
      <n3-alert type="danger" dismissable show="true">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </n3-alert>
      <br>
      <n3-alert type="warning" dismissable show="true">
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
```
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
          <td>show</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否显示</td>
        </tr>
        <tr>
          <td>dismissable</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否显示关闭按钮</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, 如: 
          <code>default</code>
          <code>success</code>
          <code>info</code>
          <code>warning</code>
          <code>danger</code></td>
          <td><code>success</code></td>
          <td>组件样式</td>
        </tr>
        <tr>
          <td>duration</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>自动关闭延时,设置 <code>0</code> 或者负数，表示不会自动关闭</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code>例如"700px"</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>small</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>缩小</td>
        </tr>
        <tr>
          <td>placement</td>
          <td><code>String</code>. 如:  <code>top</code>, <code>top-right</code>,<code>top-left</code>, <code>bottom</code>,<code>bottom-left</code>, <code>bottom-right</code></td>
          <td></td>
          <td>组件位置</td>
        </tr>
        <tr>
          <td>description</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>警告提示</td>
        </tr>
        <tr>
          <td>message</td>
          <td><code>String</code></td>
          <td></td>
          <td>在设置description时有效</td>
        </tr>
        <tr>
          <td>on-close</td>
          <td><code>Function</code></td>
          <td></td>
          <td>点击关闭按钮时触发</td>
        </tr>
      </tbody>
    </table>
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
