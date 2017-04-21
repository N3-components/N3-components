<template>

### 标签页

<div class="bs-docs-section" >
<div class="bs-example">

> 使用list

<n3-tabs @change="change" :list="list"></n3-tabs>

```html
<n3-tabs @change="change" :list="list"></n3-tabs>
```

```javascript
data () {
  return {
    list: [{
      header: 'first',
      badge: 12,
      content: 'first的内容'
    }, {
      header: 'seacond',
      badge: 12,
      content: 'seacond的内容'
    }]
  }
}
```

---

> 使用tab

<n3-tabs @change="change" :value="1">
  <n3-tab header="one" badge="1">
    <p>.......</p>
    <p>.......</p>
    <p>.......</p>
  </n3-tab>
  <n3-tab header="two">
    <p>*********</p>
    <p>*********</p>
    <p>*********</p>
  </n3-tab>
  <n3-tab header="three" disabled>
    ...
  </n3-tab>
</n3-tabs>

```html
<n3-tabs @change="change" :value="1">
  <n3-tab header="one" badge="1">
    <p>.......</p>
    <p>.......</p>
    <p>.......</p>
  </n3-tab>
  <n3-tab header="two">
    <p>*********</p>
    <p>*********</p>
    <p>*********</p>
  </n3-tab>
  <n3-tab header="three" disabled>
    ...
  </n3-tab>
</n3-tabs>
```

---

> 胶囊样式 pills

<n3-tabs pills>
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

> 垂直样式 stacked

<n3-tabs pills stacked style="max-width: 300px;" @change="change">
  <n3-tab header="one" >
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

> 垂直样式 stacked

<n3-tabs primary pills stacked style="max-width: 300px;">
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

> 自适应 justified

<n3-tabs pills justified>
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>
</div>

```javascript
export default {
  data () {
    return {
      list: [{
        header: 'first',
        badge: 12,
        content: 'first的内容'
      }, {
        header: 'seacond',
        badge: 12,
        content: 'seacond的内容'
      }]
    }
  },
  methods: {
    change (index, el) {
      console.log(index, el)
    }
  }
}
```

### Tabs参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value| `Number` |  |  |
| list | `Array` |  | |
| pills | `Boolean` |  | 胶囊样式 |
| stacked | `Boolean` | false | 竖直状态 |
| primary | `Boolean` | false |  |
| justified | `Boolean` | false | 是否自适应 |
| size | `String` |  | 尺寸 |

### Tabs Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 切换tab时 |  |


### tab 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| header | `String` |  | 标签头文字 |
| badge | `String``Number` |  | 徽标 |
| disabled | `Boolean` | false | 是否能被激活 |

</div>
</template>

<script>
export default {
  data () {
    return {
      index:0,
      list: [{
        header: 'first',
        badge: 12,
        content: 'first的内容'
      }, {
        header: 'seacond',
        badge: 12,
        content: 'seacond的内容'
      }]
    }
  },
  methods: {
    change (index, el) {
      console.log(index, el)
    }
  }
}
</script>
