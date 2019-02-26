<template>
  <div class="m-form__section m-form">
    <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('code') }">
      <label for="example_input_full_name">Mã Khách:</label>
      <input
        type="text"
        class="form-control m-input"
        placeholder="Mã Khách"
        v-model="customer.code"
        v-validate="'required'"
        name="code"
      >
      <div
        v-show="errors.has('code')"
        class="form-control-feedback"
      >Trường dữ liệu này không thể để trống :( !</div>
    </div>
    <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('name') }">
      <label for="example_input_full_name">Tên Khách Hàng:</label>
      <input
        type="text"
        class="form-control m-input"
        placeholder="Tên Khách Hàng"
        v-model="customer.name"
        v-validate="'required'"
        name="name"
      >
      <input type="hidden" class="form-control m-input" v-model="customer._id">
      <div
        v-show="errors.has('name')"
        class="form-control-feedback"
      >Trường dữ liệu này không thể để trống :( !</div>
    </div>

    <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('input_price') }">
      <label for="example_input_full_name">Số Điện Thoại:</label>
      <input
        type="text"
        class="form-control m-input"
        placeholder="Số Điện Thoại"
        v-model="customer.phone"
        v-validate="'required'"
        name="input_price"
      >
      <div
        v-show="errors.has('input_price')"
        class="form-control-feedback"
      >Trường dữ liệu này không thể để trống :( !</div>
    </div>
    <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('price') }">
      <label for="example_input_full_name">Địa Chỉ:</label>
      <input
        type="text"
        class="form-control m-input"
        placeholder="Địa Chỉ"
        v-model="customer.address"
        v-validate="'required'"
        name="price"
      >
      <div
        v-show="errors.has('price')"
        class="form-control-feedback"
      >Trường dữ liệu này không thể để trống :( !</div>
    </div>

    <div :class="{'form-group m-form__group': true}">
      <label class="inherit">Trạng Thái:</label>
      <span class="m-switch m-switch--icon">
        <label>
          <input type="checkbox" checked="checked" v-model="customer.status">
          <span></span>
        </label>
      </span>
    </div>
    <div :class="{'form-group m-form__group': true}">
      <button type="reset" class="btn btn-primary" @click="submit()">{{isCreate?'Tạo':'Sửa'}}</button>
      <button type="reset" class="btn btn-secondary" @click="removeCustomer()">Làm Mới</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CustomerForm",
  data() {
    return {};
  },
  methods: {
    ...mapActions("customer", [
      "addCustomer",
      "updateCustomer",
      "removeCustomer"
    ]),
    submit: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.isCreate) {
            this.addCustomer(this.customer);
          } else {
            this.updateCustomer(this.customer);
          }
        }
      });
    }
  },
  computed: {
    ...mapGetters("customer", ["isCreate", "customer"]),
    ...mapGetters("category", ["categorys"])
  },
  created() {}
};
</script>
<style>
</style>
