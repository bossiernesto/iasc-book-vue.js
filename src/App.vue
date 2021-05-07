<template>
<div id="app"
   :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <div class="wrapper">
      <div class="container header">
          <Navbar/>
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
            @toggle-collapse="onToggleCollapse"
            @item-click="onItemClick"
          />
      </div>
    </div>
    <Footer /> 
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import AppLayout from '@/layouts/AppLayout'

export default {
  name: 'App',
  components: {
    AppLayout,
    Footer,
    Navbar,
    Sidebar
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  data () {
    return {
    collapsed: false,
    isOnMobile: false
    }
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
      console.log(node)
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
#app {
  padding-left: 50px;
  transition: 0.3s ease;
}
#app.collapsed {
  padding-left: 50px;
}
#app.onmobile {
  padding-left: 50px;
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
.app {
  padding: 70px;
}
.container {
  max-width: 900px;
}
</style>
