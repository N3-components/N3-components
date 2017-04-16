<template>
  <div :class="[prefixCls + '-upload']" ref="uploader">
    <div v-if="type === 'click'">
      <label>
        <input
          type="file"
          :name="name"
          :accept="accept"
          :id="uploadId"
          :multiple="multiple"
          @change="onChange($event)"
          ref="input"
        />
        <slot>
          <n3-button>
            <n3-icon type="cloud-upload"></n3-icon>
            {{getL('click')}}
          </n3-button>
        </slot>
      </label>
      <div :class="[prefixCls + '-upload-list']" v-if="showList">
        <div :class="[prefixCls + '-upload-item']" v-for="(file, index) in uploadList">
          <div :class="[prefixCls + '-upload-item-info']">
            <n3-icon type="file-text-o"
              :class="[prefixCls + '-upload-file-icon']">
            </n3-icon>
            <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
            <n3-icon type="times"
              :class="[prefixCls + '-upload-del-info']"
              @click.native="delFile(index)">
            </n3-icon>
          </div>
          <n3-progress style="padding:0px 4px">
            <n3-progressbar
              type="success"
              height='3px'
              :now="progress[index]"
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
          @change="onChange($event)"
          ref="input"
        />
        <label :for="uploadId"
            :class="[prefixCls + '-upload-drag-area']">
        <n3-icon type="cloud-upload" :class="[prefixCls + '-upload-drag-icon']"></n3-icon>
        <span v-if="advanceDrag">{{getL('drag')}}</span>
        <span v-if="!advanceDrag">{{getL('nodrag')}}</span>
      </label>
      </div>
      <div :class="[prefixCls + '-upload-list']" v-if="showList">
        <div :class="[prefixCls + '-upload-item']" v-for="(file, index) in uploadList">
          <div :class="[prefixCls + '-upload-item-info']">
            <n3-icon type="file-text-o"
              :class="[prefixCls + '-upload-file-icon']">
            </n3-icon>
            <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
            <n3-icon type="times"
              :class="[prefixCls + '-upload-del-info']"
              @click.native="delFile(index)">
            </n3-icon>
          </div>
          <n3-progress style="padding:0px 4px">
            <n3-progressbar
              type="success"
              height='3px'
              :now="progress[index]"
            ></n3-progressbar>
          </n3-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import n3Icon from '../Icon/n3Icon'
import n3Button from '../Button/n3Button'
import n3Progress from '../Progress/n3Progress'
import n3Progressbar from '../Progress/n3Progressbar'
import localeMixin from '../Mixin/localeMixin'

