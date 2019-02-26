<template>
  <div class="m-portlet">
    <div class="m-portlet__head">
      <div class="m-portlet__head-caption">
        <div class="m-portlet__head-title">
          <h3 class="m-portlet__head-text">Khách hàng</h3>
        </div>
      </div>
      <div class="m-portlet__head-tools"></div>
    </div>
    <div class="m-portlet__body">
      <div class="row">
        <div class="col-md-8">
          <cusotmerList></cusotmerList>
        </div>
        <div class="col-md-4">
          <cusotmerForm></cusotmerForm>
        </div>
      </div>
      <!--begin::Section-->
      <!--end::Section-->
    </div>
    <!--end::Form-->
  </div>
</template>
<script>
import cusotmerList from "@/components/customer/CustomerList";
import cusotmerForm from "@/components/customer/CustomerForm";
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
    cusotmerList,
    cusotmerForm
  }
};
</script>
<style>
.inherit {
  display: inherit;
}
</style>
