<template>
  <v-flex md9 sm12>
  
  
  
    <v-flex md12 sm12 elevation-1>
  
  
  
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
  
              <Typeahead :filter-key="'name'" :placeholder="'Nhập tên'" :source="users" :showKey="'name'" :start-at="1" @select="selectUser" ref="select2">
  
              </Typeahead>
  
            </td>
  
            <td>
  
              {{user.code}}
  
            </td>
  
            <td>
  
              {{user.phone}}
  
            </td>
  
            <td>
  
              {{user.adress}}
  
            </td>
  
          </tr>
  
        </tbody>
  
      </table>
  
    </v-flex>
  
    <v-flex v-if="hasItems" md12 sm12 xs12 elevation-1>
  
      <OrderItem v-for="(item,index) in items" :key="index" :item="item"></OrderItem>
  
    </v-flex>
  
  
  
    <v-flex md12 sm12 col-xs-12 elevation-1 order-items>
  
      <OrderInfo></OrderInfo>
  
    </v-flex>
  
  
  
    <v-flex md12 sm12 col-xs-12 elevation-1 wrap-col-footer>
  
      <OrderFooter></OrderFooter>
  
    </v-flex>
  
  </v-flex>
</template>

<script>
  import Typeahead from "../Typeahead";
  
  import OrderItem from "./orderFrom/OrderItem";
  
  import OrderFooter from "./orderFrom/OrderFooter";
  
  import OrderInfo from "./orderFrom/OrderInfo";
  
  import {
  
    mapGetters,
  
    mapActions,
  
    mapState
  
  } from "vuex";
  
  import {
  
    EventBus
  
  } from '../../helper/event'
  
  
  
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
  
      ...mapActions("order", ["changeItem", "removeItem", "selectUser"]),
  
      ...mapActions("user", ["getAllUser"]),
  
      getUser: function(item) {
  
        this.userSelected = item;
  
        this.order.user = item._id;
  
      },
  
    },
  
    computed: {
  
      ...mapGetters("order", ["items", "order", "total"]),
  
      ...mapGetters("product", ["products"]),
  
      ...mapGetters("user", ["users"]),
  
      ...mapState("order", ["user"]),
  
      hasItems: function() {
  
        console.log(this.items)
  
        if (this.items && this.items.length > 0) return 1;
  
        else return 0;
  
      }
  
    },
  
    watch: {},
  
    components: {
  
      Typeahead,
  
      OrderItem,
  
      OrderFooter,
  
      OrderInfo
  
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
  
      EventBus.$on('order-add-success', () => {
  
        this.$refs.select2.query = ""
  
      })
  
    }
  
  };
</script>
<style scoped>
  /* footer */
  
  
  
  .col-footer {
  
    display: flex;
  
  }
  
  
  
  @media only screen and (max-width: 959px) {
  
    .order-items {
  
      margin-bottom: 30px;
  
    }
  
  }
</style>
