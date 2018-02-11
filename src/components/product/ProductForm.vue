<template>
  <div class="m-form__section m-form">
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('name') }">
            <label for="example_input_full_name">
                Tên Sản Phẩm:
            </label>
            <input type="text" class="form-control m-input" placeholder="Tên Sản Phẩm" v-model="product.name" v-validate="'required'" name="name">
            <input type="hidden" class="form-control m-input"  v-model="product._id">
             <div v-show="errors.has('name')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('code') }">
            <label for="example_input_full_name">
                Mã Sản Phẩm:
            </label>
            <input type="text" class="form-control m-input" placeholder="Mã Sản Phẩm" v-model="product.code" v-validate="'required'" name="code">
             <div v-show="errors.has('code')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('input_price') }">
            <label for="example_input_full_name">
                Giá Nhập:
            </label>
            <input type="text" class="form-control m-input" placeholder="Giá Nhập" v-model="product.input_price" v-validate="'required'" name="input_price">
             <div v-show="errors.has('input_price')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('price') }">
            <label for="example_input_full_name">
                Giá Bán:
            </label>
            <input type="text" class="form-control m-input" placeholder="Giá Bán" v-model="product.price" v-validate="'required'" name="price">
             <div v-show="errors.has('price')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('unit') }">
            <label for="example_input_full_name">
                Đơn Vị Tính:
            </label>
            <input type="text" class="form-control m-input" placeholder="Đơn Vị Tính" v-model="product.unit" v-validate="'required'" name="unit">
             <div v-show="errors.has('unit')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('category') }">
            <label for="example_input_full_name">
                Danh Mục:
            </label>
                    <select class="form-control" name="category" v-model="product.category" v-validate="'required'">
                        <option selected>Chọn một danh mục</option>
                        <option v-for="category of categorys" :key="category._id" :value="category._id" :selected="category._id === product.category">
                            {{category.name}}
                        </option>
                    </select>
            <div v-show="errors.has('category')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
        </div>
        <div :class="{'form-group m-form__group': true}">
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
        <div :class="{'form-group m-form__group': true}">
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
            ...mapActions('category',[
                'getAllCategory',
            ]),
            submit:function(){
                this.$validator.validateAll().then((result) => {
                    if(result){
                        if(this.isCreate){
                            this.addProduct(this.product)
                        } else {
                            this.updateProduct(this.product)
                        }
                    }
                })
            },
        },
        computed:{
            ...mapGetters('product',[
                'isCreate',
                'product'
            ]),
            ...mapGetters('category',[
                'categorys'
            ])
        },
        created(){
            if(this.categorys<=0){
                this.getAllCategory()
            }
        }
    }
</script>
<style>

</style>
