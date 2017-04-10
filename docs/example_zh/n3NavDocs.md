<template>

### 导航

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-nav  :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
<n3-nav-item index="1">处理中心</n3-nav-item>
<n3-sub-nav index="2">
<template slot="title">我的工作台</template>
<n3-nav-item index="2-1">选项1</n3-nav-item>
<n3-nav-item index="2-2">选项2</n3-nav-item>
<n3-nav-item index="2-3">选项3</n3-nav-item>
</n3-sub-nav>
<n3-nav-item index="3"><a href="#" target="_blank">订单管理</a></n3-nav-item>
</n3-nav>

```html
<n3-nav  :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
<n3-nav-item index="1">处理中心</n3-nav-item>
<n3-sub-nav index="2">
<template slot="title">我的工作台</template>
<n3-nav-item index="2-1">选项1</n3-nav-item>
<n3-nav-item index="2-2">选项2</n3-nav-item>
<n3-nav-item index="2-3">选项3</n3-nav-item>
</n3-sub-nav>
<n3-nav-item index="3"><a href="#" target="_blank">订单管理</a></n3-nav-item>
</n3-nav>
```

<n3-nav default-active="2" theme="dark"  @open="handleOpen" @close="handleClose" :style="{width:'180px'}">
<n3-sub-nav index="1">
<template slot="title"><n3-icon type="bars"></n3-icon>导航一</template>
<n3-nav-group key="1">
<template slot="title">分组一</template>
<n3-nav-item index="1-1" key="1-1">选项1</n3-nav-item>
<n3-nav-item index="1-2" key="1-2">选项2</n3-nav-item>
</n3-nav-group>
<n3-nav-group title="分组2" key="2">
<n3-nav-item index="1-3" key="1-2">选项3</n3-nav-item>
</n3-nav-group>
<n3-sub-nav index="1-4">
<template slot="title">选项4</template>
<n3-nav-item index="1-4-1">选项1</n3-nav-item>
</n3-sub-nav>
</n3-sub-nav>
<n3-nav-item index="2"><n3-icon type="eye"></n3-icon>导航二</n3-nav-item>
<n3-nav-item index="3"><n3-icon type="cloud"></n3-icon>导航三</n3-nav-item>
</n3-nav>

</div>

### n3-nav参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
|mode		|String	|horizontal,vertical|	vertical|模式
|theme	|	String |	light,dark	|light|主题色
|default-active	| String | - |当前激活菜单的index
|default-openeds	|Array|	—	| 当前打开的submenu的 key 数组	Array
|unique-opened|	Boolean | —	 | false | 是否只保持一个子菜单的展开	
|menu-trigger	|	String |  hover | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)
|router	|Boolean | false | vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转	

### Events

| 事件          |说明类           |   回调参数         | 
|-------------  |---------------- |----------------  |-------- |
|select	 | 菜单激活回调	index: 选中菜单项的| indexPath: 选中菜单项的 index path
|open	| SubMenu 展开的回调	|index: 打开的 subMenu 的 index， indexPath: 打开的 subMenu 的 index path
|close	| SubMenu 收起的回调	|index: 收起的 subMenu 的 index， indexPath: 收起的 subMenu 的 index path

### n3-sub-nav参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| index          | String     |   -       |      |


### n3-nav-item参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| index          | String     |   -       |      |
| route          | Object     |   -       |  Vue Router 路径对象    |

### n3-nav-group参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| title          | String     |   -       |   分组   |



</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 1,
      show2: false
    }
  },
  methods:{
    handleSelect(){

    },
    handleOpen(){

    },
    handleClose(){

    }
  }
}
</script>
