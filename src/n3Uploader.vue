<template>
  <div :class="[prefixCls + '-upload']" id="upload-{{uploadId}}">
    <div v-if="type === 'click'">
      <label>
        <input
          type="file"
          :name="name"
          :accept="accept"
          :id="uploadId"
          :multiple="multiple"
          @change="onChange($event)" />
        <slot>
          <n3-button>
            <n3-icon type="cloud-upload"></n3-icon>
            点击上传
          </n3-button>
        </slot>
      </label>
      <div :class="[prefixCls + '-upload-list']">
        <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
          <div :class="[prefixCls + '-upload-item-info']">
            <n3-icon type="file-text-o"
              :class="[prefixCls + '-upload-file-icon']">
            </n3-icon>
            <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
            <n3-icon type="times"
              :class="[prefixCls + '-upload-del-info']"
              @click="delFile($index)">
            </n3-icon>
          </div>
          <n3-progress style="padding:0px 4px">
            <n3-progressbar
              type="success"
              height='3px'
              :now="progress[$index]"
            ></n3-progressbar>
          </n3-progress>
        </div>
      </div>
    </div>
    <div v-if="type === 'drag'"
         :class="[prefixCls + '-upload-drag']">
      <div 
        :class="[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-upload-is-dragover')]"
        :style="{width:dragWidth,height:dragHeight}">
        <input type="file"
          :name="name"
          :id="uploadId"
          :accept="accept"
          :multiple="multiple"
          @change="onChange($event)" />
        <label :for="uploadId"
            :class="[prefixCls + '-upload-drag-area']">
        <n3-icon type="cloud-upload" size="60px" :class="[prefixCls + '-upload-drag-icon']"></n3-icon>
        <span v-if="advanceDrag">点击或将文件拖拽到此区域上传</span>
        <span v-if="!advanceDrag">当前环境不支持拖拽上传，请点此上传</span>
      </label>
      </div>
      <div :class="[prefixCls + '-upload-list']">
        <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
          <div :class="[prefixCls + '-upload-item-info']">
            <n3-icon type="file-text-o"
              :class="[prefixCls + '-upload-file-icon']">
            </n3-icon>
            <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
            <n3-icon type="times"
              :class="[prefixCls + '-upload-del-info']"
              @click="delFile($index)">
            </n3-icon>
          </div>
          <n3-progress style="padding:0px 4px">
            <n3-progressbar
              type="success"
              height='3px'
              :now="progress[$index]"
            ></n3-progressbar>
          </n3-progress>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import n3Icon from './n3Icon'
  import n3Button from './n3Button'
  import n3Progress from './n3Progress'
  import n3Progressbar from './n3Progressbar'
  import n3Toast from './n3ToastMethod'
  import type from './utils/type'

  export default {
    props: {
      name: {
        type: String,
        default: 'files'
      },
      type: {
        type: String,
        default: 'click'
      },
      accept: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      multiple: {
        type: Boolean,
        default: true
      },
      dragWidth: {
        type: String,
        default: '300px'
      },
      dragHeight: {
        type: String,
        default: '200px'
      },
      onError: {
        type: Function,
        default (data) {
          n3Toast({
            text: data.message
          })
        }
      },
      onSuccess: {
        type: Function
      },
      onFinish: {
        type: Function
      },
      onDelete: {
        type: Function
      },
      maxlength: {
        type: Number,
        default: 10
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    data () {
      return {
        value: '',
        uploadId: 'upload' + Date.now() + Math.floor(Math.random() * 100),
        percent: 0,
        xhr: 'FormData' in window,
        uploadList: [],
        progress: [],
        dragover: false,
        states: []
      }
    },
    computed: {
      advanceDrag () {
        const div = document.createElement('div')
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
      }
    },
    components: {
      n3Icon,
      n3Button,
      n3Progressbar,
      n3Progress
    },
    ready () {
      this._input = document.querySelector('#' + this.uploadId)
      this.$el = document.querySelector('#upload-' + this.uploadId)

      this.advanceDrag && this.addDragEvt()
    },
    beforeDestroy () {
      let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']
      events.forEach((event) => {
        this.$el.removeEventListener(event, () => this._eventHandler())
      })
    },
    methods: {
      onChange (e) {
        let files = e.target.files
        if (files) {
          for (let i in files) {
            if (typeof (files[i]) === 'object' && files[i].name) {
              this.progress.push(0)
              this.uploadList.push(files[i])
            }
          }
        } else {
          this.progress = [0]
          this.uploadList = [{name: this._input.value.replace(/^.*\\/, '')}]
        }

        if (this.maxlength && this.uploadList.length > this.maxlength) {
          this._input.value = ''
          this.uploadList = []
          this.setError('超过上传数量限制，请先删除再进行上传')
        } else {
          this.submitForm()
        }
      },

      submitForm () {
        if (this.uploadList.length > 0) {
          if (this.url) {
            if (this.xhr) {
              this.xhrUpload()
            } else {
              this.iframeUpload()
            }
          }
        }
      },

      xhrUpload () {
        let self = this
        let i = 0
        let len = this.uploadList.length
        let data
        for (i = 0; i < len; i++) {
          (function (i, file) {
            if (file.type.match(self.accept)) {
              data = new window.FormData()
              data.append(self.name, file, file.name)

              let xhr = new window.XMLHttpRequest()

              xhr.open('post', self.url, true)

              xhr.onload = () => {
                self.parseResponse(xhr.responseText, i)
              }

              xhr.upload.onprogress = (e) => {
                const loaded = e.loaded ? e.loaded : 0
                const total = e.total ? e.total : 1

                self.$set('progress[' + i + ']', parseInt((loaded / total) * 100, 10))
              }

              xhr.onerror = () => {
                self.states[i] = false
                self.setError('上传失败了！')
              }

              try {
                xhr.send(data)
              } catch (e) {
                self.setError('上传失败了！')
              }
            } else {
              self.setError('不支持该文件类型')
            }
          })(i, this.uploadList[i])
        }
      },

      iframeUpload () {
        let i = 0
        let len = this.uploadList.length
        if (this.testSameOrigin(this.url)) {
          for (i = 0; i < len; i++) {
            let iframeName = 'uploadiframe-' + i + '-' + new Date().getTime()
            let iframe = document.createElement('iframe')
            let form = document.createElement('form')
            let input = document.createElement('input')

            input.setAttribute('type', 'file')
            input.setAttribute('value', this.uploadList[i].name)
            iframe.setAttribute('name', iframeName)
            iframe.style.display = 'none'
            form.setAttribute('method', 'post')
            form.setAttribute('action', this.url)
            form.setAttribute('target', iframeName)
            form.setAttribute('data-index', i)

            document.body.appendChild(form)
            form.appendChild(iframe)
            form.appendChild(input)

            iframe.addEventListener('load', () => {
              this.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'))
              document.body.removeChild(form)
            })
            form.submit()
          }
        } else {
          this.setError('iframe不支持跨域请求')
        }
      },

      testSameOrigin (url) {
        const loc = window.location
        const a = document.createElement('a')
        a.href = url
        return a.hostname === loc.hostname &&
               a.port === loc.port &&
               a.protocol === loc.protocol
      },

      parseResponse (response, index) {
        let data = null
        let len = this.uploadList.length
        if (!response) {
          this.setError('服务器没有响应', index)
        } else {
          try {
            data = JSON.parse(response)
          } catch (e) {
            this.setError('服务器响应数据格式有问题', index)
          }
          if (data) {
            this.states[index] = true
            if (type.isFunction(this.onSuccess)) {
              this.onSuccess({
                response: data,
                file: this.uploadList[index]
              })
            }
          }
        }
        if (Object.keys(this.states).length === len && type.isFunction(this.onFinish)) {
          this.onFinish()
        }
      },

      setError (message, index) {
        if (type.isFunction(this.onError)) {
          this.onError({
            message: message,
            file: index && this.uploadList[index] || null
          })
        }
        this.states[index] = false
        index > -1 && this.uploadList.splice(index, 1)
      },

      delFile (index) {
        if (type.isFunction(this.onDelete)) {
          this.onDelete(this.uploadList[index])
        }
        this.uploadList.splice(index, 1)
        this.states.splice(index, 1)
        this.progress.splice(index, 1)
      },

      addDragEvt () {
        let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']

        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => this.dragHandler(e))
        })
      },

      dragHandler (e) {
        let self = this
        e.preventDefault()
        e.stopPropagation()

        if (e.type === 'dragover' || e.type === 'dragenter') {
          self.dragover = true
        }

        if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
          self.dragover = false
          if (e.type === 'drop') {
            let files = e.dataTransfer.files || {}
            for (let i in files) {
              if (files[i] && files[i].name && files[i].size) {
                self.progress.push(0)
                self.uploadList.push(files[i])
              }
            }
            self.submitForm()
          }
        }
      }
    }
  }
  </script>
