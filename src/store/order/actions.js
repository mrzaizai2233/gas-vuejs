import axios from 'axios'

import {
    ALL_ORDERS,
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
    UPDATE_ORDER_TOTAL,
    SELECT_USER,
    INCREATE_QTY_ITEM,
    DECREATE_ORDER_ITEM
} from './mutation-types'
import { API_BASE } from '../../config'
import { EventBus } from '../../helper/event'


export default {
    getAllOrder: function({ commit }) {
        commit(ALL_ORDERS)
        axios.get(`${API_BASE}/orders`).then(response => {
            commit(ALL_ORDERS_SUCCESS, response.data)
        })
    },
    changeStatusOrder: function({ commit }, payload) {
        axios.post(`${API_BASE}/order/change_Status`, {
            _id: payload
        }).then(respone => {
            commit(CHANGE_STATUS_ORDER, respone.data)
        })
    },
    selectOrder: function({ commit, dispatch  }, payload) {
        dispatch('removeOrder')
        let order= {}
        order = Object.assign({},payload);
        let items = [];
        order.items.forEach((item,index,arr) => {
          let i = item;
          i.product = arr[index].product?arr[index].product._id:''
          i.total = i.qty * i.price;
          items.push(i)
        });
        order.items = items;
        order.user = payload.user._id;
     
        commit(SELECT_ORDER, order)
        commit(SELECT_USER, payload.user)
    },
    removeOrder: function({ commit }) {
        commit(REMOVE_ORDER)
    },
    addOrder: function({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.post(`${API_BASE}/order/create`,
                payload
            ).then(respone => {

                commit(ADD_ORDER_SUCCESS, respone.data)
                commit(REMOVE_ORDER)
                EventBus.$emit('order-add-success')
                resolve()
            })
        })
    },
    updateOrder: function({ commit }, payload) {

        axios.post(`${API_BASE}/order/update`, payload).then(respone => {
            commit(UPDATE_ORDER_SUCCESS, respone.data)
            commit(REMOVE_ORDER)

        })
    },
    deleteOrder: function({ commit }, payload) {
        axios.get(`${API_BASE}/order/delete/${payload}`).then(respone => {
            commit(DELETE_ORDER_SUCCESS, respone.data)
        })
    },
    addOrderItem: function({ commit, state }, payload) {
        let item = null;
        item = state.order.items.find(item => item.product === payload._id);
        if (item === undefined) {
            item = {
                product: payload._id,
                qty: 1,
                price: payload.price,
                discount_percent: 0,
                discount_fixed: 0,
                total: 1 * payload.price
            }
            commit(ADD_ORDER_ITEM, item)

        } else {
            commit(INCREATE_QTY_ITEM, item.product)
        }

    },
    changeItem: function({ commit }, payload) {
        commit(CHANGE_ITEM, payload)
        commit(UPDATE_ORDER_TOTAL, payload)
    },

    decreaseQty: function({ commit, state }, payload) {
        if (payload.qty > 1)
            payload.qty--;
        payload.total = payload.qty * payload.price;
        commit(UPDATE_ORDER_TOTAL, payload)
    },

    increaseQty: function({ commit }, payload) {
        payload.qty++;
        payload.total = payload.qty * payload.price;
        commit(UPDATE_ORDER_TOTAL, payload)
    },
    removeItem: function({ commit }, payload) {
        commit(REMOVE_ITEM, payload)
    },
    selectUser: function({ commit }, payload) {
        commit(SELECT_USER, payload)
    },
}