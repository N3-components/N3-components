<template>

### Tooltip

<div class="bs-docs-section" id="Tooltip"  >
<div class="bs-example">
  <n3-tooltip content="tooltip on top" placement="top" trigger="hover">
    <n3-button>tooltip on top</n3-button>
  </n3-tooltip>
  <n3-tooltip content="tooltip on left" placement="left" trigger="hover">
    <n3-button >tooltip on left</n3-button>
  </n3-tooltip>
  <n3-tooltip content="tooltip on right" placement="right" trigger="hover">
    <n3-button >tooltip on right</n3-button>
  </n3-tooltip>
  <n3-tooltip content="tooltip on bottom" placement="bottom" trigger="hover">
    <n3-button >tooltip on bottom</n3-button>
  </n3-tooltip>
  <hr>
  <h4>Triger</h4>
  <p>
    <n3-tooltip trigger="click"
    effect="scale" content="Lorem ipsum dolor sit amet" placement="top" >
      <n3-button >Click</n3-button>
    </n3-tooltip>
  </p>
  <n3-tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
    <n3-input  placeholder="Focus"></n3-input>
  </n3-tooltip>
</div>

```html
<n3-tooltip content="tooltip on top" placement="top" trigger="hover">
  <n3-button>tooltip on top</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on left" placement="left" trigger="hover">
  <n3-button >tooltip on left</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on right" placement="right" trigger="hover">
  <n3-button >tooltip on right</n3-button>
</n3-tooltip>
<n3-tooltip content="tooltip on bottom" placement="bottom" trigger="hover">
  <n3-button >tooltip on bottom</n3-button>
</n3-tooltip>
<hr>
<h4>Triger</h4>
<p>
  <n3-tooltip trigger="click"
  effect="scale" content="Lorem ipsum dolor sit amet" placement="top" >
    <n3-button >Click</n3-button>
  </n3-tooltip>
</p>
<n3-tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
  <n3-input  placeholder="Focus"></n3-input>
</n3-tooltip>
```

```javascript
export default {
  data () {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    }
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| trigger | `String`, one of  `hover` `focus` `hover` | `click` | trigger type |
| effect | `String`, one of `scale` `fade` | `scale` |  |
| content | `String` |  |  |
| placement | `String`, 如: `top` `left` `right` `bottom` |  | placement |

</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>
