<template>

### 标签页

<div class="bs-docs-section" >
<div class="bs-example">

#### 使用list

<n3-tabs :on-change="change" :list="list"></n3-tabs>
```html
<n3-tabs :on-change="change" :list="list"></n3-tabs>
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

#### 使用tab

<n3-tabs :on-change="change" :value="1">
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
<n3-tabs :on-change="change" :value="1">
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


#### 胶囊样式 pills

<n3-tabs pills>
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

#### 垂直样式 stacked

<n3-tabs pills stacked style="max-width: 300px;" :on-change="change">
  <n3-tab header="one" >
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

#### 垂直样式 stacked

<n3-tabs primary pills stacked style="max-width: 300px;">
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>

---

#### 自适应 justified

<n3-tabs pills justified>
  <n3-tab header="one">
  </n3-tab>
  <n3-tab header="two">
  </n3-tab>
</n3-tabs>
</div>



### n3-column参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| active-index          | Number     |    -         |     占的列数     |
| list          | Array     |    -          |        | <pre><code>
list: [{
  header: 'first',
  badge: 12,
  content: 'xxx'
},{
  header: 'seacond',
  badge: 12,
  content: 'xxxx'
}]
        </code></pre>
| pills          | Boolean     |    false         |     胶囊样式    |
| stacked          | Boolean     |    false         |     竖直状态    |
| primary          | Boolean     |    false         |     胶囊样式    |
| justified          | Boolean     |    false         |     是否自适应    |
| on-change          | Function     |    -         |     是否自适应    |


  <h2>tabs参数</h2>
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
        <td>active-index</td>
        <td><code>Number</code></td>
        <td></td>
        <td></td>
      </tr>
       <tr>
        <td>list</td>
        <td><code>Array</code></td>
        <td></td>
        <td><pre><code>
list: [{
  header: 'first',
  badge: 12,
  content: 'xxx'
},{
  header: 'seacond',
  badge: 12,
  content: 'xxxx'
}]
        </code></pre></td>
      </tr>
      <tr>
        <td>pills</td>
        <td><code>Boolean</code></td>
        <td></td>
        <td>胶囊样式</td>
      </tr>
      <tr>
        <td>stacked</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>竖直状态</td>
      </tr>
       <tr>
        <td>primary</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td></td>
      </tr>
       <tr>
        <td>justified</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>是否自适应</td>
      </tr>
       <tr>
        <td>size</td>
        <td><code>String</code></td>
        <td></td>
        <td>尺寸</td>
      </tr>
       <tr>
        <td>on-change</td>
        <td><code>Function</code></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h2>tab参数</h2>
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
        <td>header</td>
        <td><code>String</code></td>
        <td></td>
        <td>标签头文字</td>
      </tr>
      <tr>
          <td>badge</td>
          <td><code>String</code><code>Number</code></td>
          <td></td>
          <td>徽标</td>
        </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>是否能被激活</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
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
</script>
