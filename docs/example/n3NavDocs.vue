<template>
  <div class="bs-docs-section" id="导航"  >
    <h1 class="page-header"><a href="#导航" class="anchor">导航</a><span class="author"> </span></h1>
    <div class="bs-example">
        <n3-nav theme="default" trigger="hover">
          <n3-nav-item key="1">
            导航一
          </n3-nav-item>
          <n3-nav-item disabled key="2">
            导航二
          </n3-nav-item>
          <n3-sub-nav key="3">
            <a slot="title">导航三</a>
            <n3-nav-item key="3-1">
              子导航一
            </n3-nav-item>
            <n3-nav-item key="3-2">
              子导航二
            </n3-nav-item>
            <n3-nav-item key="3-3" >
              子导航三
            </n3-nav-item>
          </n3-sub-nav>
          </n3-nav>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-nav theme="default" >
  <n3-nav theme="default" trigger="hover">
    <n3-nav-item key="1">
        导航一
      </n3-nav-item>
      <n3-nav-item disabled key="2">
        导航二
      </n3-nav-item>
      <n3-sub-nav key="3">
        <a slot="title">导航三</a>
        <n3-nav-item key="3-1">
          子导航一
        </n3-nav-item>
        <n3-nav-item key="3-2">
          子导航二
        </n3-nav-item>
        <n3-nav-item key="3-3" >
          子导航三
        </n3-nav-item>
      </n3-sub-nav>
    </n3-nav>
      </script></code></pre>
        <n3-nav theme="dark" type="vertical":open-keys="[3]"  style="width:300px;" >
          <n3-nav-item key="1">
            导航一
          </n3-nav-item>
          <n3-nav-item disabled key="2">
            导航二
          </n3-nav-item>
          <n3-sub-nav key="3">
            <a slot="title">导航三</a>
            <n3-nav-item key="3-1">
              子导航一
            </n3-nav-item>
            <n3-nav-item key="3-2">
              子导航二
            </n3-nav-item>
            <n3-nav-item key="3-3" >
              子导航三
            </n3-nav-item>
          </n3-sub-nav>
        </n3-nav>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-nav theme="dark" type="vertical" >
   <n3-nav-item key="1">
      导航一
    </n3-nav-item>
    <n3-nav-item disabled key="2">
      导航二
    </n3-nav-item>
    <n3-sub-nav key="3">
      <a slot="title">导航三</a>
      <n3-nav-item key="3-1">
        子导航一
      </n3-nav-item>
      <n3-nav-item key="3-2">
        子导航二
      </n3-nav-item>
      <n3-nav-item key="3-3" >
        子导航三
      </n3-nav-item>
    </n3-sub-nav>
</n3-nav>
      </script></code></pre>
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
          <td>trigger</td>
          <td><code>String</code> 如:  <code>click</code><code>hover</code></td>
          <td>click</td>
          <td>展开方式</td>
        </tr>
        <tr>
          <td>openKeys</td>
          <td><code>Array</code></td>
          <td></td>
          <td>展开的菜单的key数组</td>
        </tr>
        <tr>
          <td>selectedKey</td>
          <td><code>Number String</code></td>
          <td></td>
          <td>选中的项的key</td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td><code>Function</code></td>
          <td></td>
          <td>选中项变化时触发</td>
        </tr>
        <tr>
          <td>onOpenChange</td>
          <td><code>Function</code></td>
          <td></td>
          <td>展开变化时候触发</td>
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
          <td>key</td>
          <td><code>String Boolean</code> </td>
          <td></td>
          <td>唯一标示</td>
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
          <td>key</td>
          <td><code>String Boolean</code> </td>
          <td></td>
          <td>唯一标示</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否不可用</td>
        </tr>
      </tbody>
    </table>
    <p>注意： 如果菜单项异步渲染，需要手动调用组件的refresh方法才能让<code>selectedKey</code> <code>openKeys</code> 起作用</p>
</template>

<script>
export default {
  methods: {
    select(a) {
      console.log(a)
    },
    open(a) {
      console.log(a)
    }
  }
}
</script>
