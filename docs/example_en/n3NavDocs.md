<template>

### Nav

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-nav  :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
<n3-nav-item index="1">Nav one </n3-nav-item>
<n3-sub-nav index="2">
<template slot="title">Nav two</template>
<n3-nav-item index="2-1">Item one</n3-nav-item>
<n3-nav-item index="2-2">Item two</n3-nav-item>
<n3-nav-item index="2-3">Item three</n3-nav-item>
</n3-sub-nav>
<n3-nav-item index="3"><a href="#" target="_blank">Nav three</a></n3-nav-item>
</n3-nav>

```html
<n3-nav  :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
<n3-nav-item index="1">Nav one </n3-nav-item>
<n3-sub-nav index="2">
<template slot="title">Nav two</template>
<n3-nav-item index="2-1">Item one</n3-nav-item>
<n3-nav-item index="2-2">Item two</n3-nav-item>
<n3-nav-item index="2-3">Item three</n3-nav-item>
</n3-sub-nav>
<n3-nav-item index="3"><a href="#" target="_blank">Nav three</a></n3-nav-item>
</n3-nav>
```

<n3-nav default-active="2" theme="dark"  @open="handleOpen" @close="handleClose" :style="{width:'180px'}">
<n3-sub-nav index="1">
<template slot="title"><n3-icon type="bars"></n3-icon>Nav one</template>
<n3-nav-group title="Group one" key="1">
<template slot="title">Group one</template>
<n3-nav-item index="1-1" key="1-1">Item one</n3-nav-item>
<n3-nav-item index="1-2" key="1-2">Item two</n3-nav-item>
</n3-nav-group>
<n3-nav-group title="Group two" key="2">
<n3-nav-item index="1-3" key="1-2">Item three</n3-nav-item>
</n3-nav-group>
<n3-sub-nav index="1-4">
<template slot="title">Item three</template>
<n3-nav-item index="1-4-1">Item one</n3-nav-item>
</n3-sub-nav>
</n3-sub-nav>
<n3-nav-item index="2"><n3-icon type="eye"></n3-icon>Nav two</n3-nav-item>
<n3-nav-item index="3"><n3-icon type="cloud"></n3-icon>Nav three</n3-nav-item>
</n3-nav>

</div>

### n3-nav Params

| name          | type            |   default         |   description   |
|-------------  |---------------- |----------------  |-------- |
|mode		|String	|horizontal,vertical|	vertical|mode
|theme	|	String |	light,dark	|light|theme
|default-active	| String | - |default index
|default-openeds	|Array|	—	|default opened indexs
|unique-opened|	Boolean | —	 | false | whether allows only one subnav opened
|menu-trigger	|	String |  hover | subnav open type(only works when mode is `horizontal`)
|router	|Boolean | false | vue-router , index as path 	

### Events

| name          |description           |   params         | 
|-------------  |---------------- |----------------  |-------- |
|select	 | item selected	| `index`,`indexPath` of selected item 
|open	| SubMenu open	|`index` ,`indexPath` of opened subMenu
|close	| SubMenu close	|`index`,`indexPath` of closed subMenu 

### n3-sub-nav Params

| name          | type            |   default         |   description   |
|-------------  |---------------- |----------------  |-------- |
| index          | String     |   -       |      |


### n3-nav-item Params

| name          | type            |   default         |   description   |
|-------------  |---------------- |----------------  |-------- |
| index          | String     |   -       |      |
| route          | Object     |   -       |  Vue Router Object   |

### n3-nav-group Params

| name          | type            |   default         |   description   |
|-------------  |---------------- |----------------  |-------- |
| title          | String     |   -       |   group   |



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
