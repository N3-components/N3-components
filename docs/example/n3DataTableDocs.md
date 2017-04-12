<template>
<div>
<n3-data-table
  fixed-columns
  height="400px"
  :selection="selection"
  :source="source" 
  :columns="columns" 
  :refresh="refresh">
</n3-data-table>
<n3-modal title="Modal title" effect="fade" width="400px" ref="modal">
  <div slot="body">
    <n3-data-table
      fixed-columns
      height="400px"
      :selection="selection"
      :source="source" 
      :columns="columns1" 
      :refresh="refresh"
      :context="$parent">
    </n3-data-table>
  </div>
</n3-modal>

</div>
</template>

<script>
export default {
  methods: {
    change (p, q, s, f) {
      console.log(p, q, s, f)
    },
    open () {
      this.$refs.modal.open()
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
        width: '150px',
        render: (text, record) => {
          return `<a href="javascript:;">${text}</a>`
        }
      }, {
        title: '部门',
        dataIndex: 'department',
        width: '250px'
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record, index) => {
          return `<span class="item">
                    <a href="javascript:;" @click="open" style="color:#41cac0">删除</a>
                  </span>`
        }
      }],
      columns1: [{
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
        width: '150px',
        render: (text, record) => {
          return `<a href="javascript:;">${text}</a>`
        }
      }, {
        title: '部门',
        dataIndex: 'department',
        width: '250px'
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record, index) => {
          return `<span class="item">
                    <a href="javascript:;" @click="del('${record.key}','${index}')" style="color:#41cac0">删除</a>
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