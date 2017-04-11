<template>

### Layout

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

### n3-container Params

| name          | type            |    default          | Description   |
|-------------  |---------------- |----------------  |-------- |
| fluid          | `Boolean`     |    `false `          |    fluid layout    |


### n3-column Params

| name          | type            |    default          | Description   |
|-------------  |---------------- |----------------  |-------- |
| col          | `Number`    |    -         |     number of col     |
| mode          | `String`     |    `md`          |     mode `xs`(phone) `sm`(pad) `md`(desktop) `lg`(big size screen)    |
| offset          | `Number`     |    -          |     offset    |

</div>
</template>

<style scoped>
  .context{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(101, 212, 204);
    border: 1px solid #fff;
    text-align: center;
    font-size: 14;
    color: #fff;
    font-weight: bold;
  }
</style>
