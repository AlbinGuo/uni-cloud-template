import App from './App'
import api from'@/common/api/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import UniIcons from '@/components/uni-icons/uni-icons.vue'
Vue.component("UniIcons", UniIcons);

// Vue原型挂载
Vue.prototype.$api = api

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif