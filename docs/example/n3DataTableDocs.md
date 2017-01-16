<template>

## 数据表格

<div class="bs-docs-section" id="数据表格"  >
<div class="bs-example">
<h4>Table</h4>

<n3-data-table
  :selection="selection"
  :source="source" 
  :columns="columns" 
  :refresh="refresh">
</n3-data-table>

</div>


```html

<n3-data-table
  :selection="selection"
  :source="source" 
  :columns="columns" 
  :refresh="refresh"
></n3-data-table>

```


#### selection

```javascript
{
  checkRows:[],
  onSelect (record, checked, checkRows) {},
  onSelectAll (checked, checkRows, changeRows) {},
  getCheckboxProps(record){
    if(record.key == 2){
      return {
        checked: true,
        disabled:true
      }
    }else{
      return {
        disabled:false
      }
    }
  }
}

```

#### filter-list

```javascript

[{
  title:'姓名',
  dataIndex: 'name',
  options:[{value:"v白",label:"v白"},{value:"t红",label:"t红"}],
  value:[],
  // multiple,search,extra
}]

```

#### merge-rule

```javascript

{
  name:{
    '小白': {rowspan: 2},
    'v白': {rowspan: 0}
  }
}

```
#### pagination

```javascript

{
  current:5,
  total:10,
  pagesize:10
}

```
#### @change

```javascript

function(pagination,query,sort,filter){
  var data = {
    start:(pagination.current - 1) * pagination.pagesize,
    limit:pagination.pagesize
  },
  self = this;

  //根据需要添加其他参数
  this.loading = true
  $.ajax({
    url:'',
    data:data,
    success:function(result){
        self.loading = false
        self.source = result.list
        self.pagination.total = result.total
    }
  })
}

```


### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| async         | Boolean     |    false       |  异步加载，配合change事件来请求服务端数据    |
| merge-rule          | Object     |    -        |  合并规则    |
| columns          | Array     |    -        |     头部数组,设置字段名，描述，是否支持排序，是否显示，渲染方式等     |
| selection| Object| - | <code style="color:red">使用getCheckboxProps来初始化状态</code>|
|sort-column|Object|-|默认全局排序字段|
|source   | Array  |  -  |表格数组 |
| page  |  Boolean |  true |是否分页 | 
|  search |  Boolean | true  |是否支持搜索 | 
|  filter |  Boolean | true  | 是否支持字段过滤,columns中为对象添加fiiter来指定其过滤器|
| filter-list | Array |  - |自定义过滤器|
|  select-col |  Boolean |  true |  是否支持选择显示列  |      
 | pagination  |  Object |  - |  设置分页|     
|  loading |  Boolean |  false |  设置表格的加载中状态 |      
        
### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| change          |    当分页，搜索，过滤排序等条件发生变化时的回调函数，用于服务端操作 |  
</div>
</template>

<script>

export default {
  methods: {
    change (p, q, s, f) {
      console.log(p, q, s, f)
    },
    refresh () {
      this.source = [{
        key: '小白',
        name: '小白',
        age: 25,
        department: '技术1'
      }, {
        key: '2',
        name: '33',
        age: 33,
        department: '技术2'
      }, {
        key: '3',
        name: '44',
        age: 12,
        department: '技术3'
      }, {
        key: '4',
        name: '55',
        age: 25,
        department: '技术1'
      }, {
        key: '5',
        name: 'l66黑',
        age: 33,
        department: '技术2'
      }, {
        key: '61',
        name: 'i红6',
        age: 122,
        department: '技术3'
      }, {
        key: '73',
        name: 'yd白',
        age: 2,
        department: '技术1'
      }, {
        key: '81',
        name: 'b黑',
        age: 332,
        department: '技术2'
      }]
    },
    del (key) {
      for (var i in this.source) {
        if (key === this.source[i]['key']) {
          this.source.splice(i, 1)
        }
      }
    }
  },

  data () {
    return {
      selection: {
        checkRows: [],
        onSelect (record, checked, checkRows) {},
        onSelectAll (checked, checkRows, changeRows) {},
        getCheckboxProps (record) {
          if (record.key == 2) {
            return {
              checked: true,
              disabled: true
            }
          } else {
            return {
              disabled: false
            }
          }
        }
      },
      loading: false,
      pagination: {
        current: 1,
        total: 10,
        pagesize: 10
      },
      filterList: [{
        title: '姓名',
        dataIndex: 'name',
        options: [{value: 'v白', label: 'v白'}, {value: 't红', label: 't红'}],
      }],
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        sort: true,
        width: '100px',
        filter: true
      }, {
        title: '年龄',
        dataIndex: 'age',
        sort: true,
        sortType: 'DESC',
        sortMethod (x, y) { return x.age - y.age },
        filter: true,
        render: (text, record) => {
          return `<a href="javascript:;">${text}</a>`
        }
      }, {
        title: '部门',
        dataIndex: 'department'
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record, index) => {
          return `<span class="item">
                    <a href="javascript:;" @click="del('${record.key}','${index}')">删除</a>
                  </span>`
        }
      }],
      source: [{
        key: '1',
        name: '小白',
        age: 25,
        department: '技术1'
      }, {
        key: '2',
        name: '小黑',
        age: 33,
        department: '技术2'
      }, {
        key: '3',
        name: '小红',
        age: 12,
        department: '技术3'
      }, {
        key: '4',
        name: 'v白',
        age: 25,
        department: '技术1'
      }, {
        key: '5',
        name: 'l黑',
        age: 33,
        department: '技术2'
      }, {
        key: '6',
        name: 'i红',
        age: 122,
        department: '技术3'
      }, {
        key: '7',
        name: 'y白',
        age: 2,
        department: '技术1'
      }, {
        key: '8',
        name: 'b黑',
        age: 332,
        department: '技术2'
      }, {
        key: '9',
        name: 't红',
        age: 124,
        department: '技术3'
      }, {
        key: '10',
        name: 'f白',
        age: 253,
        department: '技术1'
      }, {
        key: '11',
        name: 'a黑',
        age: 31,
        department: '技术2'
      }, {
        key: '12',
        name: 'd红',
        age: 31,
        department: '技术3'
      }]
    }
  }
}
</script>