import {
  ALL_CATEGORYS,
  ALL_CATEGORYS_SUCCESS
  ,CHANGE_STATUS_CATEGORY
  ,SELECT_CATEGORY
  ,REMOVE_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS
} from './mutation-types'

export default {
  [ALL_CATEGORYS](state){
    state.showLoader = true;
  },
  [ALL_CATEGORYS_SUCCESS](state,payload){
    state.showLoader = false
    state.categorys = payload
  },
  [CHANGE_STATUS_CATEGORY](state,payload){
    const category = state.categorys.find(category => category._id === payload)
    category.status = !category.status
  },
  [SELECT_CATEGORY](state,payload){
    state.category = payload
    state.isCreate= false
  },
  [REMOVE_CATEGORY](state,payload){
    state.category = {name:'',status:false};
    state.isCreate = true
  },
  [ADD_CATEGORY_SUCCESS](state,payload){
    state.categorys.push(payload)
  },
  [UPDATE_CATEGORY_SUCCESS](state,payload){
    const category = state.categorys.find(category =>category._id === payload._id)
    category.name = payload.name
    category.status = payload.status
    state.isCreate = true
  },
  [DELETE_CATEGORY_SUCCESS](state,payload){
    state.categorys.find((category,index) =>{
      if(category._id===payload){
        state.categorys.splice(index,1)
      }
    })
  }
}
