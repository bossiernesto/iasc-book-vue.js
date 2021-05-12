<template>
    <sidebar-menu         
    :menu="menu"
    :width="sidebarWidth"
    :collapsed="collapsed"
    @toggle-collapse="onToggleCollapse"
    >
      <span slot="toggle-icon" class="fa fa-bars"></span>
    </sidebar-menu>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import { sidearContent } from '@/static/SidebarContent.js'

export default {
  name: 'bm-menu',
  components: {
    SidebarMenu
  },
  data () {
    return {
      sidebarWidth: '300px',
      menu: sidearContent
    }
  },
  props: {
    onToggleCollapse: Function,
    collapsed: Boolean
  }
}
</script>
<style>
/* sidebar */
.bm-menu {
    background: #6B7A8F;
    color: #fff;
}

.bm-menu .components {
    padding: 20px 0;
    border-bottom: 1px solid #6B7A8F;
}

.bm-menu ul p {
    color: #fff;
    padding: 10px;
}

.bm-menu ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
.bm-menu ul li a:hover {
    color: #7187a7;
    background: #fff;
}

.bm-menu ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #7187a7;
}
</style>
<style lang="scss" scoped>
.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: '\f105';
  font-family: 'FontAwesome';
}

.sidebar.v-sidebar-menu .collapse-btn:after {
  content: '\f07e';
  font-family: 'FontAwesome';
}
</style>
