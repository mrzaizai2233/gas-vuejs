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
<<<<<<< HEAD
                      
=======
                        <th>
                            Mã Sản Phẩm
                        </th>
>>>>>>> 058901d075e6022cfb6c6c35779dd8db4968d06b
                          
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
<<<<<<< HEAD
=======
                        <td>
                            {{product.code}}
                        </td>
                      

>>>>>>> 058901d075e6022cfb6c6c35779dd8db4968d06b
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
<<<<<<< HEAD
                 let item={
                     product:product._id,
                     qty:1,
                     price:product.price,
                     discout_percent:discout_percent,
                    discout_fixed:discout_fixed,
                    total:1*product.price
                 }
                 console.log(item)
                    this.order.items.push(item)
=======
                 console.log(product)
                    this.order.items.push(product)
>>>>>>> 058901d075e6022cfb6c6c35779dd8db4968d06b
             }
        },
         created(){
            if(this.products.length<=0){
                this.getAllProduct()
            }
        }

    }
</script>