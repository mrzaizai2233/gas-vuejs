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
              <input type="hidden" v-model="quote.customer">
              <Typeahead
                :filter-key="'name'"
                :placeholder="'Nhập tên'"
                :source="customers"
                :defaultItem="!isCreate?customer:null"
                :showKey="'name'"
                :start-at="1"
                @select="selectCustomer"
                ref="select2"
              ></Typeahead>
            </td>
            <td>{{customer.code}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.adress}}</td>
          </tr>
        </tbody>
      </table>
    </v-flex>
    <v-flex v-if="hasItems" md12 sm12 xs12 elevation-1>
      <QuoteItem v-for="(item,index) in items" :key="index" :index="index" :item="item"></QuoteItem>
    </v-flex>
    <v-flex md12 sm12 col-xs-12 elevation-1 quote-items>
      <QuoteInfo></QuoteInfo>
    </v-flex>
    <v-flex md12 sm12 col-xs-12 elevation-1 wrap-col-footer>
      <QuoteFooter></QuoteFooter>
    </v-flex>
  </v-flex>
</template>
<script>
import Typeahead from "../Typeahead";
import QuoteItem from "./quoteFrom/QuoteItem";
import QuoteFooter from "./quoteFrom/QuoteFooter";
import QuoteInfo from "./quoteFrom/QuoteInfo";
import { mapGetters, mapActions, mapState } from "vuex";
import { EventBus } from "../../helper/event";
export default {
  name: "QuoteFrom",
  data() {
    return {
      customerSelected: {}
    };
  },
  methods: {
    ...mapActions("quote", ["changeItem", "removeItem", "selectCustomer"]),
    ...mapActions("customer", ["getAllCustomer"]),
    getCustomer: function(item) {
      this.customerSelected = item;
      this.quote.customer = item._id;
    }
  },
  computed: {
    ...mapGetters("quote", ["items", "quote", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("customer", ["customers"]),
    ...mapState("quote", ["customer", "isCreate"]),
    hasItems: function() {
      console.log(this.items);
      if (this.items && this.items.length > 0) return 1;
      else return 0;
    }
  },
  watch: {},
  components: {
    Typeahead,
    QuoteItem,
    QuoteFooter,
    QuoteInfo
  },
  filters: {
    toUSD(value) {
      return `${value.toLocaleString()}`;
    }
  },
  created() {
    if (this.customers.length <= 0) {
      this.getAllCustomer();
    }
    EventBus.$on("quote-add-success", () => {
      this.$refs.select2.query = "";
    });
  }
};
</script>
<style scoped>
/* footer */
.col-footer {
  display: flex;
}
@media only screen and (max-width: 959px) {
  .quote-items {
    margin-bottom: 30px;
  }
}
</style>