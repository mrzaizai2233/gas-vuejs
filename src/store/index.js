import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import product from './product'
import order from './order'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    category,
    product,
    order
  }
})
