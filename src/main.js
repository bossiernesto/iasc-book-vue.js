import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vue-particles'
import App from './App.vue'
import router from "./router";
import './assets/styles/style.css';
import './assets/styles/syntax.css';
import './assets/styles/blockquote.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
