import {
  ALL_QUOTES,
  ADD_QUOTE,
  ALL_QUOTES_SUCCESS,
  CHANGE_STATUS_QUOTE,
  SELECT_QUOTE,
  REMOVE_QUOTE,
  ADD_QUOTE_SUCCESS,
  UPDATE_QUOTE_SUCCESS,
  DELETE_QUOTE_SUCCESS,
  ADD_QUOTE_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  UPDATE_QTY_ITEM,
  UPDATE_QUOTE_TOTAL,
  SELECT_CUSTOMER,
  INCREATE_QTY_ITEM,
  DISCOUNT
} from "./mutation-types";

export default {
  [ALL_QUOTES](state) {
    state.showLoader = true;
  },
  [ALL_QUOTES_SUCCESS](state, payload) {
    state.showLoader = false;
    state.quotes = payload;
  },
  [CHANGE_STATUS_QUOTE](state, payload) {
    const quote = state.quotes.find(quote => quote._id === payload);
    quote.status = !quote.status;
  },
  [SELECT_QUOTE](state, payload) {
    state.quote = payload;
    state.isCreate = false;
  },
  [REMOVE_QUOTE](state, payload) {
    state.quote = {
      items: []
    };
    state.customer = {};
    state.isCreate = true;
  },
  [ADD_QUOTE](state, payload) {
    state.quotes.push(payload);
  },
  [ADD_QUOTE_SUCCESS](state, payload) {
    state.quotes.push(payload);
  },
  [UPDATE_QUOTE_SUCCESS](state, payload) {
    const quote = state.quotes.find(quote => quote._id === payload._id);
    quote.name = payload.name;
    quote.status = payload.status;
    state.isCreate = true;
  },
  [DELETE_QUOTE_SUCCESS](state, payload) {
    let quotes = state.quotes.filter(quote => quote._id !== payload);
    state.quotes = quotes;
  },
  [ADD_QUOTE_ITEM](state, payload) {
    state.quote.items.push(payload);
  },
  [CHANGE_ITEM](state, payload) {
    let item = state.quote.items[payload.index];
    item = payload.item;
  },
  [REMOVE_ITEM](state, payload) {
    state.quote.items.splice(payload, 1);
  },

  [UPDATE_QUOTE_TOTAL](state, payload) {
    let total = state.quote.items.reduce(
      (pv, cv) => (pv += cv.qty * cv.total),
      0
    );
    state.quote.grand_total = total;
    state.quote.subtotal = total;
  },

  [SELECT_CUSTOMER](state, payload) {
    state.customer = payload;
    state.quote.customer = payload._id;
  },

  [INCREATE_QTY_ITEM](state, payload) {
    let item = state.quote.items.find(item => item.product === payload);
    item.qty++;
    item.total = item.qty * item.price;
  },
  [DISCOUNT](state, {
    index,
    discount_fixed,
    discount_percent
  }) {
    const item = state.quote.items.find(item => item.product == index);
    item.discount_fixed = discount_fixed;
    item.discount_percent = discount_percent;
    item.total =
      parseFloat(item.price * item.qty) - parseFloat(item.discount_fixed);
  },
  [UPDATE_QTY_ITEM](state, {
    index,
    qty
  }) {
    let item = state.quote.items[index];
    item.qty = qty;
    item.total = item.qty * item.price;
  }
};
