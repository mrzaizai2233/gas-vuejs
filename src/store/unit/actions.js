import axios from 'axios'

import {
  ALL_UNITS,
  ALL_UNITS_SUCCESS,
  CHANGE_STATUS_UNIT,
  SELECT_UNIT,
  REMOVE_UNIT,
  ADD_UNIT_SUCCESS,
  UPDATE_UNIT_SUCCESS,
  DELETE_UNIT_SUCCESS
} from './mutation-types'
import {
  API_BASE
} from '../../config'

export default {
  getAllUnit: function ({
    commit
  }) {
    commit(ALL_UNITS)
    axios.get(`${API_BASE}/units`).then(response => {
      commit(ALL_UNITS_SUCCESS, response.data)
    })
  },
  changeStatusUnit: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/unit/change-status`, {
      _id: payload
    }).then(respone => {
      commit(CHANGE_STATUS_UNIT, respone.data)
    })
  },
  selectUnit: function ({
    commit
  }, payload) {
    commit(SELECT_UNIT, {
      ...payload
    })
  },
  removeUnit: function ({
    commit
  }) {
    commit(REMOVE_UNIT)
  },
  addUnit: function ({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_BASE}/units`, payload).then(respone => {
        commit(ADD_UNIT_SUCCESS, respone.data)
        commit(REMOVE_UNIT)
        resolve()
      })
    })
  },
  updateUnit: function ({
    commit
  }, payload) {

    axios.post(`${API_BASE}/unit/update`, payload).then(respone => {
      commit(UPDATE_UNIT_SUCCESS, respone.data)
      commit(REMOVE_UNIT)

    })
  },
  deleteUnit: function ({
    commit
  }, payload) {
    axios.get(`${API_BASE}/unit/delete/${payload}`).then(respone => {
      commit(DELETE_UNIT_SUCCESS, respone.data)
    })
  }
}
