import {
  ALL_ORDERS,
  ADD_ORDER,
  ALL_ORDERS_SUCCESS,
  CHANGE_STATUS_ORDER,
  SELECT_ORDER,
  REMOVE_ORDER,
  ADD_ORDER_SUCCESS,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
  ADD_ORDER_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  UPDATE_QTY_ITEM,
  UPDATE_ORDER_TOTAL,
  SELECT_USER,
  INCREATE_QTY_ITEM,
  DISCOUNT
} from './mutation-types'

export default {
  [ALL_ORDERS](state) {
    state.showLoader = true;
  },
  [ALL_ORDERS_SUCCESS](state, payload) {
    state.showLoader = false
    state.orders = payload
  },
  [CHANGE_STATUS_ORDER](state, payload) {
    const order = state.orders.find(order => order._id === payload)
    order.status = !order.status
  },
  [SELECT_ORDER](state, payload) {

    state.order = payload
    state.isCreate = false
  },
  [REMOVE_ORDER](state, payload) {
    state.order = {
      items: []
    };
    state.user = {};
    state.isCreate = true
  },
  [ADD_ORDER](state, payload) {
    state.orders.push(payload)
  },
  [ADD_ORDER_SUCCESS](state, payload) {
    state.orders.push(payload)
  },
  [UPDATE_ORDER_SUCCESS](state, payload) {
    const order = state.orders.find(order => order._id === payload._id)
    order.name = payload.name
    order.status = payload.status
    state.isCreate = true
  },
  [DELETE_ORDER_SUCCESS](state, payload) {
    let orders = state.orders.filter(order => order._id !== payload)
    state.orders = orders
  },
  [ADD_ORDER_ITEM](state, payload) {
    state.order.items.push(payload)
  },
  [CHANGE_ITEM](state, payload) {
    let item = state.order.items[payload.index]
    item = payload.item
  },
  [REMOVE_ITEM](state, payload) {
    state.order.items.splice(payload, 1)
  },

  [UPDATE_ORDER_TOTAL](state, payload) {
    let total = state.order.items.reduce((pv, cv) => pv += cv.qty * cv.total, 0);
    state.order.grand_total = total;
    state.order.subtotal = total;
  },

  [SELECT_USER](state, payload) {
    state.user = payload;
    state.order.user = payload._id;
  },

  [INCREATE_QTY_ITEM](state, payload) {

    let item = state.order.items.find(item => item.product === payload)
    item.qty++;
    item.total = item.qty * item.price
  },
  [DISCOUNT](state, {
    index,
    item
  }) {
    // state.order.grand_total = 1;
    // state.order.subtotal = 1;
  }

}
