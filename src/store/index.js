import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import product from './product'
import order from './order'
import customer from './customer'
Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    page_title: ''
  },
  getters: {
    pageTitle(state) {
      return state.page_title
    }
  },
  actions: {
    setPageTitle({
      commit
    }, payload) {
      commit('setPageTitle', payload)
    }
  },
  mutations: {
    setPageTitle(state, payload) {
      state.page_title = payload
    }
  },
  modules: {
    category,
    product,
    order,
    customer
  }
})
