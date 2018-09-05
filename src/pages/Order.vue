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
                <div class="col-xs-12 col-sm-12 col-md-2">
                    <ProductList></ProductList>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-10">
                    <OrderFrom></OrderFrom>
                </div>
                </div>
                
            </div>
            <div class="m-portlet__foot">
										<div class="row align-items-center">
											<div class="col-lg-6 m--valign-middle">
												
											</div>
											<div class="col-lg-6 m--align-right">
												<button type="submit" class="btn btn-brand" @click="submit">
													Thêm
												</button>
												<span class="m--margin-left-10">
													Hoặc
													<a href="#" class="m-link m--font-bold">
														Hủy
													</a>
												</span>
											</div>
										</div>
									</div>
        </div>
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
<style>

</style>
