export default {
    orders: function(state, getters) {
        return state.orders
    },
    order(state) {
        return state.order
    },
    isCreate(state) {
        return state.isCreate
    },
    items(state) {
        return state.order.items
    },
    total(state) {
        return state.order.items.reduce((total, item) =>
            total += item.total, 0)
    }
}
