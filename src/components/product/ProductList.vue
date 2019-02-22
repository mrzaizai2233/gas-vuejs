<template>
    <div class="m-section">
        <div class="m-section__content">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th width="10%">
                            #
                        </th>
                        <th  width="40%">
                            Tên Sản Phẩm
                        </th>
                        <th width="15%">
                            Trạng Thái
                        </th>
                            <th  width="35%">
                            Hành Động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,i) in products" :key="product._id" @dblclick="selectProduct(product)">
                        <th scope="row">
                           {{++i}}
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
                             <v-btn fab dark small color="pink" @click="deleteProduct(product._id)">
                                <v-icon dark>clear</v-icon>
                            </v-btn>
                             <v-btn fab dark small color="info" @click="selectProduct(product)">
                                <v-icon dark>border_color</v-icon>
                            </v-btn>
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
<style scoped>
    tr td {
        cursor: pointer;
    }
    table tr td:nth-child(3),table tr th:nth-child(3),table tr td:nth-child(4),table tr th:nth-child(4) {
        text-align: center;
    }
    button {
        outline: none;
    }
</style>
