<template>
        <v-flex md9 sm12>

            <v-flex  md12 sm12 elevation-1>

        <table class="v-datatable v-table theme--light">
        <thead>
            <tr>
                <th style="width:20%">Tên KH</th>
                <th style="width:20%">Mã KH</th>
                <th style="width:20%">SĐT</th>
                <th style="width:20%">Địa Chỉ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="hidden" v-model="order.user">
            <Typeahead 
                   :filter-key="'name'" 
                   :placeholder="'Nhập tên'"
                   :source="users"
                   :showKey="'name'"
                   :start-at="1"
                   @select="getUser"
                   > 
                   </Typeahead>                </td>
                <td>
                    {{userSelected.code}}
                </td>
                <td>
                    {{userSelected.phone}}
                </td>
                <td>
                    {{userSelected.adress}}
                </td>
            </tr>
        </tbody>
    </table>
            </v-flex>
        <v-flex  v-if="hasItems"  md12 sm12 xs12 elevation-1>
            <OrderItem  v-for="(item,index) in items" :key="index" :item="item" ></OrderItem>
        </v-flex>
        <v-flex  md12 sm12 col-xs-12 elevation-1 wrap-col-footer>
        <OrderFooter></OrderFooter>
        </v-flex>
    </v-flex>

</template>

<script>
import Typeahead from "../Typeahead";
import OrderItem from "./orderFrom/OrderItem";
import OrderFooter from "./orderFrom/OrderFooter";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderFrom",
  data() {
    return {
      userSelected: {}
      // users:[
      //     {name:"ba thin",_id:1,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:2,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:3,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:4,code:"kh1",phone:"123"}
      // ]
    };
  },
  methods: {
    ...mapActions("order", ["changeItem", "removeItem"]),
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
    minusItemQty: function(item) {
      item.qty++;
    }
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
    Typeahead,
    OrderItem,
    OrderFooter
  },
  filters: {
    toUSD(value) {
      return `${value.toLocaleString()}`;
    }
  },
  created() {
    if (this.users.length <= 0) {
      this.getAllUser();
    }
  }
};
</script>
<style scoped>
/* footer */
.col-footer {
  display: flex;
}

@media only screen and (max-width: 959px) {
  .wrap-col-footer {
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
  border-radius: 0;
  border: none;
  padding: 10px;
  outline: none;
}

.col-footer {
  display: flex;
}

.col-footer .col-footer_total {
  flex: 2;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-footer .col-footer_total .price {
  font-weight: bold;
}

.col-footer .col-footer_add {
  flex: 1;
}

.col-footer .col-footer_remove {
  flex: 1;
}
</style>
