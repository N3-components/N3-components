<template>
  <div class="bs-docs-section" id="树形视图">
    <h1 class="page-header">
      <a href="#树形视图" class="anchor">树形视图</a>
      <span class="author"></span>
    </h1>
    <div class="bs-example">
      <n3-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></n3-tree>
    </div>
    <div class="bs-example">
      <n3-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></n3-tree>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }, {
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      handleNodeClick(data) {
        console.log(data)
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === 'region1') {
          hasChild = true
        } else if (node.data.name === 'region2') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      }
    }
  }
</script>