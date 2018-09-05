<template>
<v-container fluid>
    <v-layout row wrap>

     <ProductList></ProductList>
      <OrderFrom></OrderFrom>
    </v-layout>
  </v-container>

</template>
<script>
import ProductList from '@/components/order/ProductList'
import OrderFrom from '@/components/order/OrderFrom'
import { mapActions, mapGetters} from 'vuex';

    export default {
        components:{
            ProductList,
            OrderFrom
        },
         computed:{
            ...mapGetters('order',[
                'order',
            ]),
        },
          methods:{
            ...mapActions([ 
                'setPageTitle'
            ]),
             ...mapActions('order',[ 
                'addOrder'
            ]),
            submit(){
                console.log(this.order)
                // this.addOrder(this.order)
            }
        },
        created(){
            this.setPageTitle('Đơn hàng')
        },
    }
</script>
<style scoped>

@media only screen and (max-width: 959px)
{
.m-portlet__foot {
    position: fixed;
    background: white;
    width: 100%;
    bottom: 0;
    }
}
</style>

