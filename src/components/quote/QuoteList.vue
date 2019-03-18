<template>
  <v-flex md12 sm12>
    <!-- <v-daterange/> -->
    <v-data-table
      :headers="headers"
      :items="quotes"
      hide-actions
      class="elevation-1"
      :hideActions="false"
      :rowsPerPageText="'7'"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.customer?props.item.customer.name:''}}</td>
        <td>{{ props.item.create_at | formatDate }}</td>
        <td>
          <v-switch v-model=" props.item.status"></v-switch>
        </td>
        <td>{{ props.item.grand_total?props.item.grand_total.toLocaleString():0 }}</td>
        <td>
          <v-btn fab dark small color="info" @click="thisSelectQuote(props.item)">
            <v-icon dark>bquote_color</v-icon>
          </v-btn>
          <v-btn fab dark small color="pink" @click="deleteQuote(props.item._id)">
            <v-icon dark>clear</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-flex>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import moment from "moment";
export default {
  name: "QuotetList",
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
      ]
    };
  },
  computed: {
    ...mapGetters("quote", ["quotes"]),
    ...mapGetters("product", ["products"]),
    data: function() {}
  },
  methods: {
    ...mapActions("product", ["getAllProduct"]),
    ...mapActions("quote", ["getAllQuote", "selectQuote", "deleteQuote"]),
    ...mapMutations("quote", ["SELECT_QUOTE", "SELECT_CUSTOMER"]),
    thisSelectQuote(payload) {
      this.selectQuote(payload);
      this.$router.push({ name: "Quote" });
    }
  },
  created() {
    if (this.quotes.length <= 0) {
      this.getAllQuote();
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
  bquote-color: #ff9800;
  color: white;
  background-color: #ff9800;
  padding: 8px 10px;
}
</style>
