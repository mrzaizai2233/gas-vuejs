<template>
      <div class="m-section">
        <div class="m-section__content">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <!-- <th>
                            #
                        </th> -->
                        <th>
                            Tên Sản Phẩm
                        </th>
                        <th>
                            Mã Sản Phẩm
                        </th>
                          
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product._id" @dblclick="addOrderItem(product)">
                        <!-- <th scope="row">
                            1
                        </th> -->
                        <td>
                            {{product.name}}
                        </td>
                        <td>
                            {{product.code}}
                        </td>
                      

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name:'ProductList',
        computed:{
            ...mapGetters('product',[
                'products'
            ]),
            ...mapGetters('order',[
                'order'
            ]),
        },
        methods:{
             ...mapActions('product',[
                 'getAllProduct',
                 ]),
             ...mapActions('order',[
                 'addOrderItem'
                 ]),
             addItem(product){
                 console.log(product)
                    this.order.items.push(product)
             }
        },
         created(){
            if(this.products.length<=0){
                this.getAllProduct()
            }
        }

    }
</script>