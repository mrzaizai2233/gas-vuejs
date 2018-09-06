import actions from  './actions'
import getters from './getters'
import mutations from './mutations'

const state  = {
  showLoader: true,
  orders:[],
  order:{
    user:'',
    items:[],
    create_at:'',
    grand_total:0,
    subtotal:0,
    status:0,
  },
  user:'',
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
