import axios from 'axios'

import {
  ALL_USERS,
  ALL_USERS_SUCCESS,
  CHANGE_STATUS_USER,
  SELECT_USER,
  REMOVE_USER,
  ADD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from './mutation-types'
import {API_BASE} from '../../config'

export default   {
  getAllUser:function({commit}){
    commit(ALL_USERS)
    axios.get(`${API_BASE}/users`).then(response=>{
      commit(ALL_USERS_SUCCESS,response.data)
    })
  },
  changeStatusUser:function({commit},payload){
    axios.post(`${API_BASE}/user/change_status`,{
      _id:payload
    }).then(respone=>{
      commit(CHANGE_STATUS_USER,respone.data)
    })
  },
  selectUser:function({commit},payload){
    commit(SELECT_USER, Object.assign({},payload))
  },
  removeUser:function({commit}){
    commit(REMOVE_USER)
  },
  addUser:function({commit},payload){
    axios.post(`${API_BASE}/user/create`,
      payload
    ).then(respone=>{
      commit(ADD_USER_SUCCESS,respone.data)
      commit(REMOVE_USER)
    })
  },
  updateUser:function({commit},payload){
    axios.post(`${API_BASE}/user/update`,payload).then(respone=>{
      commit(UPDATE_USER_SUCCESS,respone.data)
      commit(REMOVE_USER)

    })
  },
  deleteUser:function({commit},payload){
    axios.get(`${API_BASE}/user/delete/${payload}`).then(respone=>{
      commit(DELETE_USER_SUCCESS,respone.data)
    })
  }
}


