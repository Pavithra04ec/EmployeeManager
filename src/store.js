import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

const state = {
    token: localStorage.getItem('token')
  }
  const mutations = {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    removeToken (state) {
      state.token = null
      localStorage.removeItem('token')
    }
  }
  const getters = {
    isLoggedIn: state => {
      return state.token != null
    }
  }
  export default new Vuex.Store({
    state,
    getters,
    mutations
  });
