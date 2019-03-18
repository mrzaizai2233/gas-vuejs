<template>
  <v-container fluid>
    <v-layout row wrap>
      <ProductList></ProductList>
      <QuoteFrom></QuoteFrom>
    </v-layout>
  </v-container>
</template>
<script>
import ProductList from "@/components/quote/ProductList";
import QuoteFrom from "@/components/quote/QuoteFrom";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductList,
    QuoteFrom
  },
  computed: {
    ...mapGetters("quote", ["quote"])
  },
  methods: {
    ...mapActions(["setPageTitle"]),
    ...mapActions("quote", ["addQuote"]),
    submit() {
      console.log(this.quote);
      // this.addQuote(this.quote)
    }
  },
  created() {
    this.setPageTitle("Đơn hàng");
  }
};
</script>
<style scoped>
@media only screen and (max-width: 959px) {
  .m-portlet__foot {
    position: fixed;
    background: white;
    width: 100%;
    bottom: 0;
  }
}
</style>

