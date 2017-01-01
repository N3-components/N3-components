  <template>
  <div class="bs-docs-section" id="幻灯片"  >
    <h1 class="page-header"><a href="#幻灯片" class="anchor">幻灯片</a><span class="author"> </span></h1>
    <div class="bs-example">
      <n3-carousel>
        <n3-slide>
          <img class="slide-img" src="http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg">
          <div class="carousel-caption">
           <h3>Slide #1</h3>
           <p>xxxxxxxxxxxx</p>
         </div>
        </n3-slide>
        <n3-slide>
          <img class="slide-img" src="http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg">
          <div class="carousel-caption">
           <h3>Slide #2</h3>
           <p>xxxxxxxxxxxx</p>
         </div>
        </n3-slide>
        <n3-slide>
          <img class="slide-img" src="http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg">
          <div class="carousel-caption">
           <h3>Slide #3</h3>
           <p>xxxxxxxxxxxx</p>
         </div>
        </n3-slide>
      </n3-carousel>
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
        <td>indicators</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>是否显示控制点</td>
      </tr>
      <tr>
        <td>controls</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>是否显示箭头</td>
      </tr>
      <tr>
        <td>interval</td>
        <td><code>Number</code></td>
        <td><code>5000</code></td>
        <td>自动切换时间
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.slide-img{
  height:400px!important;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}
@media screen and (min-width: 768px) {
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
}
</style>