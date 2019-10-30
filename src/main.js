import Vue from 'vue'
import App from './App.vue'
import router from './router'
//注册
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.$axios = axios

// css
import '@/assets/css/global.css' // global css

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
