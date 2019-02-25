<template>
  <div class="order-info">
    <div class="order-info_status">
      <div class="status-item status-text">
        <span>Thanh toán</span>
      </div>
      <div class="status-item status-control">
        <v-switch v-model="order.status"></v-switch>
      </div>
    </div>
    <div class="order-info_status">
      <div class="status-item status-text">
        <span>Nợ vỏ</span>
      </div>
      <div class="status-item status-control">
        <v-switch v-model="order.status"></v-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderInfo",
  data() {
    return {
      userSelected: {}
    };
  },
  methods: {
    ...mapActions("order", ["changeItem", "removeItem"]),
    ...mapActions("user", ["getAllUser"]),
    submit: function() {
      console.log(this.order);
    }
  },
  computed: {
    ...mapGetters("order", ["items", "order", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("user", ["users"])
  },
  watch: {},
  filters: {},
  created() {}
};
</script>
<style scoped>
.order-info {
  display: flex;
}
.order-info .order-info_status {
  width: 100%;
  display: flex;
}
.order-info .order-info_status .status-item {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}
.status-text {
  font-weight: bold;
}
</style>
