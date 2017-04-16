<template>

### Timeline

<div class="bs-docs-section" >

> Timeline (static)

<div class="bs-example">
<n3-timeline >
<n3-timeline-item color='#2ecc71' icon="check-circle-o">Create success</n3-timeline-item>
<n3-timeline-item color='#3498db'>Approved</n3-timeline-item>
<n3-timeline-item color='#e74c3c' icon="times-circle-o">Abnormal</n3-timeline-item>
</n3-timeline>
</div>

```html
<n3-timeline >
<n3-timeline-item color='#2ecc71' icon="check-circle-o">Create success</n3-timeline-item>
<n3-timeline-item color='#3498db'>Approved</n3-timeline-item>
<n3-timeline-item color='#e74c3c' icon="times-circle-o">Abnormal</n3-timeline-item>
</n3-timeline>
```

> Timeline (data bind)

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
        content: `<a @click="del">Create success</a>`
      }, {
        content: '<span>Approved</span>'
      }, {
        content: '<span>Abnormal</span>'
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

### Timeline Params

| name | type | default | description |
| --- | --- | --- | --- |
| value | `Array` |  | value |

### TimelineItem Params

| name | type | default | description |
| --- | --- | --- | --- |
| color | `String` | #2db7f5 | color |
| content | `String` |  | content |
| icon | `String` |  | icon |

</div>
</template>

<script>
export default {
  data () {
    return {
      value: [{
        icon: 'check-circle-o',
        color: 'green',
        content: `<a @click="del">Create success</a>`
      }, {
        content: '<span>Approved</span>'
      }, {
        content: '<span>Abnormal</span>'
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
