<template>

## 自动补全

<div class="bs-docs-section" id="自动补全"  >
<div class="bs-example">

#### 本地数据

<n3-typeahead 
    v-model="value"
    :data="USstate" 
    placeholder=" 发到">
</n3-typeahead>
<hr>

```html
<n3-typeahead 
    v-model="value"
    :data="USstate" 
    placeholder=" 发到">
</n3-typeahead>

```

<hr>

#### 异步获取

<n3-typeahead 
  async
  placeholder="CCCAddress, async via maps.googleapis.com"
  @change="getResult"
  :render="render"
  :items="items"
  :add-format="googleCallback">
</n3-typeahead>

```html
<n3-typeahead 
  async
  placeholder="CCCAddress, async via maps.googleapis.com"
  @change="getResult"
  :render="render"
  :items="items"
  :add-format="googleCallback">
</n3-typeahead>
```
<hr>

#### 内容模版

<n3-typeahead
  async 
  :context="_self"
  placeholder="Github users, async via api.github.com"
  @change="getGitresults"
  :items="gitItems"
  :render="rendergit"
  :add-format="githubCallback" >
</n3-typeahead>

```html
<n3-typeahead
  async 
  :context="_self"
  placeholder="Github users, async via api.github.com"
  @change="getGitresults"
  :items="gitItems"
  :render="rendergit"
  :add-format="githubCallback" >
</n3-typeahead>
```
</div>

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| data          | Array     |    -        |     本地数组     |
| limit          | Number     |    8       |     显示的条数     |
| items          | Array     |    []        |     列表数组，用于异步请求     |
| async          | Boolean     |    false       |     异步     |
| render          | Function     |    -       |     渲染函数     |
| add-format          | Function     |    -       |     获取需要的值     |
| dropdow-width          | String     |    220px       |     下拉宽度     |
| dropdown-height          | String     |    300px       |     下拉框最大高度     |


### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| blur          | 失焦     |  
| focus          | 聚焦     |  
| change | 值变化 |

<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      gitItems: [],
      value: 'Alabama',
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  methods: {
    render (item) {
      return item.formatted_address
    },
    getResult (query) {
      let self = this
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query,
        success (ret) {
          self.items = ret.results
        }
      })
    },
    getGitresults (query) {
      let self = this
      $.ajax({
        url: 'https://api.github.com/search/users?q=' + query,
        success (ret) {
          self.gitItems = ret.items
        }
      })
    },
    rendergit (item) {
      return `<div><img width="18px" height="18px" src="${item.avatar_url}"/> <span>${item.login}</span></div>`
    },
    googleCallback (item) {
      return item.formatted_address
    },
    githubCallback (item) {
      return item.login
    }
  }
}
</script>
