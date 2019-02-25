<template>
  <v-container fluid>
    <v-layout row wrap>
      <cusotmerList></cusotmerList>
    </v-layout>
  </v-container>
</template>
<script>
import cusotmerList from "@/components/customer/CustomerList";
import { mapActions } from "vuex";

export default {
  name: "Customer",

  computed: {},
  methods: {
    ...mapActions(["setPageTitle"])
  },
  created() {
    this.setPageTitle("Khách hàng");
  },
  components: {
    cusotmerList
  }
};
</script>
<style>
.inherit {
  display: inherit;
}
</style>
