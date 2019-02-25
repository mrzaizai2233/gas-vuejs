<template>
  <div class="cart-item theme--light v-table">
    <div class="cart-item_part head-item">
      <div class="head-item_item head-item_left">
        <span class="name-product">
          {{productName(item.product)}}
          <input type="hidden" v-model="item.product" name="product">
        </span>
      </div>
      <div class="head-item_item head-item_right">
        <div class="group-text-discount" v-show="!isEditDiscount" @click="focusDiscount">
          <span class="right-title">CK:</span>
          <span class="right-value">{{item.discount_fixed}}({{item.discount_percent}}%)</span>
        </div>
        <div class="group-input-discount input-group slide-fade" v-show="isEditDiscount">
          <button
            class="btn btn-info flat-btn btn-discount-done main-color"
            @click="toggleEditDiscount"
          >
            <i class="fa fa-check"></i>
          </button>
          <input
            type="text"
            class="form-control input-discount"
            ref="discountInput"
            v-model="discount"
          >
          <button
            class="btn btn-danger flat-btn btn-toggle-discount-type main-color"
            @click="toggleDiscountType"
          >
            <i
              :class="{'fa':true,'fa-usd':discountType=='fixed','fa-percent':discountType=='percent'}"
            ></i>
          </button>
        </div>
      </div>
      <div class="actions">
        <button class="btn btn-danger flat-btn" @click="removeItem(item)">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
    <div class="cart-item_part body-item">
      <div class="body-item_item body-item_qty">
        <div class="actions">
          <button
            class="square-btn minus-btn"
            @click="updateQtyItem({index:index,type:'decreate'})"
          >
            <i class="fa fa-caret-left"></i>
          </button>
          <input type="text" class="order-qty" v-model="item.qty" name="qty">
          <button class="square-btn plus-btn" @click="updateQtyItem({index:index})">
            <i class="fa fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div class="body-item_item body-item_price">
        <span>
          <i class="fa fa-dollar"></i>
          {{item.price | toUSD }}
        </span>
        <input
          type="hidden"
          class
          placeholder="Đơn giá"
          v-model="item.price"
          name="price"
          :readonly="true"
        >
      </div>
      <div class="body-item_item body-item_total">
        <span>Tổng: {{item.total | toUSD }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderItem",
  data() {
    return {
      isEditDiscount: false,
      discountType: "percent",
      discount: 0
    };
  },
  props: {
    item: {
      type: [String, Array, Object],
      required: true
    },
    index: {
      tyep: [Number],
      required: true
    }
  },
  methods: {
    ...mapActions("order", ["updateQtyItem", "removeItem"]),
    ...mapActions({
      discountAction: "order/discount"
    }),
    ...mapActions("user", ["getAllUser"]),
    ...mapActions("product", ["getAllProduct"]),
    updateItemQty: function($type = "increate") {
      this.item.qty++;
      console.log(this.order.items);
    },
    submit: function() {
      console.log(this.order);
    },
    focusDiscount: function() {
      this.isEditDiscount = true;
      this.$nextTick(function() {
        this.$refs.discountInput.focus();
      });
    },
    discount1: function($event, index, element) {
      let item = this.items[index];
      if (element === "qty") {
        item.discount_percent = 0;
        item.discount_fixed = 0;
      }
      item.total = item.qty ? parseInt(item.qty) * parseFloat(item.price) : 0;
      if (element === "fixed") {
        if (item.discount_fixed <= item.price) {
          item.discount_percent = parseFloat(
            (item.discount_fixed * 100) / item.total
          );
          item.discount_fixed = item.discount_fixed ? item.discount_fixed : 0;
        }
      }
      if (element === "percent") {
        if (item.discount_percent <= 100) {
          item.discount_fixed = parseFloat(
            (item.total * item.discount_percent) / 100
          );
          item.discount_percent = item.discount_percent
            ? item.discount_percent
            : 0;
        }
      }
      if (item.discount_percent <= 100 && item.discount_fixed <= item.price) {
        item.total = item.total - item.discount_fixed;
      }
    },
    toggleDiscountType: function() {
      this.discountType = this.discountType == "percent" ? "fixed" : "percent";
      if (this.discountType == "percent") {
        this.discount = this.item.discount_percent;
      } else {
        this.discount = this.item.discount_fixed;
      }
    },
    toggleEditDiscount: function() {
      this.isEditDiscount = false;
    },
    productName: function(product_id) {
      let product = this.products.find(product => product._id === product_id);
      return product ? product.name : "";
    },
    getUser: function(item) {
      this.userSelected = item;
      this.order.user = item._id;
    }
  },
  computed: {
    ...mapGetters("order", ["items", "order", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("user", ["users"]),
    hasItems: function() {
      if (this.items.length > 0) return 1;
      else return 0;
    },
    discountPercent: function() {
      return this.item.discount_percent;
    },
    discountFixed: function() {
      return this.item.discount_fixed;
    },
    qty: function() {
      return this.item.qty;
    }
  },
  watch: {
    discount: function(val) {
      this.discountAction({
        discountType: this.discountType,
        discount: this.discount,
        index: this.item.product
      });
    }
  },
  components: {},
  filters: {
    toUSD(value) {
      return `${value.toLocaleString()}`;
    }
  },
  created() {
    if (this.products.length <= 0) {
      this.getAllProduct();
    }
  }
};
</script>
<style scoped>
.cart-item {
  background-color: #fff;
  margin-bottom: 2px;
  -webkit-transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  will-change: background;
  transition: max-height 0.25s ease-in-out;
}
.cart-item:active {
  background: #f5f5f5;
}
.cart-item:hover {
  background: #eee;
}

.cart-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.cart-item:first-child {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.cart-item .head-item {
  display: flex;
}

.cart-item .head-item .head-item_item {
  flex: 1;
  display: flex;
  padding: 10px;
}

.cart-item .head-item .head-item_left .name-product {
  font-weight: bold;
  font-size: 18px;
}

.cart-item .head-item .head-item_right {
  justify-content: flex-end;
  font-weight: bold;
}
/* body-item */

.cart-item .body-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-item .body-item .body-item_price,
.cart-item .body-item .body-item_total {
  font-weight: bold;
}

.cart-item .body-item .body-item_item .actions {
  display: flex;
}

.cart-item .body-item .body-item_item .actions .order-qty {
  width: 30px;
  border: none;
  text-align: center;
}

.cart-item .body-item .body-item_item .actions .square-btn {
  background: none;
  border: 1px solid;
  border-radius: 20px;
  outline: none;
  background-color: #ff9800;
  color: white;
}
.group-input-discount {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
  position: absolute;
  width: 150px;
}
.group-input-discount .input-discount {
  width: 35%;
  display: inline-block;
}
.group-input-discount button {
  width: 20%;
}
.btn-discount-done {
  border-radius: 20px 0px 0px 20px;
}
.btn-toggle-discount-type {
  border-radius: 0px 20px 20px 0px;
}
</style>
