<template>

### 折叠面板

<div class="bs-docs-section">
<div class="bs-example">
  <p>
    <input type="checkbox" v-model="checked">
    一次只打开一个
  </p>
  <n3-accordion :one-at-time="checked" @change="change">
    <n3-panel :is-open="true" index="1" @change="change">
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
<n3-accordion :one-at-time="checked" @change="change">
  <n3-panel :is-open="true" index="1" @change="change">
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
```

```javascript
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
```

### According参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| one-at-time | `Boolean` | `false` | 控制当一个面板被打开时，其他面板是否关闭 |
| effect | `String` | `collapse` | 切换动画 |

### According Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 改变时的回调函数,参数为panel的状态数组 |  |

### Panel参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| is-open | `Boolean` | `false` | 面板打开还是关闭 |
| header | `String` |  | 面板头部显示的内容，点击该内容进行面板的打开收缩 |

### Panel Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 改变时的回调函数,参数为panel的状态 |  |

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
