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
    REMOVE_ITEM
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
        state.order = {};
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
        state.orders.find((order, index) => {
            if (order._id === payload) {
                state.orders.splice(index, 1)
            }
        })
    },
    [ADD_ORDER_ITEM](state, payload) {
        state.order.items.push(payload)
        let total = state.order.items.reduce((pv,cv)=>{
            return pv + cv.total
        },0)
        state.order.grand_total = total;
        state.order.subtotal = total;
       
    },
    [CHANGE_ITEM](state, payload) {
        let item = state.order.items[payload.index]
        item = payload.item
    },
    [REMOVE_ITEM](state,payload){
        state.order.items.splice(payload,1)
    }
}
