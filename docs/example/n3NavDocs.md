<template>
  <div class="bs-docs-section" id="导航"  >
    <h1 class="page-header"><a href="#导航" class="anchor">导航</a><span class="author"> </span></h1>
    <div class="bs-example">
        <n3-nav theme="default" >
          <n3-nav-item active>
            <a>导航一</a>
          </n3-nav-item>
          <n3-nav-item disabled>
            <a >导航二</a>
          </n3-nav-item>
          <n3-nav-item>
            <n3-sub-nav trigger="hover" :show="show1" @show="show1 = true" @hide="show1 = false">
              <a slot="title">导航三</a>
              <n3-nav-item >
                <a>子导航一</a>
              </n3-nav-item>
              <n3-nav-item >
                <a>子导航二</a>
              </n3-nav-item>
              <n3-nav-item >
                <a >子导航三</a>
              </n3-nav-item>
            </n3-sub-nav>
          </n3-nav-item>
          </n3-nav>
```html
<n3-nav theme="default" >
  <n3-nav-item active>
    <a >导航一</a>
  </n3-nav-item>
  <n3-nav-item disabled>
    <a >导航二</a>
  </n3-nav-item>
  <n3-nav-item>
    <n3-sub-nav>
      <a slot="title">导航三</a>
      <n3-nav-item >
        <a>子导航一</a>
      </n3-nav-item>
      <n3-nav-item >
        <a>子导航二</a>
      </n3-nav-item>
      <n3-nav-item >
        <a >子导航三</a>
      </n3-nav-item>
    </n3-sub-nav>
  </n3-nav-item>
</n3-nav>
```
        <n3-nav theme="dark" type="vertical" style="width:300px;">
          <n3-nav-item active>
            <a >导航一</a>
          </n3-nav-item>
          <n3-nav-item disabled>
            <a >导航二</a>
          </n3-nav-item>
          <n3-nav-item>
            <n3-sub-nav :show="show2" @toggle="show2 = !show2">
              <a slot="title">导航三</a>
              <n3-nav-item >
                <a>子导航一</a>
              </n3-nav-item>
              <n3-nav-item >
                <a>子导航二</a>
              </n3-nav-item>
              <n3-nav-item >
                <a >子导航三</a>
              </n3-nav-item>
            </n3-sub-nav>
            </n3-nav-item>
            <n3-nav-item >
              <a>导航四</a>
            </n3-nav-item>
        </n3-nav>
```html
<n3-nav theme="dark" type="vertical" >
  <n3-nav-item active>
    <a >导航一</a>
  </n3-nav-item>
  <n3-nav-item disabled>
    <a >导航二</a>
  </n3-nav-item>
  <n3-nav-item>
    <n3-sub-nav>
      <a slot="title">导航三</a>
      <n3-nav-item >
        <a>子导航一</a>
      </n3-nav-item>
      <n3-nav-item >
        <a>子导航二</a>
      </n3-nav-item>
      <n3-nav-item >
        <a >子导航三</a>
      </n3-nav-item>
    </n3-sub-nav>
    </n3-nav-item>
    <n3-nav-item >
      <a>导航四</a>
  </n3-nav-item>
</n3-nav>
```
  </div>

  <h2>n3-nav参数</h2>
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
          <td>type</td>
          <td><code>String</code> 如:  <code>horizontal</code><code>vertical</code></td>
          <td>horizontal</td>
          <td>水平,垂直</td>
        </tr>
        <tr>
          <td>theme</td>
          <td><code>String</code> oneof <code>default</code><code>dark</code></td>
          <td>default</td>
          <td>颜色</td>
        </tr>
      </tbody>
    </table>
    <h2>n3-sub-nav参数</h2>
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
          <td>trigger</td>
          <td><code>String</code> 如:  <code>click</code><code>hover</code></td>
          <td>click</td>
          <td>展开方式</td>
        </tr>
        <tr>
          <td>show</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否展开</td>
        </tr>
      </tbody>
    </table>
    <h2>n3-nav-item参数</h2>
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
          <td>active</td>
          <td><code>Boolean</code> </td>
          <td>false</td>
          <td>是否激活</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否不可用</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false
    }
  }
}
</script>
