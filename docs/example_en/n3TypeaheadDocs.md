<template>

### Typeahead

<div class="bs-docs-section" >
<div class="bs-example">

> Loale data

<n3-typeahead 
    v-model="value"
    :data="USstate" 
    placeholder="input">
</n3-typeahead>
<hr>

```html
<n3-typeahead 
    v-model="value"
    :data="USstate" 
    placeholder="input">
</n3-typeahead>

```

<hr>

> async

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

> 内容模版

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

### Params

| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| data          | `Array`     |    -        |     locale data     |
| limit          | `Number`     |    `8`       |     the limited number of items      |
| items          | `Array`     |    `[]`        |    suggestion items，for asyc     |
| async          | `Boolean`     |    `false`       |     whether is async or not     |
| render          | `Function`     |    -       |     render function     |
| add-format          | `Function`     |    -       |     format function to get right data    |
| dropdown-width          | `String`     |    `220px`       |     width of dropdown     |
| dropdown-height          | `String`     |    `300px`       |     max height of dropdown     |


### Events

| name          |   description          |     params     
|-------------  |---------------- |  ------|
| blur          | blur     |  - |
| focus          | focus     |  - |
| change | change |(currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>
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