export default {
  name: 'Uploader',
  mixins: [localeMixin('n3Uploader')],
  props: {
    name: {
      type: String,
      default: 'files'
    },
    type: {
      type: String,
      default: 'click'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      required: true
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
    showList: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: Number,
      default: 10
    },
    maxSize: {
      type: Number,
      default: 10
    },
    params: {
      type: Object
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
      states: [],
      ERRORS:{
        SERVER_FAIL: this.getL('SERVER_FAIL'),
        REQUEST_ERROR: this.getL('REQUEST_ERROR'),
        RESPONSE_NOT_JSON: this.getL('RESPONSE_NOT_JSON'),
        TASK_OVER_LENGTH: this.getL('TASK_OVER_LENGTH'),
        TASK_OVER_SIZE: this.getL('TASK_OVER_SIZE'),
        TASK_UNSUPPORTED_TYPE: this.getL('TASK_UNSUPPORTED_TYPE'),
        IFRAME_UNSUPPORTED_CROSS: this.getL('IFRAME_UNSUPPORTED_CROSS'),
      }
    }
  },
  computed: {
    advanceDrag () {
      const div = document.createElement('div')
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
    },
    // MB换算成B
    maxSizeB () {
      return this.maxSize * 1024 * 1024
    }
  },
  components: {
    n3Icon,
    n3Button,
    n3Progressbar,
    n3Progress
  },
  methods: {
    delFile (index) {
      this.$emit('delete', this.uploadList[index])
      this.uploadList.splice(index, 1)
      this.states.splice(index, 1)
      this.progress.splice(index, 1)
    },
    setError (message, index) {
      this.$emit('error', {
        message: message,
        file: index && this.uploadList[index] || null
      })
      this.states[index] = false
      index > -1 && this.uploadList.splice(index, 1)
    },
    submitForm () {
      if (!this.uploadList.length) {
        return
      }
      if (this.xhr) {
        this.xhrUpload()
      } else {
        this.iframeUpload()
      }
    },
    onChange (e) {
      let files = e.target.files
      if (this.maxLength && this.uploadList.length === this.maxLength) {
        this.$refs.input.value = null
        this.setError(this.ERRORS.TASK_OVER_LENGTH)
        return
      }
      if (files) {
        // files 属性还包括item length
        for (let i in Object.keys(files)) {
          if (typeof (files[i]) !== 'object' || !files[i].name) {
            continue
          }
          if (files[i].size > this.maxSizeB) {
            this.setError(this.ERRORS.TASK_OVER_SIZE)
            continue
          }
          this.progress.push(0)
          this.uploadList.push(files[i])
        }
      } else {
        this.progress = [0]
        this.uploadList = [{name: this.$refs.input.value.replace(/^.*\\/, '')}]
      }

      this.$refs.input.value = null
      this.submitForm()
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
        this.setError(this.ERRORS.SERVER_FAIL, index)
      } else {
        try {
          data = JSON.parse(response)
        } catch (e) {
          this.setError(this.ERRORS.RESPONSE_NOT_JSON, index)
        }
        if (data) {
          this.states[index] = true
          this.$emit('success', {
            response: data,
            file: this.uploadList[index]
          })
        }
      }
      if (Object.keys(this.states).length === len) {
        this.$emit('finish')
      }
    },
    xhrUpload () {
      let self = this
      let i = 0
      let len = this.uploadList.length
      let data
      for (i = 0; i < len; i++) {
        if (this.states[i]) {
          continue
        }
        (function (i, file) {
          if (file.type.match(self.accept)) {
            data = new window.FormData()
            data.append(self.name, file, file.name)

            if (self.params) {
              for (let name in self.params) {
                data.append(name, self.params[name])
              }
            }

            let xhr = new window.XMLHttpRequest()
            // 是否带跨域的cookies
            xhr.withCredentials = !!self.withCredentials
            xhr.open('post', self.url, true)

            xhr.onload = () => {
              self.parseResponse(xhr.responseText, i)
            }

            xhr.upload.onprogress = (e) => {
              const loaded = e.loaded ? e.loaded : 0
              const total = e.total ? e.total : 1
              let progressVal = parseInt((loaded / total) * 100, 10)
              self.progress.splice(i, 1, progressVal)
            }

            xhr.onerror = () => {
              self.states[i] = false
              self.setError(self.ERRORS.REQUEST_ERROR)
            }

            try {
              xhr.send(data)
            } catch (e) {
              self.setError(self.ERRORS.REQUEST_ERROR)
            }
          } else {
            self.setError(self.IFRAME_UNSUPPORTED_CROSS)
          }
        })(i, this.uploadList[i])
      }
    },
    iframeUpload () {
      let i = 0
      let self = this
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

          if (self.params) {
            for (let name in self.params) {
              let input = document.createElement('input')
              input.setAttribute('type', 'text')
              input.setAttribute('name', name)
              input.setAttribute('value', self.params[name])
            }
          }

          iframe.addEventListener('load', () => {
            this.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'))
            document.body.removeChild(form)
          })
          form.submit()
        }
      } else {
        this.setError(this.ERRORS.IFRAME_UNSUPPORTED_CROSS)
      }
    },
    addDragEvt () {
      let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']

      events.forEach((event) => {
        this.$refs.uploader.addEventListener(event, (e) => this.dragHandler(e))
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
  },
  mounted () {
    this.$nextTick(() => {
      this.advanceDrag && this.addDragEvt()
    })
  },
  beforeDestroy () {
    let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']
    events.forEach((event) => {
      this.$refs.uploader.removeEventListener(event, () => this._eventHandler())
    })
  }
}
</script>
