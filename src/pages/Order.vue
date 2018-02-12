<template>
        <div class="m-portlet">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            Đơn hàng
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    
                </div>
            </div>
            <div class="m-portlet__body">
                <div class="row">
                <div class="col-md-3">
                    <ProductList></ProductList>
                </div>
                <div class="col-md-9">
                    <OrderFrom></OrderFrom>
                </div>
                </div>
                
            </div>
        </div>
</template>
<script>
import ProductList from '@/components/order/ProductList'
import OrderFrom from '@/components/order/OrderFrom'
    export default {
        components:{
            ProductList,
            OrderFrom
        }
    }
</script>
<style>

</style>
