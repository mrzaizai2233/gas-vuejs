<template>
  <v-flex md12 sm12>
    <!-- <v-daterange/> -->
    <v-data-table
      :headers="headers"
      :items="customers"
      hide-actions
      class="elevation-1"
      :hideActions="false"
      :rowsPerPageText="'7'"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.code}}</td>
        <td>{{ props.item.name}}</td>

        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.address }}</td>
        <td>
          <v-btn fab dark small color="info" @click="thisSelectCustomer(props.item)">
            <v-icon dark>border_color</v-icon>
          </v-btn>
          <v-btn fab dark small color="pink" @click="deleteOrder(props.item._id)">
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
  name: "CustomerList",
  data() {
    return {
      headers: [
        {
          text: "Mã",
          value: "code"
        },
        {
          text: "Tên",
          value: "name"
        },
        {
          text: "SĐT",
          value: "phone"
        },
        {
          text: "Địa chỉ",
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
    ...mapGetters("customer", ["customers"]),
    data: function() {}
  },
  methods: {
    ...mapActions("customer", ["getAllCustomer"]),
    thisSelectCustomer(customer) {
      this.selectCustomer(customer);
      this.$router.push({ name: "customer" });
    }
  },
  created() {
    if (this.customers.length <= 0) {
      this.getAllCustomer();
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
  background-color: #ff9800;
  padding: 8px 10px;
}
</style>
