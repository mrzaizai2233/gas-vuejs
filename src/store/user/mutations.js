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

export default {
  [ALL_USERS](state){
    state.showLoader = true;
  },
  [ALL_USERS_SUCCESS](state,payload){
    state.showLoader = false
    state.users = payload
  },
  [CHANGE_STATUS_USER](state,payload){
    const user = state.users.find(user => user._id === payload)
    user.status = !user.status
  },
  [SELECT_USER](state,payload){
    state.user = payload
    state.isCreate= false
  },
  [REMOVE_USER](state,payload){
    state.user = {};
    state.isCreate = true
  },
  [ADD_USER_SUCCESS](state,payload){
    state.users.push(payload)
  },
  [UPDATE_USER_SUCCESS](state,payload){
    const user = state.users.find(user =>user._id === payload._id)
    user.name = payload.name
    user.code = payload.code
    user.input_price = payload.input_price
    user.price = payload.price
    user.unit = payload.unit
    user.category = payload.category
    state.isCreate = true
  },
  [DELETE_USER_SUCCESS](state,payload){
    state.users.find((user,index) =>{
      if(user._id===payload){
        state.users.splice(index,1)
      }
    })
  }
}
