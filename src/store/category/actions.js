import axios from 'axios'

import {
  ALL_CATEGORYS,
  ALL_CATEGORYS_SUCCESS,
  CHANGE_STATUS_CATEGORY,
  SELECT_CATEGORY,
  REMOVE_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS
} from './mutation-types'
import {
  API_BASE
} from '../../config'

export default {
  getAllCategory: function ({
    commit
  }) {
    commit(ALL_CATEGORYS)
    axios.get(`${API_BASE}/categories`).then(response => {
      commit(ALL_CATEGORYS_SUCCESS, response.data)
    })
  },
  changeStatusCategory: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/category/change-status`, {
      _id: payload
    }).then(respone => {
      commit(CHANGE_STATUS_CATEGORY, respone.data)
    })
  },
  selectCategory: function ({
    commit
  }, payload) {
    commit(SELECT_CATEGORY, {
      ...payload
    })
  },
  removeCategory: function ({
    commit
  }) {
    commit(REMOVE_CATEGORY)
  },
  addCategory: function ({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_BASE}/categories`, payload).then(respone => {
        commit(ADD_CATEGORY_SUCCESS, respone.data)
        commit(REMOVE_CATEGORY)
        resolve()
      })
    })
  },
  updateCategory: function ({
    commit
  }, payload) {

    axios.post(`${API_BASE}/category/update`, payload).then(respone => {
      commit(UPDATE_CATEGORY_SUCCESS, respone.data)
      commit(REMOVE_CATEGORY)

    })
  },
  deleteCategory: function ({
    commit
  }, payload) {
    axios.get(`${API_BASE}/category/delete/${payload}`).then(respone => {
      commit(DELETE_CATEGORY_SUCCESS, respone.data)
    })
  }
}
