<template>
  <div class="bs-docs-section" id="标签"  >
    <h1 class="page-header"><a href="#标签" class="anchor">标签</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-label>Default</n3-label>
      <n3-label type="primary">primary</n3-label>
      <n3-label type="danger">danger</n3-label>
      <n3-label type="success">success</n3-label>
      <n3-label type="info">info</n3-label>
      <n3-label type="warning">warning</n3-label>
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
          <td>type</td>
          <td><code>String</code></td>
          <td><code>default</code></td>
          <td>颜色</td>
        </tr>
         <tr>
          <td>hover</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>


    <div class="bs-example">
        <n3-tags v-model="list" ></n3-tags>
        <n3-tags v-model="list"  type="primary"></n3-tags>
        <n3-tags v-model="list"  type="success"></n3-tags>
        <n3-tags v-model="list"  type="danger"></n3-tags>
        <n3-tags v-model="list"  type="warning"></n3-tags>
        <n3-tags v-model="list" removable type="primary"></n3-tags>
    </div>

    {{list}}
    
    
    
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
          <td>type</td>
          <td><code>String</code></td>
          <td><code>default</code></td>
          <td>颜色</td>
        </tr>
         <tr>
          <td>value</td>
          <td><code>Array</code></td>
          <td><code>[]</code></td>
          <td>内容数组 需要<code>.sync</code></td>
        </tr>
         <tr>
          <td>size</td>
          <td><code>String</code></td>
          <td><code></code></td>
          <td>大小 sm,lg,xl</td>
        </tr>
         <tr>
          <td>removable</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>可删除</td>
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
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4',
        disabled: true
      }]
    }
  }
}
</script>

