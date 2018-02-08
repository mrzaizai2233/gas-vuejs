<template>
  <div class="m-form__section m-form">
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Tên Sản Phẩm:
            </label>
            <input type="text" class="form-control m-input" placeholder="Tên Sản Phẩm" v-model="product.name">
            <input type="hidden" class="form-control m-input"  v-model="product._id">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Mã Sản Phẩm:
            </label>
            <input type="text" class="form-control m-input" placeholder="Mã Sản Phẩm" v-model="product.code">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Giá Nhập:
            </label>
            <input type="text" class="form-control m-input" placeholder="Giá Nhập" v-model="product.input_price">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Giá Bán:
            </label>
            <input type="text" class="form-control m-input" placeholder="Giá Bán" v-model="product.price">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Đơn Vị Tính:
            </label>
            <input type="text" class="form-control m-input" placeholder="Đơn Vị Tính" v-model="product.unit">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label class="inherit">
                Trạng Thái:
            </label>
            <span class="m-switch m-switch--icon">
                <label>
                    <input type="checkbox" checked="checked" v-model="product.status">
                    <span></span>
                </label>
            </span>
        </div>
        <div class="form-group m-form__group">
            <button type="reset" class="btn btn-primary" @click="submit()">
                {{isCreate?'Tạo':'Sửa'}}
            </button>
            <button type="reset" class="btn btn-secondary" @click="removeProduct()">
                Làm Mới
            </button>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'ProductForm',
        data(){
            return {

            }
        },
        methods:{
            ...mapActions('product',[
                'addProduct',
                'updateProduct',
                'removeProduct'
            ]),
            submit:function(){
              if(this.isCreate){
                  this.addProduct(this.product)
                // this.$store.dispatch('product/addProduct',this.product)
              } else {
                  this.updateProduct(this.product)
                // this.$store.dispatch('product/updateProduct',this.product)
              }
            },
          
        },
        computed:{
            ...mapGetters('product',[
                'isCreate',
                'product'
            ]),
        
      
        }
    }
</script>
<style>

</style>
