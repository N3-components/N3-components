<template>
  <li :class="liClass">
    <div  ref="subnav-title" :style="paddingStyle" :class="`${prefixCls}-subnav__title`">
      <slot name="title"></slot>
      <n3-icon type="angle-right" :class="iClass"></n3-icon>
    </div>
    <template v-if="rootMenu.mode === 'horizontal'">
      <transition name="fadeDown">
        <ul class="n3-nav" v-show="opened"><slot></slot></ul>
      </transition>
    </template>
    <n3-collapse-transition v-else group>
      <ul :class="`${prefixCls}-nav`" v-show="opened"><slot></slot></ul>
    </n3-collapse-transition>
  </li>
</template>
<script>
  import n3Icon from '../Icon/n3Icon'
  import navMixin from '../Mixin/navMixin'
  import eventMixin from '../Mixin/eventMixin'
  import n3CollapseTransition from '../n3CollapseTransition'
  export default {
    name: 'n3SubNav',
    componentName: 'n3SubNav',
    mixins: [navMixin, eventMixin],
    components: {
      n3CollapseTransition,
      n3Icon
    },
    props: {
      index: {
        type: [String,Number],
        required: true
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    data() {
      return {
        timeout: null,
        items: {},
        submenus: {}
      }
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1
      },
      active: {
        cache: false,
        get() {
          let isActive = false
          const submenus = this.submenus
          const items = this.items
          Object.keys(items).forEach(index => {
            if (items[index].active) {
              isActive = true
            }
          })
          Object.keys(submenus).forEach(index => {
            if (submenus[index].active) {
              isActive = true
            }
          })
          return isActive
        }
      },
      liClass() {
        let { prefixCls,active,opened } = this
        let obj = {}
        obj[`${prefixCls}-subnav`] = true
        obj['is-active'] = active
        obj['is-opened'] = opened
        return obj
      },
      iClass() {
        let { prefixCls,rootMenu } = this
        let obj = {}
        obj[`${prefixCls}-subnav__icon-arrow`] = true
        obj[`${prefixCls}-icon-arrow-down`] = rootMenu.mode === 'vertical'
        obj[`${prefixCls}-icon-caret-bottom`] = rootMenu.mode === 'horizontal'
        return obj
      }
    },
    methods: {
      addItem(item) {
        this.$set(this.items, item.index, item)
      },
      removeItem(item) {
        delete this.items[item.index]
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.index, item)
      },
      removeSubmenu(item) {
        delete this.submenus[item.index]
      },
      handleClick() {
        this.dispatch('n3Nav', 'submenu-click', this)
      },
      handleMouseenter() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath)
        }, 300)
      },
      handleMouseleave() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index, this.indexPath)
        }, 300)
      },
      initEvents() {
        let {
          rootMenu,
          handleMouseenter,
          handleMouseleave,
          handleClick
        } = this
        let triggerElm
        if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
          triggerElm = this.$el
          triggerElm.addEventListener('mouseenter', handleMouseenter)
          triggerElm.addEventListener('mouseleave', handleMouseleave)
        } else {
          triggerElm = this.$refs['subnav-title']
          triggerElm.addEventListener('click', handleClick)
        }
      }
    },
    created() {
      this.parentMenu.addSubmenu(this)
      this.rootMenu.addSubmenu(this)
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this)
      this.rootMenu.removeSubmenu(this)
    },
    mounted() {
      this.$nextTick(()=>{
       this.initEvents()
      })
    }
  }
</script>