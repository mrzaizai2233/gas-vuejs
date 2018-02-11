import axios from 'axios'

import {
  ALL_ORDERS,
  ALL_ORDERS_SUCCESS
  ,CHANGE_STATUS_ORDER
  ,SELECT_ORDER
  ,REMOVE_ORDER,
  ADD_ORDER_SUCCESS,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
  ADD_ORDER_ITEM
} from './mutation-types'
import {API_BASE} from '../../config'

export default   {
  getAllOrder:function({commit}){
    commit(ALL_ORDERS)
    axios.get(`${API_BASE}/orders`).then(response=>{
      commit(ALL_ORDERS_SUCCESS,response.data)
    })
  },
  changeStatusOrder:function({commit},payload){
    axios.post(`${API_BASE}/order/change_Status`,{
      _id:payload
    }).then(respone=>{
      commit(CHANGE_STATUS_ORDER,respone.data)
    })
  },
  selectOrder:function({commit},payload){
    commit(SELECT_ORDER,{...payload})
  },
  removeOrder:function({commit}){
    commit(REMOVE_ORDER)
  },
  addOrder:function({commit},payload){
    return new Promise((resolve,reject)=>{
      axios.post(`${API_BASE}/order/create`,
        payload
      ).then(respone=>{
        commit(ADD_ORDER_SUCCESS,respone.data)
        commit(REMOVE_ORDER)
        resolve()
      })
    })
  },
  updateOrder:function({commit},payload){

    axios.post(`${API_BASE}/order/update`,payload).then(respone=>{
      commit(UPDATE_ORDER_SUCCESS,respone.data)
      commit(REMOVE_ORDER)

    })
  },
  deleteOrder:function({commit},payload){
    axios.get(`${API_BASE}/order/delete/${payload}`).then(respone=>{
      commit(DELETE_ORDER_SUCCESS,respone.data)
    })
  },
  addOrderItem:function({commit},payload){
    commit(ADD_ORDER_ITEM,payload)
  }
}


