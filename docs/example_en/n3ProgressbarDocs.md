<template>

### ProgressBar

<div class="bs-docs-section"  >

> Height

<div class="bs-example">
  <div class="row">
    <div class="col-md-4">
      <n3-progress class="margin">
        <n3-progressbar :now="20" type="success" height="10px"></n3-progressbar>
      </n3-progress>
    </div>
    <div class="col-md-4">
      <n3-progress class="margin">
        <n3-progressbar :now="40" type="success"></n3-progressbar>
      </n3-progress>
    </div>
  </div>
</div>

```html
<n3-progress class="margin">
  <n3-progressbar :now="20" type="success" height="10px"></n3-progressbar>
</n3-progress>

<n3-progress class="margin">
  <n3-progressbar :now="40" type="success"></n3-progressbar>
</n3-progress>
```

> Dynamic <n3-button @click.native="dynamicClick">Random change</n3-button>

<div class="bs-example">
  <n3-progress class="margin" >
    <n3-progressbar :now="dynamicData[0] * 2" type="info" ></n3-progressbar>
    </n3-progress>
    <n3-progress class="margin">
    <n3-progressbar :now="dynamicData[1] * 2" type="warning"></n3-progressbar>
    </n3-progress>
    <n3-progress class="margin">
    <n3-progressbar :now="dynamicData[2] * 2" type="danger"></n3-progressbar>
    </n3-progress class="margin">
    <n3-progress>
    <n3-progressbar :now="dynamicData[3] * 2" type="success" striped></n3-progressbar>
  </n3-progress>
</div>
  
```html
<n3-progress class="margin" >
  <n3-progressbar :now="dynamicData[0] * 2" type="info" ></n3-progressbar>
  </n3-progress>
  <n3-progress class="margin">
  <n3-progressbar :now="dynamicData[1] * 2" type="warning"></n3-progressbar>
  </n3-progress>
  <n3-progress class="margin">
  <n3-progressbar :now="dynamicData[2] * 2" type="danger"></n3-progressbar>
  </n3-progress class="margin">
  <n3-progress>
  <n3-progressbar :now="dynamicData[3] * 2" type="success" striped></n3-progressbar>
</n3-progress>
```

```javascript
export default {
  data () {
    return {
      dynamicData: [5, 15, 25, 35, 45]
    }
  },
  methods: {
    dynamicClick () {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 50)
      })
    }
  }
}
```

> Superimposed <n3-button @click.native="stackedClick">Random change</n3-button>

<div class="bs-example">
  <n3-progress>
    <n3-progressbar :now="stackedData[0]" label type="warning" striped></n3-progressbar>
    <n3-progressbar :now="stackedData[1]" label type="success" ></n3-progressbar>
    <n3-progressbar :now="stackedData[2]" label type="danger"></n3-progressbar>
    <n3-progressbar :now="stackedData[3]" label type="primary" striped >
  </n3-progressbar>
</div>

```html
<n3-progress>
  <n3-progressbar :now="stackedData[0]" label type="warning" striped></n3-progressbar>
  <n3-progressbar :now="stackedData[1]" label type="success" ></n3-progressbar>
  <n3-progressbar :now="stackedData[2]" label type="danger"></n3-progressbar>
  <n3-progressbar :now="stackedData[3]" label type="primary" striped >
</n3-progressbar>
```

```javascript
export default {
  data () {
    return {
      stackedData: [10, 20, 30, 40]
    }
  },
  methods: {
    stackedClick () {
      let i = 100
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i)
        i = i - random
        return random
      })
    }
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| now | `Number` |  | current value |
| height | `String` | 20px | height |
| type | `String` |  | color |
| label | `Boolean` | `false` | label tip |
| striped | `Boolean` | `false` | striped |
| animated | `Boolean` | `false` | animated style |
    
</div>
</template>

<script>
export default {
  data () {
    return {
      dynamicData: [5, 15, 25, 35, 45],
      stackedData: [10, 20, 30, 40]
    }
  },
  methods: {
    dynamicClick () {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 50)
      })
    },
    stackedClick () {
      let i = 100
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i)
        i = i - random
        return random
      })
    }
  }
}
</script>
<style scoped>
.margin{
  margin-bottom:20px;
}

</style>
