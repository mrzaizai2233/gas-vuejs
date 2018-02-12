<template>
    <div class="m-section">
        <div class="m-section__content">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Tên Danh Mục
                        </th>
                        <th>
                            Trạng Thái
                        </th>
                            <th>
                            Hành Động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product._id" @dblclick="selectProduct(product)">
                        <th scope="row">
                            1
                        </th>
                        <td>
                            {{product.name}}
                        </td>
                        <td>
                        <span class="m-switch m-switch--icon">
                                <label>
                                    <input type="checkbox" :checked="product.status==1" name="">
                                    <span @click="toggleStatus(product._id)"></span>
                                </label>
                        </span>
                        </td>
                        <td>
                            <button @click="deleteProduct(product._id)" type="button" class="btn m-btn--pill    btn-outline-danger m-btn m-btn--custom m-btn--outline-2x">
                                <i class="la la-trash"></i>
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters } from 'vuex'
    export default {
        name:'ProductList',
        computed:{
            ...mapGetters({
                products:'product/products'
            })
        },
         methods:{
             ...mapActions('product',{
                 toggleStatus:'changeStatusProduct',
                 deleteProduct:'deleteProduct',
                 selectProduct:'selectProduct',
                 getAllProduct:'getAllProduct'
             }),
          
         
        },
        created(){
            if(this.products.length<=0){
                this.getAllProduct()
            }
        }
    }
</script>
