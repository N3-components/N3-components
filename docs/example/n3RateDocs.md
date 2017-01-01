<template>
  <div class="bs-docs-section" id="评分"  >
    <h1 class="page-header"><a href="#评分" class="anchor">评分</a><span class="author"> </span></h1>
    <div class="bs-example">

    <n3-rate v-model="value" :allow-half="true"></n3-rate>

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
       
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 3.5
      }
    }
  }
</script>