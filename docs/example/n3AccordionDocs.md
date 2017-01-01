<template>
### 折叠面板

<div class="bs-docs-section">
  <div class="bs-example">
    <p>
      <input type="checkbox" v-model="checked">
      一次只打开一个
    </p>
    <n3-accordion :one-at-time="checked" :on-change="change">
      <n3-panel  :is-open="true" index="1" :on-change="change">
        <div slot="header">Panel #1</div>
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </n3-panel>
      <n3-panel header="Panel #2" index="2">
        <p>...</p>
        <p>...</p>
        <p>...</p>
        </n3-panel>
      <n3-panel header="Panel #3" index="3">
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </n3-panel>
      <n3-panel header="Panel #4" index="4">
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </n3-panel>
    </n3-accordion>
  </div>

```html
<input type="checkbox" v-model="checked">
<label for="checked">一次只打开一个</label>

 <n3-accordion :one-at-atime="checked" :on-change="change">
  <n3-panel header="Panel #1" :is-open="true" index="1">
    <div slot="header">Panel #1</div>
    ...
    
  </n3-panel>
  <n3-panel header="Panel #2" index="2">
    ...

  </n3-panel>
  <n3-panel header="Panel #3" index="3">
    ...

  </n3-panel>
  <n3-panel header="Panel #4" index="4">
    ...
    
  </n3-panel>
</n3-accordion>
```


  <h2>n3-accordion参数</h2>
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
        <td>one-at-time</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>控制当一个面板被打开时，其他面板是否关闭</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code></td>
        <td>collapse</td>
        <td>切换动画</td>
      </tr>
      <tr>
        <td>on-change</td>
        <td><code>Function</code></td>
        <td></td>
        <td>改变时的回调函数,参数为panel的状态数组</td>
      </tr>
    </tbody>
  </table>
  <h2>n3-panel参数</h2>
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
        <td>is-open</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>面板打开还是关闭</td>
      </tr>
      <tr>
        <td>header</td>
        <td><code>String</code></td>
        <td></td>
        <td>面板头部显示的内容，点击该内容进行面板的打开收缩</td>
      </tr>
      <tr>
        <td>on-change</td>
        <td><code>Function</code></td>
        <td></td>
        <td>改变时的回调函数,参数为panel的状态</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    change (show) {
      console.log(show)
    }
  }
}
</script>
