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
          <sidebar-menu         
            :menu="menu"
            :width="sidebarWidth"
            :collapsed="collapsed"
            @toggle-collapse="onToggleCollapse"
          >
            <span slot="toggle-icon" class="fa fa-bars"></span>
          </sidebar-menu>
      </div>
    </div>
    <Footer /> 
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import AppLayout from '@/layouts/AppLayout'
import { SidebarMenu } from 'vue-sidebar-menu'
import Separator from '@/components/Separator.vue'

const separator = Separator

export default {
  name: 'IASCBook',
  components: {
    AppLayout,
    Footer,
    SidebarMenu
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
          {
            component: Separator
          },
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
          },
          {
              href: '#act',
              title: 'Actores',
              icon: 'fa fa-chevron-down',
              child: [
                  {
                      href: '/actores_intro',
                      title: 'Introduccion a Actores'
                  },
                                              {
                      href: '/otp',
                      title: 'Elixir/Erlang OTP'
                  }
              ]
          },
          {
              href: '#stm',
              title: 'Memoria Transaccional',
              icon: 'fa fa-chevron-down',
              child: [
                  {
                      href: '/efecto_lado_haskell',
                      title: 'Efectos de Lado en Haskell'
                  },
                                              {
                      href: '/stm',
                      title: 'Memorial Transaccional'
                  }
              ]
          },
          {
            component: separator
          },
          {
            header: true,
            title: 'Arquitectura y Distribucion',
            hiddenOnCollapse: true
          },
          {
              href: '#dist',
              title: 'Distribucion',
              icon: 'fa fa-chevron-down',
              child: [
                  {
                      href: '/distribucion',
                      title: 'Introduccion a Distribucion'
                  },
                                              {
                      href: '/interleaving',
                      title: 'Interleaving y Netsplits'
                  },
                  {
                      href: '/cap',
                      title: 'Notas sobre CAP'
                  },
                  {
                      href: '/mitos_distribucion',
                      title: 'Mitos en la distribucion'
                  }
              ]
          },
          {
              href: '#cont',
              title: 'Contenedores',
              icon: 'fa fa-chevron-down',
              child: [
                  {
                      href: '/intro_contenedores',
                      title: 'Intro a Contenedores'
                  },
                                              {
                      href: '/service_mesh',
                      title: 'Service Mesh'
                  }
              ]
          },
      ],
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
  padding-left: 300px;
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
