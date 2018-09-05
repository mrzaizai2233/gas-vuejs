<template>
    <table class="table table-hover">
    
        <thead>
    
            <tr>
    
                <th>
    
                    Sản Phẩm
    
                </th>
    
            </tr>
    
        </thead>
    
        <tbody>
    
            <tr v-for="product in products" :key="product._id" @click="addOrderItem(product)">
    
                <td class="hover-pointer">
    
                    <span> {{product.name}}  </span>
    
                </td>
    
            </tr>
    
        </tbody>
    
    </table>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",

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