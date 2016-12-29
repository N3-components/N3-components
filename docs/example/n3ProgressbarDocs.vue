<template>
  <div class="bs-docs-section" id="进度条"  >
    <h1 class="page-header"><a href="#进度条" class="anchor">进度条</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>高度</h4>
      <div class="row">
        <div class="col-md-4">
          <n3-progress class="margin">
            <n3-progressbar :now="20" type="success" height="10px"></n3-progressbar>
          </n3-progress>
        </div>
        <div class="col-md-4">
          <n3-progress class="margin">
            <n3-progressbar :now="40" type="success"></n3-progressbar>
          </n3-progress>
        </div>
      </div>

      <hr>

      <h4>
        动态
        <n3-button  @click.native="dynamicClick">随机变化</n3-button>
      </h4>
      <n3-progress class="margin" >
        <n3-progressbar :now="dynamicData[0] * 2" type="info" ></n3-progressbar>
      </n3-progress>
      <n3-progress class="margin">
        <n3-progressbar :now="dynamicData[1] * 2" type="warning"></n3-progressbar>
      </n3-progress>
      <n3-progress class="margin">
        <n3-progressbar :now="dynamicData[2] * 2" type="danger"></n3-progressbar>
      </n3-progress class="margin">
      <n3-progress>
        <n3-progressbar :now="dynamicData[3] * 2" type="success" striped></n3-progressbar>
      </n3-progress>

      <hr>

      <h4>
        叠加
        <n3-button  @click.native="stackedClick">随机变化</n3-button>
      </h4>

      <n3-progress>
        <n3-progressbar :now="stackedData[0]" label type="warning" striped></n3-progressbar>
        <n3-progressbar :now="stackedData[1]" label type="success" ></n3-progressbar>
        <n3-progressbar :now="stackedData[2]" label type="danger"></n3-progressbar>
        <n3-progressbar :now="stackedData[3]" label type="primary" striped >
      </n3-progressbar>
      </div>
    <pre><code class="language-markup"><script type="language-mark-up">

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
          <td>now</td>
          <td><code>Number</code></td>
          <td></td>
          <td>当前进度</td>
        </tr>
         <tr>
          <td>height</td>
          <td><code>String</code></td>
          <td>20px</td>
          <td>高度</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td></td>
          <td>样式 </td>
        </tr>
        <tr>
          <td>label</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否显示进度提示</td>
        </tr>
        <tr>
          <td>striped</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否显示条纹</td>
        </tr>
        <tr>
          <td>animated</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>动画效果</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicData: [5, 15, 25, 35, 45],
      stackedData: [10, 20, 30, 40]
    }
  },
  methods: {
    dynamicClick () {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 50)
      })
    },
    stackedClick () {
      let i = 100
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i)
        i = i - random
        return random
      })
    }
  }
}
</script>
<style scoped>
.margin{
  margin-bottom:20px;
}

</style>
