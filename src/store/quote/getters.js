export default {
  quotes: function (state, getters) {
    return state.quotes;
  },
  quote(state) {
    return state.quote;
  },
  isCreate(state) {
    return state.isCreate;
  },
  items(state) {
    return state.quote.items;
  },
  total(state) {
    return state.quote.items.reduce((total, item) => (total += item.total), 0);
  }
};
