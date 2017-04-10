<template>
  
### 幻灯片

<div class="bs-docs-section" id="幻灯片"  >
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

```html
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
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| indicators | `Boolean` | `true` | 是否显示控制点 |
| controls | `Boolean` | `true` | 是否显示箭头 |
| interval | `Number` | `5000` | 自动切换时间(小于等于0时不自动切换) |

</div>
</template>

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