<template>
    <v-flex md6 sm12>
        <v-data-table :headers="headers" :items="products" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>
                <button :class="{'btn m-btn--pill btn-outline-primary m-btn m-btn--custom m-btn--outline-2x':true}" @click="addOrderItem(props.item)">
                        Sửa
                </button>
                </td>
            </template>
        </v-data-table>
        </v-flex>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  data() {
    return {
      headers: [
        {
          text: "Tên",
          value: "name"
        },

        {
          text: "Hành động",
          value: "status"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("product", ["products"]),

    ...mapGetters("order", ["order"])
  },

  methods: {
    ...mapActions("product", ["getAllProduct"]),

    ...mapActions("order", ["addOrderItem"]),

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
    if (this.products.length <= 0) {
      this.getAllProduct();
    }
  }
};
</script>