import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import { routes } from './router'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
import store from './store.js'
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App),
})