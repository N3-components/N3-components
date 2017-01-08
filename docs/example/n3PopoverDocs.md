<template>
  <div class="bs-docs-section" id="气泡框"  >
    <h1 class="page-header"><a href="#气泡框" class="anchor">气泡框</a><span class="author"> </span></h1>
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
      <n3-button >Mouseenter</n3-button>
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
  <h2>popover参数</h2>
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
        <td><code>String</code>, 如:  <code>click</code>
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
      </tr>
      <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>header</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>是否显示头部</td>
      </tr>
      <tr>
        <td>placement</td>
        <td><code>String</code>, 如:  <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>定位</td>
      </tr>
    </tbody>
  </table>

  <h2>popconfirm参数</h2>
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
        <td>effect</td>
        <td><code>String</code>, 如:  <code>scale</code> <code>fade</code></td>
        <td><code>fade</code></td>
        <td></td>
      </tr>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>placement</td>
        <td><code>String</code>, 如:  <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>定位</td>
      </tr>
      <tr>
        <td>on-confirm</td>
        <td><code>Function</code></td>
        <td></td>
        <td>点击确定的回调函数</td>
      </tr>
      <tr>
        <td>ok-text</td>
        <td><code>String</code></td>
        <td>确定</td>
        <td>确定按钮的文案</td>
      </tr>
       <tr>
        <td>cancel-text</td>
        <td><code>String</code></td>
        <td></td>
        <td>取消按钮的文案</td>
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
