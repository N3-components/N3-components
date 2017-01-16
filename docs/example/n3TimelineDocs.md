<template>

## 时间轴

<div class="bs-docs-section" id="时间轴" >

> 时间轴（静态）

<div class="bs-example">
<n3-timeline >
<n3-timeline-item color='#2ecc71' icon="check-circle-o">创建成功</n3-timeline-item>
<n3-timeline-item color='#3498db'>通过审核</n3-timeline-item>
<n3-timeline-item color='#e74c3c' icon="times-circle-o">出现异常</n3-timeline-item>
</n3-timeline>
</div>

```html
<n3-timeline >
  <n3-timeline-item color='#2ecc71' icon="check-circle-o">创建成功</n3-timeline-item>
  <n3-timeline-item color='#3498db'>通过审核</n3-timeline-item>
  <n3-timeline-item color='#e74c3c' icon="times-circle-o">出现异常</n3-timeline-item>
</n3-timeline>
```

> 时间轴（数据绑定）

<div class="bs-example">
<n3-timeline
  :value="value">
</n3-timeline>
</div>

```html
<n3-timeline
  :value="value">
</n3-timeline>
```

```javascript
export default {
  data () {
    return {
      value: [{
        icon: 'check-circle-o',
        color: 'green',
        content: `<a @click="del">创建成功</a>`
      }, {
        content: '<span>通过审核</span>'
      }, {
        content: '<span>出现异常</span>'
      }]
    }
  },
  methods: {
    del () {
      alert(2)
    }
  }
}
```

### Timeline参数
  | 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | `Array` |  | 内容数组 |

### TimelineItem参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | `String` | #2db7f5 | 颜色 |
| content | `String` |  | 内容 |
| icon | `String` |  | 自定义图标 |

</div>
</template>

<script>
export default {
  data () {
    return {
      value: [{
        icon: 'check-circle-o',
        color: 'green',
        content: `<a @click="del">创建成功</a>`
      }, {
        content: '<span>通过审核</span>'
      }, {
        content: '<span>出现异常</span>'
      }]
    }
  },
  methods: {
    del () {
      alert(2)
    }
  }
}
</script>
