// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import http from '@/api/http.js'
import '@/assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'

import './permission' //路由守卫
import jsCookie from 'js-cookie'
// import store from './store/index.js'

// import Vuex from 'vuex'

// Vue.use(Vuex)


Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$cookie = jsCookie

Vue.config.productionTip = false
Vue.prototype.$http = http

axios.defaults.baseURL = (process.env.NODE_ENV === 'developement') ? process.env.BASE_API : ''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
