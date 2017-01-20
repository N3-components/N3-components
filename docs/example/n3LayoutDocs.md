<template>

## 布局

<div class="bs-docs-section" >
<div class="bs-example">
  <n3-container fluid>
    <n3-row>
        <n3-column :col="8" class="context">
            :col="8"
        </n3-column>
        <n3-column :col="4" class="context">
            :col="4"
        </n3-column>
    </n3-row>
    <n3-row>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
        <n3-column :col="1" class="context">
            1
        </n3-column>
    </n3-row>
  </n3-container>
</div>

```html
<n3-container fluid>
  <n3-row>
      <n3-column :col="8" class="context">
          :col="8"
      </n3-column>
      <n3-column :col="4" class="context">
          :col="4"
      </n3-column>
  </n3-row>
  <n3-row>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
      <n3-column :col="1" class="context">
          1
      </n3-column>
  </n3-row>
</n3-container>
```

### n3-container参数

| 参数          | 类型            |    默认值          | 说明   |
|-------------  |---------------- |----------------  |-------- |
| fluid          | Boolean     |    false           |    是否流式布局    |


### n3-column参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| col          | Number     |    -         |     占的列数     |
| mode          | String     |    md          |     布局模式 xs(手机) sm(平板) md(桌面) lg(大屏幕)    |
| offset          | Number     |    -          |     偏移值    |

</div>
</template>

<style scoped>
  .context{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #eee;
    border: 1px solid #ddd;
    text-align: center;
    font-size:14
  }
</style>
