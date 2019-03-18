import axios from "axios";

import {
  ALL_QUOTES,
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
  UPDATE_QUOTE_TOTAL,
  SELECT_CUSTOMER,
  INCREATE_QTY_ITEM,
  DECREATE_QUOTE_ITEM,
  DISCOUNT,
  UPDATE_QTY_ITEM
} from "./mutation-types";
import {
  API_BASE
} from "../../config";
import {
  EventBus
} from "../../helper/event";

export default {
  getAllQuote: function ({
    commit
  }) {
    commit(ALL_QUOTES);
    axios.get(`${API_BASE}/quotes`).then(response => {
      commit(ALL_QUOTES_SUCCESS, response.data);
    });
  },
  changeStatusQuote: function ({
    commit
  }, payload) {
    axios
      .post(`${API_BASE}/quote/change-status`, {
        id: payload
      })
      .then(respone => {
        commit(CHANGE_STATUS_QUOTE, respone.data);
      });
  },
  selectQuote: function ({
    commit,
    dispatch
  }, payload) {
    dispatch("removeQuote");
    let quote = {};
    quote = Object.assign({}, payload);
    let items = [];
    quote.items.forEach((item, index, arr) => {
      let i = item;
      i.product = arr[index].product ? arr[index].product.id : "";
      i.total = i.qty * i.price;
      items.push(i);
    });
    quote.items = items;
    quote.customer = payload.customer.id;

    commit(SELECT_QUOTE, quote);
    commit(SELECT_CUSTOMER, payload.customer);
  },
  removeQuote: function ({
    commit
  }) {
    commit(REMOVE_QUOTE);
  },
  addQuote: function ({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_BASE}/quotes`, payload).then(respone => {
        commit(ADD_QUOTE_SUCCESS, respone.data);
        commit(REMOVE_QUOTE);
        EventBus.$emit("quote-add-success");
        resolve();
      });
    });
  },
  updateQuote: function ({
    commit
  }, payload) {
    axios.post(`${API_BASE}/quote/update`, payload).then(respone => {
      commit(UPDATE_QUOTE_SUCCESS, respone.data);
      commit(REMOVE_QUOTE);
    });
  },
  deleteQuote: function ({
    commit
  }, payload) {
    axios.get(`${API_BASE}/quote/delete/${payload}`).then(respone => {
      commit(DELETE_QUOTE_SUCCESS, respone.data);
    });
  },
  addQuoteItem: function ({
    commit,
    state
  }, payload) {
    let item = null;
    item = state.quote.items.find(item => item.product === payload.id);
    if (item === undefined) {
      item = {
        product: payload.id,
        qty: 1,
        price: payload.price,
        discount_percent: 0,
        discount_fixed: 0,
        total: 1 * payload.price
      };
      commit(ADD_QUOTE_ITEM, item);
    } else {
      commit(INCREATE_QTY_ITEM, item.product);
    }
  },
  changeItem: function ({
    commit
  }, payload) {
    commit(CHANGE_ITEM, payload);
    commit(UPDATE_QUOTE_TOTAL, payload);
  },

  decreaseQty: function ({
    commit,
    state
  }, payload) {
    if (payload.qty > 1) payload.qty--;
    payload.total = payload.qty * payload.price;
    commit(UPDATE_QUOTE_TOTAL, payload);
  },

  increaseQty: function ({
    commit
  }, payload) {
    payload.qty++;
    payload.total = payload.qty * payload.price;
    // commit(UPDATE_QUOTE_TOTAL, payload)
  },
  removeItem: function ({
    commit
  }, payload) {
    commit(REMOVE_ITEM, payload);
  },
  selectCustomer: function ({
    commit
  }, payload) {
    commit(SELECT_CUSTOMER, payload);
  },
  discount: function ({
    commit,
    state
  }, payload) {
    console.log(payload)
    const item = state.quote.items.find(
      item => item.product == payload.product
    );
    console.log(item)
    let discount_fixed = 0;
    let discount_percent = 0;
    if (payload.discountType == "percent") {
      if (payload.discount <= 100) {
        discount_fixed = parseFloat(
          (item.price * item.qty * payload.discount) / 100
        );
        discount_percent = payload.discount ? payload.discount : 0;
      }
    } else if (payload.discountType == "fixed") {
      if (payload.discount <= item.price * item.qty) {
        discount_percent = parseFloat(
          (payload.discount * 100) / (item.price * item.qty)
        );
        discount_fixed = payload.discount ? payload.discount : 0;
      }
    }
    commit(DISCOUNT, {
      index: item.product,
      discount_fixed: discount_fixed,
      discount_percent: discount_percent
    });
    // commit(UPDATE_QUOTE_TOTAL)
  },
  updateQtyItem: function ({
    commit,
    state,
    dispatch
  }, {
    index,
    type = "increate",
    qty
  }) {
    let newQty = 0;
    let item = state.quote.items[index];
    let oldQty = item.qty;
    if (qty && qty > 0) {
      newQty = qty;
    } else if (type == "decreate") {
      newQty = oldQty > 1 ? --oldQty : oldQty;
    } else {
      newQty = ++oldQty;
    }
    commit(UPDATE_QTY_ITEM, {
      index: index,
      qty: newQty
    });
    dispatch("discount", {
      index: index,
      discountType: "percent",
      discount: item.discount_percent
    });
  }
};
