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

export default {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false
    state.products = payload
  },
  [CHANGE_STATUS_PRODUCT](state, payload) {
    const product = state.products.find(product => product._id === payload)
    product.status = !product.status
  },
  [SELECT_PRODUCT](state, payload) {
    state.product = payload
    state.isCreate = false
  },
  [REMOVE_PRODUCT](state, payload) {
    state.product = {};
    state.isCreate = true
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    state.products.push(payload)
  },
  [UPDATE_PRODUCT_SUCCESS](state, payload) {
    const product = state.products.find(product => product._id === payload._id)
    product.name = payload.name
    product.code = payload.code
    product.input_price = payload.input_price
    product.price = payload.price
    product.unit = payload.unit
    product.category = payload.category
    state.isCreate = true
  },
  [DELETE_PRODUCT_SUCCESS](state, payload) {
    state.products.find((product, index) => {
      if (product._id === payload) {
        state.products.splice(index, 1)
      }
    })
  }
}
