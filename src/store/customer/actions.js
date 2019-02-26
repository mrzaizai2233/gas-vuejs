import axios from 'axios'

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
import {
  API_BASE
} from '../../config'

export default {
  getAllCustomer: function ({
    commit
  }) {
    commit(ALL_CUSTOMERS)
    axios.get(`${API_BASE}/customer`, {
      crossdomain: true
    }).then(response => {
      commit(ALL_CUSTOMERS_SUCCESS, response.data)
    })
  },
  changeStatusCustomer: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/customer/change-status`, {
      _id: payload
    }).then(respone => {
      commit(CHANGE_STATUS_CUSTOMER, respone.data)
    })
  },
  selectCustomer: function ({
    commit
  }, payload) {
    commit(SELECT_CUSTOMER, Object.assign({}, payload))
  },
  removeCustomer: function ({
    commit
  }) {
    commit(REMOVE_CUSTOMER)
  },
  addCustomer: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/customer/create`,
      payload
    ).then(respone => {
      commit(ADD_CUSTOMER_SUCCESS, respone.data)
      commit(REMOVE_CUSTOMER)
    })
  },
  updateCustomer: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/customer/update`, payload).then(respone => {
      commit(UPDATE_CUSTOMER_SUCCESS, respone.data)
      commit(REMOVE_CUSTOMER)

    })
  },
  deleteCustomer: function ({
    commit
  }, payload) {
    axios.get(`${API_BASE}/customer/delete/${payload}`).then(respone => {
      commit(DELETE_CUSTOMER_SUCCESS, respone.data)
    })
  }
}
