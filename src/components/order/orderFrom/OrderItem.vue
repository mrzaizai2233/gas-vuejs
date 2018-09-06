<template>
        <div class="cart-item theme--light v-table">
            <div class="cart-item_part head-item">
                <div class="head-item_item head-item_left">
                    <span class="name-product"> {{productName(item.product)}}
                <input type="hidden" v-model="item.product" name="product"></span>
                </div>
                <div class="head-item_item head-item_right"><span class="right-title">CK: </span><span class="right-value">0</span></div>
            </div>
            <div class="cart-item_part body-item">
                <div class="body-item_item body-item_qty">
                    <div class="actions">
                        <button class="square-btn minus-btn" @click="decreaseQty(item)"><i class="fa fa-caret-left"></i></button>
                        <input type="text" class="order-qty" v-model="item.qty" name="qty">
                        <button class="square-btn plus-btn" @click="increaseQty(item)"><i class="fa fa-caret-right"></i></button>
                    </div>
                </div>
                <div class="body-item_item body-item_price">
                     <span> <i class="fa fa-dollar"></i> {{item.price | toUSD }}</span>
                    <input type="hidden" class="" placeholder="Đơn giá" v-model="item.price" name="price" :readonly="true">
                    </div>
                <div class="body-item_item body-item_total"> <span>Tổng: {{item.total | toUSD }}</span></div>
            </div>
        </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderItem",
  data() {
    return {
    };
  },
   props: {
            item: {
                type: [String, Array, Object],
                required: true
            }
          
        },
  methods: {
    ...mapActions("order", ["increaseQty","decreaseQty", "removeItem"]),
    ...mapActions("user", ["getAllUser"]),
    submit: function() {
      console.log(this.order);
    },
    discount: function($event, index, element) {
      let item = this.items[index];
      if (element === "qty") {
        item.discount_percent = 0;
        item.discount_fixed = 0;
      }
      item.total = item.qty ? parseInt(item.qty) * parseFloat(item.price) : 0;
      if (element === "fixed") {
        if (item.discount_fixed <= item.price) {
          item.discount_percent = parseFloat(
            item.discount_fixed * 100 / item.total
          );
          item.discount_fixed = item.discount_fixed ? item.discount_fixed : 0;
        }
      }
      if (element === "percent") {
        if (item.discount_percent <= 100) {
          item.discount_fixed = parseFloat(
            item.total * item.discount_percent / 100
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
    productName: function(product_id) {
      return this.products.find(product => product._id === product_id).name;
    },
    getUser: function(item) {
      this.userSelected = item;
      this.order.user = item._id;
    },
  },
  computed: {
    ...mapGetters("order", ["items", "order", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("user", ["users"]),

    hasItems: function() {
      if (this.items.length > 0) return 1;
      else return 0;
    }
  },
  watch: {},
  components: {
    
  },
  filters: {
    toUSD(value) {
      return `${value.toLocaleString()}`;
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
.cart-item .body-item .body-item_price , .cart-item .body-item .body-item_total {
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
</style>
