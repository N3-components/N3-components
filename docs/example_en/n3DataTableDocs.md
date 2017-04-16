<template>

### DataTable

<div class="bs-docs-section" >
<div class="bs-example">
<h4>Table</h4>

<n3-data-table
  fixed-columns
  height="400px"
  :selection="selection"
  :source="source" 
  :columns="columns" 
  :refresh="refresh">
</n3-data-table>

</div>

```html

<n3-data-table
  fixed-columns
  height="400px"
  :selection="selection"
  :source="source" 
  :columns="columns" 
  :refresh="refresh">
</n3-data-table>

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
  title:'name',
  dataIndex: 'name',
  options:[{value:"Jack",label:"Jack"},{value:"Tom",label:"Tom"}],
  value:[],
  // multiple,search,extra
}]

```

#### merge-rule

```javascript

{
  name:{
    'Jack': {rowspan: 2},
    'Tom': {rowspan: 0}
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

### Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| fixed-columns | `Boolean` | - | fix table header    |
| height| `String` | - | height，work width `fixed-columns`   |
| width| `String` | - | width， conflict with  `fixed-columns`   |
| async  | `Boolean` | `false` | Asynchronous loading, with the change event to request server data    |
| merge-rule | `Object` | - | Merge rules    |
| columns  | `Array` | - | Header array, set field name, description, support sort, display, render, etc.    |
| selection| `Object`| - | <code style="color:red">Use `getCheckboxProps` to initialize the state</code>|
| sort-column |`Object`|-|default global sort field|
| source   | `Array`  |  -  |table source |
| page  |  `Boolean` |  `true` |page | 
| search |  `Boolean` | `true`  |search | 
| filter |  `Boolean` | `true`  | Whether to support field filtering, columns for the object to add fiiter to specify its filter|
| filter-list | `Array` |  - |Customize the filter|
| select-col |  `Boolean` |  `true` |  Whether to support the selection of the display column  |      
| pagination  |  `Object` |  - |  page params |     
| loading |  `Boolean` |  `false` |  loading |      
        
### Events

| name          |   description          |        
|-------------  |---------------- |
| change          |    When the page, search, filter sorting and other conditions change when the callback function for the server operation | 

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
        key: 'Jack',
        name: 'Jack',
        age: 25,
        department: 'IT'
      }, {
        key: 'Tom',
        name: 'Tom',
        age: 33,
        department: 'IT'
      }, {
        key: 'Eric',
        name: 'Eric',
        age: 12,
        department: 'Sales'
      }, {
        key: 'Kate',
        name: 'Kate',
        age: 25,
        department: 'Finance'
      }, {
        key: 'Tim',
        name: 'Tim',
        age: 33,
        department: 'Sales'
      }, {
        key: 'Li',
        name: 'Li',
        age: 22,
        department: 'Finance'
      }, {
        key: 'King',
        name: 'King',
        age: 20,
        department: 'Product'
      }, {
        key: 'Lucy',
        name: 'Lucy',
        age: 32,
        department: 'Product'
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
        title: 'name',
        dataIndex: 'name',
        options: [{value: 'Tom', label: 'Tom'}, {value: 'Jack', label: 'Jack'}],
      }],
      columns: [{
        title: 'name',
        dataIndex: 'name',
        sort: true,
        width: '100px',
        filter: true
      }, {
        title: 'age',
        dataIndex: 'age',
        sort: true,
        sortType: 'DESC',
        sortMethod (x, y) { return x.age - y.age },
        filter: true,
        width: '150px',
        render: (text, record) => {
          return `<a href="javascript:;">${text}</a>`
        }
      }, {
        title: 'department',
        dataIndex: 'department',
        width: '250px'
      }, {
        title: 'operating',
        dataIndex: '',
        render: (text, record, index) => {
          return `<span class="item">
                    <a href="javascript:;" @click="del('${record.key}','${index}')" style="color:#41cac0">delete</a>
                  </span>`
        }
      }],
      source: [{
        key: 'Jack',
        name: 'Jack',
        age: 25,
        department: 'IT'
      }, {
        key: 'Tom',
        name: 'Tom',
        age: 33,
        department: 'IT'
      }, {
        key: 'Eric',
        name: 'Eric',
        age: 12,
        department: 'Sales'
      }, {
        key: 'Kate',
        name: 'Kate',
        age: 25,
        department: 'Finance'
      }, {
        key: 'Tim',
        name: 'Tim',
        age: 33,
        department: 'Sales'
      }, {
        key: 'Li',
        name: 'Li',
        age: 22,
        department: 'Finance'
      }, {
        key: 'King',
        name: 'King',
        age: 20,
        department: 'Product'
      }, {
        key: 'Lucy',
        name: 'Lucy',
        age: 32,
        department: 'Product'
      }]
    }
  }
}
</script>