<template>
  <div class="quote-info">
    <div class="quote-info_status">
      <div class="status-item status-text">
        <span>Thanh toán</span>
      </div>
      <div class="status-item status-control">
        <v-switch v-model="quote.status"></v-switch>
      </div>
    </div>
    <div class="quote-info_status">
      <div class="status-item status-text">
        <span>Nợ vỏ</span>
      </div>
      <div class="status-item status-control">
        <v-switch v-model="quote.status"></v-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "QuoteInfo",
  data() {
    return {
      customerSelected: {}
    };
  },
  methods: {
    ...mapActions("quote", ["changeItem", "removeItem"]),
    ...mapActions("customer", ["getAllCustomer"]),
    submit: function() {
      console.log(this.quote);
    }
  },
  computed: {
    ...mapGetters("quote", ["items", "quote", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("customer", ["customers"])
  },
  watch: {},
  filters: {},
  created() {}
};
</script>
<style scoped>
.quote-info {
  display: flex;
}
.quote-info .quote-info_status {
  width: 100%;
  display: flex;
}
.quote-info .quote-info_status .status-item {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}
.status-text {
  font-weight: bold;
}
</style>
