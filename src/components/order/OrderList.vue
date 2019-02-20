<template>
    <v-flex md12 sm12>
        <v-daterange/>
        <v-data-table :headers="headers" :items="orders" hide-actions class="elevation-1" :hideActions="false" :rowsPerPageText="'7'">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.user?props.item.user.name:''}}</td>
                <td>{{ props.item.create_at | formatDate }}</td>
                <td>
                    <v-switch v-model=" props.item.status"></v-switch>
                </td>
                <td>{{ props.item.grand_total?props.item.grand_total.toLocaleString():0 }}</td>
                <td>
                  <button @click="thisSelectOrder(props.item)">Sửa</button>
                  <button @click="deleteOrder(props.item._id)">Xóa</button>
                  </td>
            </template>
           
        </v-data-table>
        </v-flex>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import moment from 'moment'
export default {
  name: "OrdertList",
  data() {
    return {
      headers: [
        {
          text: "Khách",
          value: "name"
        },
        {
          text: "Ngày",
          value: "create_at"
        },
        {
          text: "Thanh toán",
          value: "status"
        },
        {
          text: "Tổng",
          value: "status"
        },
        {
          text: "Sửa",
          value: "status"
        }
      ],

    };
  },
  computed: {
    ...mapGetters("order", ["orders"]),
    ...mapGetters("product", ["products"]),
    data:function(){

    }
  },
  methods: {
    ...mapActions("product", ["getAllProduct"]),
    ...mapActions("order", ["getAllOrder","selectOrder","deleteOrder"]),
    ...mapMutations("order",['SELECT_ORDER','SELECT_USER']),
    thisSelectOrder(payload) {
      this.selectOrder(payload)
      this.$router.push({ name: "Order"})
    }
  },
  created() {
    if (this.orders.length <= 0) {
      this.getAllOrder();
    }
    if (this.products.length <= 0) {
      this.getAllProduct();
    }
  },
   filters: {
    formatDate(value) {
      return moment(value).format("D-M-YYYY");
    }
  }
};
</script>
<style scoped>
.custom-btn {
  border-color: #ff9800;
  color: white;
  background-color:#ff9800;
  padding: 8px 10px;
}
</style>
