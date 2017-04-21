<template>

### Tabs

<div class="bs-docs-section" >
<div class="bs-example">

> list

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

> tab

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

>  pills

<n3-tabs pills>
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

>  stacked

<n3-tabs pills stacked style="max-width: 300px;" @change="change">
  <n3-tab header="one" >
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

>  stacked

<n3-tabs primary pills stacked style="max-width: 300px;">
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

>  justified

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
        content: 'first'
      }, {
        header: 'seacond',
        badge: 12,
        content: 'seacond'
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

### Tabs params

| name | type | default | description |
| --- | --- | --- | --- |
| value | `Number` |  |  |
| list | `Array` |  | |
| pills | `Boolean` |  | pills |
| stacked | `Boolean` | false | stacked |
| primary | `Boolean` | false |  |
| justified | `Boolean` | false | justified |
| size | `String` |  | size |

### Tabs Events

| name      | description    | params      |
|---------- |-------- |---------- |
| change  | tab change |  |


### tab params

| name | type | default | description |
| --- | --- | --- | --- |
| header | `String` |  | header |
| badge | `String``Number` |  | badge |
| disabled | `Boolean` | false | disabled |

</div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        header: 'first',
        badge: 12,
        content: 'first'
      }, {
        header: 'seacond',
        badge: 12,
        content: 'seacond'
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
