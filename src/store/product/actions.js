import axios from 'axios'

import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  CHANGE_STATUS_PRODUCT,
  SELECT_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS
} from './mutation-types'
import {API_BASE} from '../../config'

export default   {
  getAllProduct:function({commit}){
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/products`).then(response=>{
      commit(ALL_PRODUCTS_SUCCESS,response.data)
    })
  },
  changeStatusProduct:function({commit},payload){
    axios.post(`${API_BASE}/product/change_status`,{
      _id:payload
    }).then(respone=>{
      commit(CHANGE_STATUS_PRODUCT,respone.data)
    })
  },
  selectProduct:function({commit},payload){
    commit(SELECT_PRODUCT, Object.assign({},payload))
  },
  removeProduct:function({commit}){
    commit(REMOVE_PRODUCT)
  },
  addProduct:function({commit},payload){
    axios.post(`${API_BASE}/product/create`,
      payload
    ).then(respone=>{
      commit(ADD_PRODUCT_SUCCESS,respone.data)
      commit(REMOVE_PRODUCT)
    })
  },
  updateProduct:function({commit},payload){
    axios.post(`${API_BASE}/product/update`,payload).then(respone=>{
      commit(UPDATE_PRODUCT_SUCCESS,respone.data)
      commit(REMOVE_PRODUCT)

    })
  },
  deleteProduct:function({commit},payload){
    axios.get(`${API_BASE}/product/delete/${payload}`).then(respone=>{
      commit(DELETE_PRODUCT_SUCCESS,respone.data)
    })
  }
}


