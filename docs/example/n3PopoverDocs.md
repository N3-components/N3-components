<template>

## 气泡框

<div class="bs-docs-section" id="气泡框"  >
<div class="bs-example">
  <n3-popover effect="fade" :header="true" title="Title"  placement="top">
    <div slot="content" >
        从前有座山
    </div>
    <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="left">
      <div slot="content">
        山里有座庙
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="right">
      <div slot="content">
        庙里有个老和尚
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" placement="bottom" :header="true" title="Title" >
      <div slot="content" >
        老和尚说从前有座山
    </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>No title</h4>
  <n3-popover effect="fade"   :header ="false" title="Title"  placement="top">
      <div slot="content">
        山里有座庙
      </div>
      <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="left">
    <div slot="content">
        庙里有个老和尚
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="right">
    <div slot="content">
        老和尚说从前有座山
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header ="false" placement="bottom"  title="Title" >
    <div slot="content">
        山里有座庙
      </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>Triger</h4>
    <n3-popover effect="scale"  title="Title"  placement="top" trigger="hover">
        <div slot="content">
          庙里有个老和尚
        </div>
        <n3-button>Mouseenter</n3-button>
    </n3-popover>
    <hr>
  <h4>Focus</h4>
  <n3-popover effect="scale"
  title="Title"  placement="bottom" trigger="focus">
    <div slot="content">
        老和尚很无聊
    </div>
    <n3-input placeholder="Focus" ></n3-input>
  </n3-popover>
  <h4>气泡确认</h4>
  <n3-pop-confirm
      content="确定删除么？"
      :on-confirm="del(item)">
      <n3-button >删除</n3-button>
  </n3-pop-confirm>
</div>

```html
<n3-popover effect="fade" :header="true" title="Title"  placement="top">
  <div slot="content" >
     从前有座山
  </div>
  <n3-button>Popover on top</n3-button>
</n3-popover>

<n3-popover effect="fade" :header="true" title="Title"  placement="left">
   <div slot="content">
      山里有座庙
  </div>
  <n3-button>Popover on left</n3-button>
</n3-popover>

<n3-popover effect="fade" :header="true" title="Title"  placement="right">
   <div slot="content">
      庙里有个老和尚
  </div>
  <n3-button>Popover on right</n3-button>
</n3-popover>

<n3-popover effect="fade" placement="bottom" :header="true" title="Title" >
   <div slot="content" >
      老和尚说从前有座山
  </div>
  <n3-button>Popover on bottom</n3-button>
</n3-popover>

<!-- No title  -->
<n3-popover effect="fade"   :header ="false" title="Title"  placement="top">
   <div slot="content">
      山里有座庙
    </div>
    <n3-button>Popover on top</n3-button>
</n3-popover>
<n3-popover effect="fade"  :header ="false" title="Title"  placement="left">
  <div slot="content">
      庙里有个老和尚
  </div>
  <n3-button>Popover on left</n3-button>
</n3-popover>
<n3-popover effect="fade"  :header ="false" title="Title"  placement="right">
  <div slot="content">
      老和尚说从前有座山
  </div>
  <n3-button>Popover on right</n3-button>
</n3-popover>
<n3-popover effect="fade" :header ="false" placement="bottom"  title="Title" >
  <div slot="content">
      山里有座庙
    </div>
  <n3-button>Popover on bottom</n3-button>
</n3-popover>
<!-- Trigger  -->
<n3-popover effect="scale"  title="Title"  placement="top" trigger="hover">
  <div slot="content">
    庙里有个老和尚
  </div>
  <n3-button >Mouseenter</n3-button>
</n3-popover>

<!-- Focus  -->
<n3-popover effect="scale"
title="Title"  placement="bottom" trigger="focus">
  <div slot="content">
      老和尚很无聊
  </div>
  <n3-input placeholder="Focus" ></n3-input>
</n3-popover>

<!-- 气泡确认  -->
<n3-pop-confirm
    content="确定删除么？"
    :on-confirm="del(item)">
    <n3-button >删除</n3-button>
</n3-pop-confirm>
```

```javascript
del(item){
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      alert('删除了' +  item)
      resolve()
    },500);
  });
}
```

### popover参数
  
| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| trigger | `String`, 如: `click` `focus` `hover` | `click` | 触发方式 |
| effect | `String`, 如: `scale` `fade` | `scale` |  |
| title | `String` |  |  |
| header | `Boolean` | `true` | 是否显示头部 |
| placement | `String`, 如: `top` `left` `right` `bottom` |  | 定位 |

### popconfirm参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| effect | `String`, 如: `scale` `fade` | `fade` |  |
| content | `String` |  |  |
| placement | `String`, 如: `top` `left` `right` `bottom` |  | 定位 |
| on-confirm | `Function` |  | 点击确定的回调函数 |
| ok-text | `String` | 确定 | 确定按钮的文案 |
| cancel-text | `String` |  | 取消按钮的文案 |

</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet',
      item: '1'
    }
  },
  methods: {
    del(item){
      return function() {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            alert('删除了' + item)
            resolve()
          },500);
        });
      }
    }
  }
}
</script>
