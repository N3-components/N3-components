<template>
  <div class="bs-docs-section" id="简易分页"  >
    <h1 class="page-header"><a href="#简易分页" class="anchor">简易分页</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-simple-pagination :total="100" :current.sync="1" :pagesize="20" :on-change = "pagechange"></n3-simple-pagination>
      <hr></hr>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-simple-pagination :total="100" :current.sync="1" :pagesize=20 :on-change="changepage"></n3-simple-pagination>
    </script></code></pre>
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
          <td>每页条数</td>
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


