<template>

## 树形视图

<div class="bs-docs-section" id="树形视图">

> 树形视图（普通）

<div class="bs-example">
  <n3-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></n3-tree>
</div>

```html
<n3-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></n3-tree>
```

```javascript
export default {
  data() {
    return {
      data: [{
        label: '新建文件夹1',
        children: [{
          label: '我的文档1'
        }]
      }, {
        label: '新建文件夹2',
        children: [{
          label: '我的文档2'
        }, {
          label: '我的文档3'
        }]
      }, {
        label: '新建文件夹3',
        children: [{
          label: '新建文件夹4',
          children: [{
            label: '我的文档6'
          }]
        }, {
          label: '我的文档4'
        }, {
          label: '我的文档5'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
```

> 树形视图（可选中、动态加载）

<div class="bs-example">
  <n3-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></n3-tree>
</div>

```html
<n3-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></n3-tree>
```

```javascript
export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        regions: [{
          'name': '/root'
        }, {
          'name': '/home'
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
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: '/root' }, { name: '/home' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === '/root') {
          hasChild = true
        } else if (node.data.name === '/home') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: '新建文件夹' + this.count++
            }, {
              name: '新建文件夹' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      }
    }
  }
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data     | `Array` | `[]` | 展示数据 |
| empty-text | `String` | Empty Content. | 展示数据为空时展示的文本 |
| node-key | `String` | — | 每个树节点用来作为唯一标识的属性，整颗树应该是唯一的 |
| props |  | `Object` | — | 具体查看：数据属性props |
| leaf-icon | `String` | file | 叶子节点图标 |
| child-icon | `String` | folder | 子节点图标 |
| closed-icon | `String` | angle-right | 关闭时箭头图标 |
| opened-icon | `String` | angle-down | 打开时箭头图标 |
| load | `Function` | function(node, resolve) {} | 加载子树数据的方法 |
| render-content | `Function` | function(h, { node }) {} | 树节点的内容区的渲染方法 |
| highlight-current | `Boolean` | `false` | 是否高亮当前选中节点 |
| current-node-key |  `String, Number` | — | 当前选中节点的 key ，只写属性 |
| default-expand-all | `Boolean` | `false` | 是否默认展开所有节点 |
| expand-on-click-node | `Boolean` | `true` | 是否在点击节点的时候展开或者收缩节点(如果不则则只有点箭头图标的时候才会展开或者收缩节点。) |
| auto-expand-parent |  | `Boolean` | `true` | 展开子节点的时候是否自动展开父节点 |
| default-expanded-keys | `Array` | — | 默认展开的节点的 key 的数组 |
| show-checkbox | `Boolean` | `false` | 节点是否可被勾选 |
| check-strictly | `Boolean` | `false` | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法 |
| default-checked-keys | `Array` | `[]` | 默认勾选的节点的 key 的数组 |
| filter-node-method | `Function` | function(value, data, node) | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示, 反之则为隐藏 |

### 数据属性props

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | `String` | label | 指定节点标签为节点对象的某个属性值 |
| children | `String` | children | 指定子树为节点对象的某个属性值 |

### Methods

| 方法名 | 说明 | 参数 |
|------|--------|------|
| filter | 对树节点进行筛选操作 | 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数 |
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点，默认值为 `false` |
| setCheckedNodes | 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (nodes) 接收勾选节点数据的数组 |
| getCheckedKeys | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `true` |
| setCheckedKeys | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `true` |
| setChecked | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| node-click  | 节点被点击时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change  | 节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| current-change | 当前选中节点变化时触发的事件 | 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象 |

</div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '新建文件夹1',
          children: [{
            label: '我的文档1'
          }]
        }, {
          label: '新建文件夹2',
          children: [{
            label: '我的文档2'
          }, {
            label: '我的文档3'
          }]
        }, {
          label: '新建文件夹3',
          children: [{
            label: '新建文件夹4',
            children: [{
              label: '我的文档6'
            }]
          }, {
            label: '我的文档4'
          }, {
            label: '我的文档5'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        regions: [{
          'name': '/root'
        }, {
          'name': '/home'
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
          return resolve([{ name: '/root' }, { name: '/home' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === '/root') {
          hasChild = true
        } else if (node.data.name === '/home') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: '新建文件夹' + this.count++
            }, {
              name: '新建文件夹' + this.count++
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