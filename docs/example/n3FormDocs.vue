<template>
    <div class="bs-docs-section" id="表单验证"  >
        <h1 class="page-header"><a href="#表单验证" class="anchor">表单验证</a><span class="author"> </span></h1>
        <div class="bs-example">
        	<n3-form v-ref:form>
                <n3-form-item
                    need
                    label="姓名"
                    :label-col="3">
                <n3-input
                    name="name"
                    :value.sync="model.name"
                    :rules="[{type:'required'}]"
                    :custom-validate="nameValidate">
                </n3-input>
                </n3-form-item>

                <n3-form-item
                    need
                    label="年龄"
                    :label-col="3">
                <n3-input-number
                    name="age"
                    :value.sync="model.age"
                    :rules="[{type:'number'},{type:'required'}]">
                </n3-input-number>
                </n3-input>
                </n3-form-item>
                <n3-form-item
                    need
                    label="地址"
                    :label-col="3">
                <n3-cascader
                    name="address"
                    :options="options"
                    :value.sync="model.address"
                    :rules="[{type:'required'}]">
                </n3-cascader>
                </n3-form-item>
                <n3-form-item
                    need
                    label="生日"
                    :label-col="3">
                <n3-datepicker
                    name="birthday"
                    :value.sync="model.birthday"
                    :rules="[{type:'required'}]">
                </n3-datepicker>
                </n3-form-item>
                <n3-form-item
                    need
                    label="学校"
                    :label-col="3">
                <n3-typeahead
                    name="学校"
                    :query.sync = "model.school"
                    :data="schoolData"
                    :rules="[{type:'required'}]">
                </n3-typeahead>
                </n3-form-item>
                <n3-form-item
                    need
                    label="爱好"
                    :label-col="3">
                <n3-checkbox-group
                    name="hobby"
                    :value.sync = "model.hobby"
                    :rules="[{type:'required'}]">
                    <n3-checkbox value="0">看书</n3-checkbox>
                    <n3-checkbox value="1">运动</n3-checkbox>
                    <n3-checkbox value="2">旅行</n3-checkbox>
                </n3-checkbox-group>
                </n3-form-item>

                <n3-form-item
                    need
                    label="性别"
                    :label-col="3">
                <n3-radio-group
                    name="sex"
                    :value.sync = "model.sex"
                    :rules="[{type:'required'}]">
                    <n3-radio value="0">男</n3-radio>
                    <n3-radio value="1">女</n3-radio>
                </n3-radio-group>
                </n3-form-item>

                <n3-form-item
                    need
                    label="专业"
                    :label-col="3">
                <n3-select
                    name="sex"
                    :options='profession'
                    :value.sync = "model.profession"
                    :rules="[{type:'required'}]">
                </n3-select>
                </n3-form-item>

                <n3-form-item
                    need
                    label="级别"
                    :label-col="3">
                  <n3-slider
                      name="level"
                      :value.sync = "model.level"
                      :rules="[{type:'required'}]">
                  </n3-slider>
                </n3-form-item>

                <n3-form-item
                    need
                    label="开启状态"
                    :label-col="3">
                  <n3-switch
                      name="state"
                      :value.sync = "model.state"
                      :rules="[{type:'required'}]">
                  </n3-switch>
                </n3-form-item>
                <n3-form-item
                    need
                    label="喜欢的明星"
                    :label-col="3">
                  <n3-multiple-input
                      name="star"
                      :value.sync = "model.star"
                      :rules="[{type:'required'}]">
                  </n3-multiple-input>
                </n3-form-item>
                <n3-form-item
                    need
                    label="想说的话"
                    :label-col="3">
                  <n3-textarea
                      name="suggestion"
                      :value.sync = "model.suggestion"
                      :rules="[{type:'required'}]">
                  </n3-textarea>
                </n3-form-item>

                 <n3-form-item>
                     <n3-button type="primary" @click="submit" >提交</n3-button>
                     <n3-button type="primary" @click="validate = false" >关闭验证</n3-button>
                </n3-form-item>
            </n3-form>
        	<pre><code class="language-markup"><script type="language-mark-up">
