<template>
<div id="app"
   :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <div class="wrapper">
      <div class="container header">
          <div
            v-if="isOnMobile && !collapsed"
            class="sidebar-overlay"
            @click="collapsed = true"
          />
          <AppLayout>
            <slot />
          </AppLayout>
          <Sidebar         
            :collapsed="collapsed"
            :toggle-collapse="onToggleCollapse"
          />
      </div>
    </div>
    <Footer /> 
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import AppLayout from '@/layouts/AppLayout'
import { sidearContent } from '@/static/SidebarContent.js'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'IASCBook',
  components: {
    AppLayout,
    Footer,
    Sidebar
  },
  data () {
    return {
      sidebarWidth: '300px',
      menu: sidearContent,
    collapsed: false,
    isOnMobile: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      this.collapsed = collapsed
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>
<style>
.app {
  padding: 70px;
}
#app {
  padding-left: 300px;
  transition: 0.3s ease;
}
#app.collapsed {
  padding-left: 50px;
}
#app.onmobile {
  padding-left: 50px;
}

.container {
  max-width: 900px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>