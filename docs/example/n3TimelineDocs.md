<template>
  <div class="bs-docs-section" id="时间轴"  >
    <h1 class="page-header"><a href="#时间轴" class="anchor">时间轴</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-timeline >
       <n3-timeline-item color='#2ecc71' icon="check-circle-o">
            创建成功
        </n3-timeline-item>
         <n3-timeline-item color='#3498db'>
            通过审核
        </n3-timeline-item>
         <n3-timeline-item color='#e74c3c' icon="times-circle-o">
            出现异常
        </n3-timeline-item>
      </n3-timeline>

      <n3-timeline
        :value="value">
      </n3-timeline>  

    </div>
   
    <h2>Timeline参数</h2>
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
          <td>value</td>
          <td><code>Array</code></td>
          <td></td>
          <td>内容数组</td>
        </tr>
      </tbody>
    </table>
    <h2>TimelineItem参数</h2>
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
          <td>color</td>
          <td><code>String</code></td>
          <td>#2db7f5</td>
          <td>颜色</td>
        </tr>
        <tr>
          <td>content</td>
          <td><code>String</code></td>
          <td></td>
          <td>内容</td>
        </tr>
        <tr>
          <td>icon</td>
          <td><code>String</code></td>
          <td></td>
          <td>自定义图标</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: [{
        icon: 'check-circle-o',
        color: 'green',
        content: `<a @click="del">创建成功</a>`
      }, {
        content: '<span>通过审核</span>'
      }, {
        content: '<span>出现异常</span>'
      }]
    }
  },
  methods: {
    del () {
      alert(2)
    }
  },
  watch: {

  }
}
</script>
