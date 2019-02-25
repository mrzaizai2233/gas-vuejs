import {
  ALL_CUSTOMERS,
  ALL_CUSTOMERS_SUCCESS,
  CHANGE_STATUS_CUSTOMER,
  SELECT_CUSTOMER,
  REMOVE_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_SUCCESS
} from './mutation-types'

export default {
  [ALL_CUSTOMERS](state){
    state.showLoader = true;
  },
  [ALL_CUSTOMERS_SUCCESS](state,payload){
    state.showLoader = false
    state.customers = payload
  },
  [CHANGE_STATUS_CUSTOMER](state,payload){
    const customer = state.customers.find(customer => customer._id === payload)
    customer.status = !customer.status
  },
  [SELECT_CUSTOMER](state,payload){
    state.customer = payload
    state.isCreate= false
  },
  [REMOVE_CUSTOMER](state,payload){
    state.customer = {};
    state.isCreate = true
  },
  [ADD_CUSTOMER_SUCCESS](state,payload){
    state.customers.push(payload)
  },
  [UPDATE_CUSTOMER_SUCCESS](state,payload){
    const customer = state.customers.find(customer =>customer._id === payload._id)
    customer.name = payload.name
    customer.code = payload.code
    customer.input_price = payload.input_price
    customer.price = payload.price
    customer.unit = payload.unit
    customer.category = payload.category
    state.isCreate = true
  },
  [DELETE_CUSTOMER_SUCCESS](state,payload){
    state.customers.find((customer,index) =>{
      if(customer._id===payload){
        state.customers.splice(index,1)
      }
    })
  }
}
