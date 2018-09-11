<template>
    <v-flex md12 sm12>
        <v-data-table :headers="headers" :items="orders" hide-actions class="elevation-1" :hideActions="false" :rowsPerPageText="'7'">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.user?props.item.user.name:''}}</td>
                <td>{{ props.item.create_at }}</td>
                <td>
                    <v-switch v-model=" props.item.status"></v-switch>
                </td>
                <td>{{ props.item.grand_total?props.item.grand_total.toLocaleString():0 }}</td>

            </template>
            <template slot="FootCell" >
       
            </template>
        </v-data-table>
        </v-flex>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

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
        }
      ]
    };
  },
  computed: {
    ...mapGetters("order", ["orders"])
  },

  methods: {
    ...mapActions("product", ["getAllProduct"]),

    ...mapActions("order", ["getAllOrder"]),

    addItem(product) {
      let item = {
        product: product._id,

        qty: 1,

        price: product.price,

        discout_percent: discout_percent,

        discout_fixed: discout_fixed,

        total: 1 * product.price
      };

      console.log(item);

      this.order.items.push(item);
    }
  },

  created() {
    if (this.orders.length <= 0) {
      this.getAllOrder();
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
