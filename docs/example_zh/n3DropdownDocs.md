<template>

### 下拉框

<div class="bs-docs-section" >
<div class="bs-example">
  <n3-dropdown>
    <div slot="trigger">
      <n3-button>
        点击
        <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
      </n3-button>
    </div>
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </n3-dropdown>
</div>


```html
<n3-dropdown>
  <div slot="trigger">
    <n3-button>
      点击
      <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
    </n3-button>
  </div>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
  <li><a href="#">Something else here</a></li>
</n3-dropdown>
```

```javascript
export default {
  data () {
    return {
      show: false
    }
  }
}
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | `Boolean` | `false` | 是否显示 |
| trigger | `String` 如: `click``hover` | click | 触发方式 |
| click-close | `Boolean` | `false` | 点击关闭 |

</div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
