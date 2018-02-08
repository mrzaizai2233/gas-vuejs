import actions from  './actions'
import getters from './getters'
import mutations from './mutations'

const state  = {
  showLoader: true,
  products:[],
  product:{},
  isCreate:true
}

const namespaced = true;

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