<n3-form v-ref:form>
    <n3-form-item
        need
        label="姓名"
        :label-col="3">
    <n3-input
        name="name"
        :value.sync="model.name"
        :rules="[{type:'required'}]"
        :custom-validate="nameValidate">
    </n3-input>
    </n3-form-item>

    <n3-form-item
        need
        label="年龄"
        :label-col="3">
    <n3-input
        name="age"
        :value.sync="model.age"
        :rules="[{type:'number'},{type:'required'}]">
    </n3-input>
    </n3-form-item>
    <n3-form-item
        need
        label="地址"
        :label-col="3">
    <n3-cascader
        name="address"
        :options="options"
        :value.sync="model.address"
        :rules="[{type:'required'}]">
    </n3-cascader>
    </n3-form-item>
    <n3-form-item
        need
        label="生日"
        :label-col="3">
    <n3-datepicker
        name="birthday"
        :value.sync="model.birthday"
        :rules="[{type:'required'}]">
    </n3-datepicker>
    </n3-form-item>
    <n3-form-item
        need
        label="学校"
        :label-col="3">
    <n3-typeahead
        name="学校"
        :query.sync = "model.school"
        :data="schoolData"
        :rules="[{type:'required'}]">
    </n3-typeahead>
    </n3-form-item>
    <n3-form-item
        need
        label="爱好"
        :label-col="3">
    <n3-checkbox-group
        name="hobby"
        :value.sync = "model.hobby"
        :rules="[{type:'required'}]">
        <n3-checkbox value="0">看书</n3-checkbox>
        <n3-checkbox value="1">运动</n3-checkbox>
        <n3-checkbox value="2">旅行</n3-checkbox>
    </n3-checkbox-group>
    </n3-form-item>

    <n3-form-item
        need
        label="性别"
        :label-col="3">
    <n3-radio-group
        name="sex"
        :value.sync = "model.sex"
        :rules="[{type:'required'}]">
        <n3-radio value="0">男</n3-radio>
        <n3-radio value="1">女</n3-radio>
    </n3-radio-group>
    </n3-form-item>

    <n3-form-item
        need
        label="专业"
        :label-col="3">
    <n3-select
        name="sex"
        :options='profession'
        :value.sync = "model.profession"
        :rules="[{type:'required'}]">
    </n3-select>
    </n3-form-item>

    <n3-form-item
        need
        label="级别"
        :label-col="3">
      <n3-slider
          name="level"
          :value.sync = "model.level"
          :rules="[{type:'required'}]">
      </n3-slider>
    </n3-form-item>

    <n3-form-item
        need
        label="开启状态"
        :label-col="3">
      <n3-switch
          name="state"
          :value.sync = "model.state"
          :rules="[{type:'required'}]">
      </n3-switch>
    </n3-form-item>
    <n3-form-item
        need
        label="喜欢的明星"
        :label-col="3">
      <n3-multiple-input
          name="star"
          :value.sync = "model.star"
          :rules="[{type:'required'}]">
      </n3-multiple-input>
    </n3-form-item>
    <n3-form-item
        need
        label="想说的话"
        :label-col="3">
      <n3-textarea
          name="suggestion"
          :value.sync = "model.suggestion"
          :rules="[{type:'required'}]">
      </n3-textarea>
    </n3-form-item>

     <n3-form-item>
         <n3-button type="primary" @click="submit" >提交</n3-button>
         <n3-button type="primary" @click="validate = false" >关闭验证</n3-button>
    </n3-form-item>
</n3-form>
          </script></code></pre>
          <pre><code class="language-javascript"><script type="language-javascript">
