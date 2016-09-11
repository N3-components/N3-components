<template>
  <div class="bs-docs-section" id="浮出提示"  >
    <h1 class="page-header"><a href="#浮出提示" class="anchor">浮出提示</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-tooltip content="tooltip on top" placement="top" trigger="hover">
        <n3-button>tooltip on top</n3-button>
      </n3-tooltip>
      <n3-tooltip content="tooltip on left" placement="left" trigger="hover">
        <n3-button >tooltip on left</n3-button>
      </n3-tooltip>
      <n3-tooltip content="tooltip on right" placement="right" trigger="hover">
        <n3-button >tooltip on right</n3-button>
      </n3-tooltip>
      <n3-tooltip content="tooltip on bottom" placement="bottom" trigger="hover">
        <n3-button >tooltip on bottom</n3-button>
      </n3-tooltip>
      <hr>
      <h4>Triger</h4>
      <p>
        <n3-tooltip trigger="click"
        effect="scale" content="Lorem ipsum dolor sit amet" placement="top" >
          <n3-button >Click</n3-button>
        </n3-tooltip>
      </p>
      <n3-tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
        <n3-input  placeholder="Focus"></n3-input>
      </n3-tooltip>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-tooltip content="tooltip on top" placement="top" trigger="hover">
  <n3-button>tooltip on top</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on left" placement="left" trigger="hover">
  <n3-button >tooltip on left</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on right" placement="right" trigger="hover">
  <n3-button >tooltip on right</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on bottom" placement="bottom" trigger="hover">
  <n3-button >tooltip on bottom</n3-button>
</n3-tooltip>
<hr>
<h4>Triger</h4>
<p>
  <n3-tooltip trigger="click"
  effect="scale" content="Lorem ipsum dolor sit amet" placement="top" >
    <n3-button >Click</n3-button>
  </n3-tooltip>
</p>
<n3-tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
  <n3-input  placeholder="Focus"></n3-input>
</n3-tooltip>
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
        <td>trigger</td>
        <td><code>String</code>, 如:  <code>hover</code>
        <code>focus</code>
        <code>hover</code></td>
        <td><code>click</code></td>
        <td>触发方式</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code>, 如:  <code>scale</code> <code>fade</code></td>
        <td><code>scale</code></td>
        <td></td>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
        <td>placement</td>
        <td><code>String</code>, 如:  <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>定位方式</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>
