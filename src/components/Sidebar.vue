<template>
   <sidebar-menu :menu="menu"
        :width="sidebarWidth"        
        :collapsed="collapsed"
        :show-one-child="true" />
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'

// const separator = {
//   template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
// }

export default {
  name: 'bm-menu',
  components: {
    SidebarMenu
  },
  data() {
            return {
                sidebarWidth: '250px',
                menu: [
                    {
                        header: true,
                        title: 'IASC Notes',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/introduccion',
                        title: 'Introduccion',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/concurrencia_paralelismo',
                        title: 'Concurrencia y Paralelismo',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/cps',
                        title: 'CPS',
                        icon: 'fa fa-user'
                    },
                                        {
                        href: '/promises',
                        title: 'Promises',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '#',
                        title: 'Planificacion Cooperativa',
                        icon: 'fa fa-chart-area',
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
                ]
            }
        }
}
</script>
<style>
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