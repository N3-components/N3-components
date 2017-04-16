<template>

### Popover

<div class="bs-docs-section" id="Popover"  >
<div class="bs-example">
  <n3-popover effect="fade" :header="true" title="Title"  placement="top">
    <div slot="content" >
        Popover on top
    </div>
    <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="left">
      <div slot="content">
        Popover on left
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="right">
      <div slot="content">
        Popover on right
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" placement="bottom" :header="true" title="Title" >
      <div slot="content" >
        Popover on bottom
    </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>No title</h4>
  <n3-popover effect="fade"   :header ="false" title="Title"  placement="top">
      <div slot="content">
        Popover on top
      </div>
      <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="left">
    <div slot="content">
        Popover on left
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="right">
    <div slot="content">
        Popover on right
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header ="false" placement="bottom"  title="Title" >
    <div slot="content">
        Popover on bottom
      </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>Triger</h4>
    <n3-popover effect="scale"  title="Title"  placement="top" trigger="hover">
        <div slot="content">
          Mouseenter
        </div>
        <n3-button>Mouseenter</n3-button>
    </n3-popover>
    <hr>
  <h4>Focus</h4>
  <n3-popover effect="scale"
  title="Title"  placement="bottom" trigger="focus">
    <div slot="content">
        Focus
    </div>
    <n3-input placeholder="Focus" ></n3-input>
  </n3-popover>
  <h4>confirm</h4>
  <n3-pop-confirm
      content="delete it？"
      :on-confirm="del(item)">
      <n3-button >delete</n3-button>
  </n3-pop-confirm>
</div>

```html
<n3-popover effect="fade" :header="true" title="Title"  placement="top">
    <div slot="content" >
        Popover on top
    </div>
    <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="left">
      <div slot="content">
        Popover on left
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header="true" title="Title"  placement="right">
      <div slot="content">
        Popover on right
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" placement="bottom" :header="true" title="Title" >
      <div slot="content" >
        Popover on bottom
    </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>No title</h4>
  <n3-popover effect="fade"   :header ="false" title="Title"  placement="top">
      <div slot="content">
        Popover on top
      </div>
      <n3-button>Popover on top</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="left">
    <div slot="content">
        Popover on left
    </div>
    <n3-button>Popover on left</n3-button>
  </n3-popover>
  <n3-popover effect="fade"  :header ="false" title="Title"  placement="right">
    <div slot="content">
        Popover on right
    </div>
    <n3-button>Popover on right</n3-button>
  </n3-popover>
  <n3-popover effect="fade" :header ="false" placement="bottom"  title="Title" >
    <div slot="content">
        Popover on bottom
      </div>
    <n3-button>Popover on bottom</n3-button>
  </n3-popover>
  <hr>
  <h4>Triger</h4>
    <n3-popover effect="scale"  title="Title"  placement="top" trigger="hover">
        <div slot="content">
          Mouseenter
        </div>
        <n3-button>Mouseenter</n3-button>
    </n3-popover>
    <hr>
  <h4>Focus</h4>
  <n3-popover effect="scale"
  title="Title"  placement="bottom" trigger="focus">
    <div slot="content">
        Focus
    </div>
    <n3-input placeholder="Focus" ></n3-input>
  </n3-popover>
  <h4>confirm</h4>
  <n3-pop-confirm
      content="delete it？"
      :on-confirm="del(item)">
      <n3-button >delete</n3-button>
  </n3-pop-confirm>
```

```javascript
del(item){
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      alert('delete' +  item)
      resolve()
    },500);
  });
}
```

### popover Params
  
| name | type | default | description |
| --- | --- | --- | --- |
| trigger | `String`, one of `click` `focus` `hover` | `click` | trigger type |
| effect | `String`, one of `scale` `fade` | `scale` |  |
| title | `String` |  |  |
| header | `Boolean` | `true` | whether header is visible or not |
| placement | `String`, one of  `top` `left` `right` `bottom` |  | placement |

### popconfirm Params

| name | type | default | description |
| --- | --- | --- | --- |
| effect | `String`, one of  `scale` `fade` | `fade` |  |
| content | `String` |  |  |
| placement | `String`, one of  `top` `left` `right` `bottom` |  | placement |
| on-confirm | `Function` |  | confirm function |
| ok-text | `String` | ok | text of confirm button |
| cancel-text | `String` | cancel | text of cancel button |

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
            alert('delete' + item)
            resolve()
          },500);
        });
      }
    }
  }
}
</script>
