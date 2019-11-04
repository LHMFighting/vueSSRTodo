import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const root = document.createElement('div')
document.body.appendChild(root)

const router = createRouter()
const store = createStore()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
