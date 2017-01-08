<template>
  <div class="bs-docs-section" id="分页"  >
    <h1 class="page-header"><a href="#分页" class="anchor">分页</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-page :total="100"  :on-change="pagechange" :show-total="true" :show-sizer="true" :show-elevator="true"></n3-page>
      <hr></hr>
      <n3-page :total="100"  simple></n3-page>
    </div>


```html
<n3-page :total="100"  :on-change="pagechange" :show-total="true" :show-sizer="true" :show-elevator="true"></n3-page>
<n3-page :total="100"  simple></n3-page>
```

<div>
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
          <td>total</td>
          <td><code>Number</code></td>
          <td><code></code></td>
          <td>总条数</td>
        </tr>
        <tr>
          <td>current</td>
          <td><code>Number</code></td>
          <td><code></code></td>
          <td>当前页数,需要<code>.sync</code></td>
        </tr>
        <tr>
          <td>pagesize</td>
          <td><code>Number</code></td>
          <td><code></code></td>
          <td>每页条数,需要<code>.sync</code></td>
        </tr>
        <tr>
          <td>pagesize-opts</td>
          <td><code>Array</code></td>
          <td><code>[10, 20, 30, 40]</code></td>
          <td>每页条数选项</td>
        </tr>
        <tr>
          <td>simple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>简单分页</td>
        </tr>
        <tr>
          <td>show-total</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>显示全部</td>
        </tr>
        <tr>
          <td>show-elevator</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>显示跳转</td>
        </tr>
        <tr>
          <td>show-sizer</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>显示分页选项</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td><code>Function</code></td>
          <td><code></code></td>
          <td>页数改变时的回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    pagechange (page) {
      console.log(page)
    }
  }
}
</script>
