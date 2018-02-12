export default {
<<<<<<< HEAD
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
=======
  orders:function(state,getters){
    return state.orders
  },
  order(state){
    return state.order
  },
  isCreate(state){
    return state.isCreate
  },
  items(state){
    return state.order.items
  }
}
>>>>>>> 058901d075e6022cfb6c6c35779dd8db4968d06b
