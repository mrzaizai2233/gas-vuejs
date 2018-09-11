<template>
  <v-container fluid>
    <v-layout row wrap>
        <OrderList></OrderList>
    </v-layout>
    </v-container>
</template>
<script>
import { mapActions, mapGetters,  } from 'vuex';
import OrderList from '@/components/order/OrderList'
export default {
    name:"OrderView",
    computed:{
        ...mapGetters('order',[
            'orders'
        ])
    },
    components:{
        OrderList
    }
}
</script>
<style scoped>

</style>
