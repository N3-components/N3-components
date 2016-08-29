<template>
  <div class="bs-docs-section" id="下拉框"  >
    <h1 class="page-header"><a href="#下拉框" class="anchor">下拉框</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-dropdown :show.sync="show">
        <div slot="trigger">
          <n3-button>
            点击
            <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
          </n3-button>
        </div>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
      </n3-dropdown>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
      <n3-dropdown :show.sync="show">
        <div slot="trigger">
          <n3-button>
            点击
            <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
          </n3-button>
        </div>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
      </n3-dropdown>
      </script></code></pre>
  </div>

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
          <td>show</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>下拉菜单显示状态<code>.sync</code></td>
        </tr>
        <tr>
          <td>trigger</td>
          <td><code>String</code> 如:  <code>click</code><code>hover</code></td>
          <td>click</td>
          <td>触发方式</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
