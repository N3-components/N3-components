<template>
  <div class="bs-docs-section" id="标签页"  >
    <h1 class="page-header"><a href="#标签页" class="anchor">标签页</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-tabs :on-change="change" :active-index="1">
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
      <p>胶囊样式 pills</p> 
      <n3-tabs pills>
        <n3-tab header="one">
        </n3-tab>
        <n3-tab header="two">
        </n3-tab>
      </n3-tabs>
      <p>垂直样式 stacked</p> 
      <n3-tabs pills stacked style="max-width: 300px;" :on-change="change">
        <n3-tab header="one" >
        </n3-tab>
        <n3-tab header="two">
        </n3-tab>
      </n3-tabs>
      <p>primary</p> 
      <n3-tabs primary pills stacked style="max-width: 300px;">
        <n3-tab header="one">
        </n3-tab>
        <n3-tab header="two">
        </n3-tab>
      </n3-tabs>
      <p>自适应 justified</p> 
      <n3-tabs pills justified>
        <n3-tab header="one">
        </n3-tab>
        <n3-tab header="two">
        </n3-tab>
      </n3-tabs>

      
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<n3-tabs>
  <n3-tab header="one">
    ...
  </n3-tab>
  <n3-tab header="two">
    ...
  </n3-tab>
  <n3-tab header="three" disabled>
    ...
  </n3-tab>

  <n3-tabs pills >
    <n3-tab header="one">
    </n3-tab>
    <n3-tab header="two">
    </n3-tab>
  </n3-tabs>
  <n3-tabs pills stacked>
    <n3-tab header="one">
    </n3-tab>
    <n3-tab header="two">
    </n3-tab>
  </n3-tabs>
  <n3-tabs primary pills stacked>
    <n3-tab header="one">
    </n3-tab>
    <n3-tab header="two">
    </n3-tab>
  </n3-tabs>
</n3-tabs>
      </script></code></pre>
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
  methods: {
    change (index, el) {
      console.log(index, el)
    }
  }
}
</script>
