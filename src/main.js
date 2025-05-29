import './plugins/bootstrap-vue.js'
import './plugins/styles.js'
import './plugins/hljs.js'

import hljsVuePlugin from '@highlightjs/vue-plugin'

import { createApp } from 'vue'
import router from './router'
import IASCBook from './IASCBook.vue'

const app = createApp(IASCBook)
app.use(router)
app.use(hljsVuePlugin)
app.mount('#app')
