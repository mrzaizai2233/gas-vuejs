<template>
        <v-flex>

            <v-flex  md6 sm12 elevation-1>

        <table class="table table-hover table-striped">
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
        <v-flex  md6 sm12 elevation-1>

         <div v-if="hasItems" v-for="(item,index) in items" :key="index" class="cart-item theme--light v-table">
                <div class="cart-item_part head-item">
                    <div class="head-item_item head-item_left">
                        <span class="name-product"> {{productName(item.product)}}
                    <input type="hidden" v-model="item.product" name="product"></span>
                    </div>
                    <div class="head-item_item head-item_right"><span class="right-title">CK:</span><span class="right-value">0</span></div>
                </div>
                <div class="cart-item_part body-item">
                    <div class="body-item_item body-item_qty">
                        <div class="actions">
                            <button class="square-btn minus-btn" @click="item.qty>1?item.qty--:item.qty"><i class="fa fa-caret-left"></i></button>
                            <input type="text" class="order-qty" v-model="item.qty" name="qty">
                            <button class="square-btn plus-btn" @click="item.qty++"><i class="fa fa-caret-right"></i></button>
                        </div>
                    </div>
                    <div class="body-item_item body-item_price">
                        Đơn giá:{{item.price | toUSD }}
                        <input type="hidden" class="" placeholder="Đơn giá" v-model="item.price" name="price" :readonly="true">
                        </div>
                    <div class="body-item_item body-item_total">Tổng:{{item.total | toUSD }}</div>
                </div>
                </div>
    
    </v-flex>
    <v-flex  md6 sm12 col-xs-12 elevation-1>
       <div class="col-footer ">
                    <div class="col-footer_item col-footer_remove">
                        <button class="flat-btn btn-danger">Hủy</button>
                    </div>
                    <div class="col-footer_total col-footer_item">
                        <span class="price">300.000</span>
                    </div>
                    <div class="col-footer_add col-footer_item">
                        <button class="btn-success flat-btn"><i class="fa fa-caret-right"></i></button>
                    </div>
                </div>
    </v-flex>
    </v-flex>
    <!-- <table class="table table-hover" style="display:none">
        <thead>
            <tr>
                <th style="width: 130px;">
                   Sản Phẩm
                </th>
                <th >
                    SL
                </th>
                <th>
                    Giá
                </th>
                <th>
                    Giảm Giá
                </th>
                <th>
                    Tổng
                </th>
                <th class="text-center">
                    Xóa
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="hasItems" v-for="(item,index) in items" :key="index" class="" style="height: 64px;">
                <td class="" style="width: 130px;">
                    {{productName(item.product)}}
                    <input type="hidden" v-model="item.product" name="product">
                </td>
                <td class="" >
                    <input type="text" class="form-control m-input m-input--square input-small" placeholder="Số Lương" v-model="item.qty" name="qty" @keyup="discount($event,index,'qty')">
                </td>
                <td class="">
                    <span>{{item.price | toUSD }}</span>
                    <input type="hidden" class="" placeholder="Đơn giá" v-model="item.price" name="price" :readonly="true">
                </td>
                <td class="">
                    <input type="text" class="form-control m-input m-input--square" placeholder="Giảm Tiền" v-model="item.discount_fixed" name="discount_fixed" @keyup="discount($event,index,'fixed')">
                </td>
                <td class="">
                    <span>  {{item.total | toUSD }}</span>
                  
                </td>
                <td class="text-center">
                    <button @click="removeItem(index)" type="button" class="btn m-btn--pill    btn-outline-danger m-btn  m-btn--outline-2x square-btn"><i class="la la-trash"></i></button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                
                <td><v-checkbox label="Nợ" v-model="order.status"></v-checkbox> </td>
                <td>Tổng: </td>
                <td><span class="m-widget13__text m-widget13__number-bolder m--font-brand">{{total}}</span></td>
            </tr>
            
        </tfoot>
    </table> -->
</template>

<script>
import Typeahead from "../Typeahead";
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
    Typeahead
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
}

.cart-item .head-item .head-item_right {
  justify-content: flex-end;
}
/* body-item */

.cart-item .body-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
/* footer */
.col-footer {
    display: flex;
}

@media only screen and (max-width: 959px)
{
.col-footer {
   position: fixed;
   bottom: 0;
   display: flex
}
}
 .flat-btn {
            width: 100%;
            border-radius: 0;
            border: none;
            padding: 10px;
        }
        
        .col-footer {
            display: flex
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
