<template>

### Accordion

<div class="bs-docs-section">
<div class="bs-example">
  <p>
    <input type="checkbox" v-model="checked">
    open one panel
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

### According Params

| name | type | default | description |
| --- | --- | --- | --- |
| one-at-time | `Boolean` | `false` | Controls whether other panels are closed when a panel is opened |
| effect | `String` | `collapse` | animation |

### Events

| name          |   description          |     params   
|-------------  |---------------- |---|
| change | value change |(panelOpens) |

### Panel Params

| name | type | default | description |
| --- | --- | --- | --- |
| is-open | `Boolean` | `false` | Whether the panel is open or closed |
| header | `String` |  | Panel display of the contents of the head, click on the contents of the panel to open the panel |

### Panel Events

| name          |   description          |     params   
|-------------  |---------------- |---|
| change | open change |(panelOpen) |

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
