<template>
  <div class="col-footer">
    <div class="col-footer_left">
      <div class="col-footer_item col-footer_remove">
        <button class="flat-btn btn-danger">
          <i class="fa fa-trash-o fa-2x"></i>
        </button>
      </div>
    </div>
    <div class="col-footer_right">
      <div class="right-wrap">
        <div class="col-footer_total col-footer_item">
          <span class="price">{{total | toVND}}</span>
        </div>
        <div class="col-footer_add col-footer_item">
          <button class="btn-success flat-btn" @click="submit()">
            <i class="fa fa-plus fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "QuoteFooter",
  data() {
    return {
      customerSelected: {}
    };
  },
  methods: {
    ...mapActions("quote", [
      "changeItem",
      "removeItem",
      "addQuote",
      "updateQuote"
    ]),
    ...mapActions("customer", ["getAllCustomer"]),
    submit: function() {
      if (this.isCreate) {
        this.addQuote(this.quote);
      } else {
        this.updateQuote(this.quote);
      }
    }
  },
  computed: {
    ...mapGetters("quote", ["items", "quote", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("customer", ["customers"]),
    ...mapState("quote", ["isCreate"]),
    hasItems: function() {
      if (this.items.length > 0) return 1;
      else return 0;
    }
  },
  watch: {},
  filters: {
    toVND(value) {
      return `${value.toLocaleString()} VNĐ`;
    }
  },
  created() {}
};
</script>
<style scoped>
.right-wrap {
  width: 100%;
  display: flex;
}
.col-footer_right {
  flex: 1;
}
/* footer */
.col-footer {
  display: flex;
}

@media only screen and (max-width: 959px) {
  .col-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
  }
  .col-footer {
    flex: 1;
  }
}
.flat-btn {
  width: 100%;
  bquote-radius: 0;
  bquote: none;
  padding: 10px;
  outline: none;
}

.col-footer {
  display: flex;
  background: #f4516c;
}
.col-footer .right-wrap {
  transform: translateX(10px);
}
.col-footer .col-footer_right {
  overflow: hidden;
}
.col-footer .col-footer_right .col-footer_item {
  transform: skewX(-20deg);
}

.col-footer .col-footer_total {
  flex: 2;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff9900 !important;
  color: white;
}

.col-footer .col-footer_total .price {
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.col-footer .col-footer_add {
  flex: 1;
}

.col-footer .col-footer_add button {
  background: #181b46;
  -webkit-transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  will-change: background;
}
.col-footer .col-footer_add button:hover {
  background: #461818;
}
.col-footer .col-footer_remove {
  flex: 1;
  background: white;
  color: black;
}
</style>
