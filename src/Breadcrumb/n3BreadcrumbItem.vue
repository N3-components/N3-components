<template>
  <li v-if='show' :class="[active? prefixCls + '-breadcrumb-active' : '']">
    <a v-if='href_' :href="href">
      <slot></slot>
    </a>
    <span v-if='!href_ && !router_'>
      <slot></slot>
    </span>
    <router-link :to="`${route}`" v-if='router_'>
      <slot></slot>
    </router-link>
  </li>
</template>
<script>

export default {
  name: 'n3BreadcrumbItem',
  props: {
    href: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'n3'
    },
    router: {
      type: Boolean,
      default: false
    },
    route: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      router_: this.router,
      href_: true
    }
  },
  created() {
    this.href_ = this.active ? false : this.href || !this.router
    this.router_ = this.active ? false : !this.href && this.router
  }
}
</script>