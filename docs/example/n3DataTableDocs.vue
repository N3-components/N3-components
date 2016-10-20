<template>
  <div class="bs-docs-section" id="数据表格"  >
    <h1 class="page-header"><a href="#数据表格" class="anchor">数据表格</a><span class="author"> </span></h1>
    <div class="bs-example">
      <h4>Table</h4>

      <n3-data-table
        :selection="selection"
        :source="source" 
        :columns="columns" 
        :refresh="refresh"
      ></n3-data-table>
      <hr>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<n3-data-table  
key="key"
:selection="selection"
:source="source" 
:columns="columns" 
:refresh="refresh"
></n3-data-table>
    </script></code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">
new Vue({
  el:'body',
  data:{
  selection:{
    checkRows:[],
    onSelect(a,b,c){},
    onSelectAll(){},
    getCheckboxProps(record){
      if(record.key == 2){
        return {
          disabled:true
        }
      }else{
        return {
          disabled:false
        }
      }
    }
  },
  columns: [{
    title: '姓名',
    dataIndex: 'name',
    sort:true,
    width:'100px'
  }, {
    title: '年龄',
    dataIndex: 'age',
    sort:true,
    sortMethod:function(x,y){return x.age - y.age}, //自定义排序函数
    sortType:'DESC',
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
  },{
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
  },{
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
  },{
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
  },
  method:{
    del(key){
      for(var i in this.source){
        if(key == this.source[i]['key']){
            this.source.splice(i,1);
        }
      }
    }
  }
})
  </script></code></pre>

    <h2>参数</h2>
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
          <td>merge-rule</td>
          <td>Object</td>
          <td></td>
          <td><pre><code class="language-javascript">{
  name:{
    '小白': {rowspan: 2},
    'v白': {rowspan: 0}
  }
}</code></pre>
          </td>
        </tr>
         <tr>
          <td>columns</td>
          <td>Array</td>
          <td></td>
          <td>头部数组,设置字段名，描述，是否支持排序，是否显示，渲染方式等</td>
        </tr>
         <tr>
          <td>selection</td>
          <td>Object</td>
          <td></td>
          <td><pre><code class="language-javascript">
{
  checkRows:[],
  onSelect (record, checked, checkRows) {},
  onSelectAll (checked, checkRows, changeRows) {},
  getCheckboxProps(record){
    if(record.key == 2){
      return {
        disabled:true
      }
    }else{
      return {
        disabled:false
      }
    }
  }
}</code></pre></td>
        </tr>
        <tr>
          <td>sort-column</td>
          <td>Object</td>
          <td></td>
          <td>默认全局排序字段</td>
        </tr>
        <tr>
          <td>source</td>
          <td>Array</td>
          <td></td>
          <td>表格数组</td>
        </tr>
        <tr>
          <td>page</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否分页</td>
        </tr>
        <tr>
          <td>search</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否支持搜索</td>
        </tr>
        <tr>
          <td>filter</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否支持字段过滤,columns中为对象添加fiiter来指定其过滤器</td>
        </tr>
        <tr>
          <td>filter-list</td>
          <td>Array</td>
          <td></td>
          <td>自定义过滤器如:
          <pre><code class="language-javascript">[{
  title:'姓名',
  dataIndex: 'name',
  options:[{value:"v白",label:"v白"},{value:"t红",label:"t红"}],
  value:[],
  // multiple,search,extra
}]</code></pre>
          </td>
        </tr>
        <tr>
          <td>select-col</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否支持选择显示列</td>
        </tr>
        <tr>
          <td>pagination</td>
          <td>Object</td>
          <td></td>
          <td>设置分页，例如
          <pre><code class="language-javascript">{
  current:5,
  total:10,
  pagesize:10
}</code></pre>
          </td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>设置表格的加载中状态</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>Function</td>
          <td></td>
          <td>当分页，搜索，过滤排序等条件发生变化时的回调函数，用于服务端操作，例如分页:
          <pre><code class="language-javascript">
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
          </code></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  methods: {
    change (p, q, s, f) {
      this.pagination.total = 22
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