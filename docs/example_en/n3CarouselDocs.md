<template>
  
### Carousel

<div class="bs-docs-section" >
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

<div class="bs-example">
  <n3-carousel>
  <n3-slide v-for="item in list">
    <img class="slide-img" :src="item.img">
    <div class="carousel-caption">
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
    </div>
  </n3-slide>
  </n3-carousel>
</div>


```html
<n3-carousel>
  <n3-slide v-for="item in list">
    <img class="slide-img" :src="item.img">
    <div class="carousel-caption">
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
    </div>
  </n3-slide>
</n3-carousel>
```

```javascript
const list = [
  {
    id: "7",
    title: "TEST0",
    img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
    create_at: "2017-05-05"
  },
  {
    id: "8",
    title: "TEST1",
    img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
    create_at: "2017-05-05"
  },
  {
    id: "7",
    title: "TEST2",
    img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
    create_at: "2017-05-05"
  },
  {
    id: "8",
    title: "TEST3",
    img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
    create_at: "2017-05-05"
  }
]

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    updateList () {
      setTimeout(() => {
        this.list.push.apply(this.list, list)
      })
    }
  },
  mounted () {
    this.updateList()
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| indicators | `Boolean` | `true` | Whether to display the control point |
| controls | `Boolean` | `true` | Whether to show arrows |
| interval | `Number` | `5000` | Automatic switching time (less than or equal to 0 does not automatically switch) |

</div>
</template>

<script>
  const list = [
    {
      id: "7",
      title: "TEST0",
      img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
      create_at: "2017-05-05"
    },
    {
      id: "8",
      title: "TEST1",
      img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
      create_at: "2017-05-05"
    },
    {
      id: "7",
      title: "TEST2",
      img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
      create_at: "2017-05-05"
    },
    {
      id: "8",
      title: "TEST3",
      img: "http://www.photops.com/Photo/UpPhoto2010/201106/2011060409214653.jpg",
      create_at: "2017-05-05"
    }
  ]

  export default {
    data () {
      return {
        list: []
      }
    },
    methods: {
      updateList () {
        setTimeout(() => {
          this.list.push.apply(this.list, list)
        })
      }
    },
    mounted () {
      this.updateList()
    }
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