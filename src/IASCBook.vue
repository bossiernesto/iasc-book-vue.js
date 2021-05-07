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
          <sidebar-menu         
            :menu="menu"
            :width="sidebarWidth"
            :collapsed="collapsed"
            @toggle-collapse="onToggleCollapse"
            @item-click="onItemClick"/>
      </div>
    </div>
          <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    <Footer /> 
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AppLayout from '@/layouts/AppLayout'
import { SidebarMenu } from 'vue-sidebar-menu'

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'IASCBook',
  components: {
    AppLayout,
    Footer,
    Navbar,
    SidebarMenu
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  data () {
    return {
      sidebarWidth: '300px',
      menu: [
          {
              header: true,
              title: 'IASC Notes',
              hiddenOnCollapse: true
          },
          {
              href: '/introduccion',
              title: 'Introduccion',
              icon: 'fa fa-book'
          },
          {
              href: '/concurrencia_paralelismo',
              title: 'Concurrencia y Paralelismo',
              icon: 'fa fa-book'
          },
          { component: separator },
          {
              href: '/cps',
              title: 'CPS',
              icon: 'fa fa-book'
          },
                              {
              href: '/promises',
              title: 'Promises',
              icon: 'fa fa-book'
          },
          {
              href: '#',
              title: 'Planificacion Cooperativa',
              icon: 'fa fa-chevron-down',
              child: [
                  {
                      href: '/corutinas',
                      title: 'Corutinas'
                  },
                                              {
                      href: '/fibers',
                      title: 'Fibers'
                  }
              ]
          }
      ],
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
  padding-left: 30px;
  transition: 0.3s ease;
}
#app.collapsed {
  padding-left: 30px;
}
#app.onmobile {
  padding-left: 30px;
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


#app {
  padding-left: 350px;
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