new Vue({
  data: {
    profession: [{
      value: '学生',
      label: '学生'
    }, {
      value: '工程师',
      label: '工程师'
    }, {
      value: '医生',
      label: '医生'
    }],
    model: {
      name: '',
      age: '',
      address: [],
      birthday: '',
      sex: '',
      school: '',
      hobby: [],
      profession: '',
      state: false,
      star: [],
      suggestion: ''
    },
    schoolData: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    sexOptions: [{
      value: '1',
      label: '男'
    }, {
      value: '0',
      label: '女'
    }],
    options: [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
          value: 'xihu',
          label: '西湖'
        }]
      }]
    }, {
      value: 'jiangsu',
      label: '江苏',
      children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
          value: 'zhonghuamen',
          label: '中华门'
        }]
      }]
    }],
    validate: false,
    result: {}
  },
  methods: {
    nameValidate (val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: 'success'
        }
      } else {
        return {
          validStatus: 'error',
          tips: '请输入中文名'
        }
      }
    },
    submit () {
     this.$refs.form.validateFields(result=>{
        console.log(result)
     })
    }
  }
})
        	</script></code></pre>

          <h2>n3-from参数</h2>
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
                <td>type</td>
                <td><code>String</code> 如:  <code>horizontal</code><code>inline</code></td>
                <td>horizontal</td>
                <td>布局方式</td>
              </tr>
              <tr>
                <td>validate</td>
                <td><code>Boolean</code></td>
                <td>false</td>
                <td>是否打开验证</td>
              </tr>
              <tr>
                <td>result</td>
                <td><code>Object</code></td>
                <td></td>
                <td>验证结果</td>
              </tr>
              <tr>
                <td>on-validate-change</td>
                <td><code>Function</code></td>
                <td></td>
                <td>验证结果变化</td>
              </tr>
            </tbody>
          </table>
          <p>验证建议直接调用组件的<code style="color:red">validateFields</code> 方法，具体可查看样例</p>

          <h2>n3-from-item参数</h2>
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
                <td>label</td>
                <td><code>String</code></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>label-col</td>
                <td><code>Number</code></td>
                <td>2</td>
                <td>label所占栅格数</td>
              </tr>
               <tr>
                <td>wrap-col</td>
                <td><code>Number</code></td>
                <td></td>
                <td>item所占栅格数</td>
              </tr>
              <tr>
                <td>need</td>
                <td><code>Boolean</code></td>
                <td>false</td>
                <td>红点标记</td>
              </tr>
            </tbody>
          </table>


          <h2>待验证组件参数</h2>
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
                <td>name</td>
                <td><code>String</code></td>
                <td></td>
                <td>标示输入项，与结果内的值对应</td>
              </tr>
              <tr>
                <td>readonly</td>
                <td><code>Boolean</code></td>
                <td><code>false</code></td>
                <td>只读，无法输入，级联，时间日期等组件默认无法手动输入</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><code>Boolean</code></td>
                <td></td>
                <td>禁止改变值</td>
              </tr>
              <tr>
                <td>width</td>
                <td><code>String</code></td>
                <td>220px</td>
                <td>宽度</td>
              </tr>
              <tr>
                <td>validate</td>
                <td><code>Boolean</code></td>
                <td>false</td>
                <td>是否打开检验</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td><code>String</code></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>custom－validate</td>
                <td><code>Function</code></td>
                <td></td>
                <td>自定义检验器
                <code>
                function(value){
                  if(value){
                    return {
                      validStatus: 'success'
                    }
                  }else{
                    return {
                      validStatus: 'error',
                      tips: '出错啦'
                    }
                  }
                }
                </code>
                </td>
              </tr>
              <tr>
                <td>rules</td>
                <td><code>Array</code></td>
                <td>[]</td>
                <td>规则数组 ,如
									<code>
									[{type: 'required' }, {type: 'maxlength=6' }, {type: 'minlength=3' }, {type: 'phone' }, {type: 'number' }, {type: 'telephone' }, {type: 'email' }]</code>
								</td>
              </tr>
              <tr>
                <td>hasFeedback</td>
                <td><code>Boolean</code></td>
                <td></td>
                <td>是否显示状态icon</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      profession: [{
        value: '学生',
        label: '学生'
      }, {
        value: '工程师',
        label: '工程师'
      }, {
        value: '医生',
        label: '医生'
      }],
      model: {
        name: '',
        age: '',
        address: [],
        birthday: '',
        sex: '',
        school: '',
        hobby: [],
        profession: '',
        state: false,
        star: [],
        suggestion: ''
      },
      schoolData: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      sexOptions: [{
        value: '1',
        label: '男'
      }, {
        value: '0',
        label: '女'
      }],
      options: [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
          children: [{
            value: 'xihu',
            label: '西湖'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{
            value: 'zhonghuamen',
            label: '中华门'
          }]
        }]
      }],
      validate: false,
      result: {}
    }
  },
  methods: {
    nameValidate (val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: 'success'
        }
      } else {
        return {
          validStatus: 'error',
          tips: '请输入中文名'
        }
      }
    },
    submit () {
      this.$refs.form.validateFields(result=>{
        console.log(result)
     })
    }
  }
}
</script>
