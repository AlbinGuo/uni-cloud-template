import Vue from 'vue'
import App from './App'
import api from'./common/api'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$api = api
App.mpType = 'app'


import UniIcons from '@/components/uni-icons/uni-icons.vue'
Vue.component("UniIcons", UniIcons);


const app = new Vue({
	store,
    ...App
})
app.$mount()


