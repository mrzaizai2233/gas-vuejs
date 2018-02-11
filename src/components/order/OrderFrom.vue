<template>
  <div class="m_datatable m-datatable m-datatable--default m-datatable--loaded" id="local_data" style="">
   <table class="m-datatable__table" id="m-datatable--1277337141009" style="display: block; height: auto; overflow-x: auto;">
      <thead class="m-datatable__head">
         <tr class="m-datatable__row" style="height: 53px;">
            <th class="m-datatable__cell--center m-datatable__cell m-datatable__cell--sort"><span style="width: 50px;">Tên Sản Phẩm</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;">Số Lượng</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;">Đơn Giá</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;">Giảm Phần Trăm</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;"> Giảm Tiền</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;">Tổng</span></th>
            <th class="m-datatable__cell m-datatable__cell--sort"><span style="width: 60px;">Xóa</span></th>
         </tr>
      </thead>
      <tbody class="m-datatable__body" style="">
         <tr v-if="hasItems" v-for="(item,index) in items" :key="index"  class="m-datatable__row m-datatable__row--even" style="height: 64px;">
            <td  class="m-datatable__cell--center m-datatable__cell">
                    {{item.name}}
                                        <input type="hidden" :value="item._id" @input="$set(items[index],'product',$event.target.value)" name="product">

            </td>
            <td  class="m-datatable__cell m-datatable__cell--center">
                    <input type="text" class="form-control m-input m-input--square" placeholder="Số Lương"  name="qty" :value="item.qty" @input="$set(items[index],'qty',$event.target.value)">

            </td>
            <td  class="m-datatable__cell m-datatable__cell--center">
                    <input type="text" class="form-control m-input m-input--square" placeholder="Đơn giá" v-model="item.price">

            </td>
            <td  class="m-datatable__cell m-datatable__cell--center">
                <input type="text" class="form-control m-input m-input--square" placeholder="Giảm %" :value="item.discout_percent" @input="$set(items[index],'discout_percent',$event.target.value)" name="product">

            </td>
                       <td  class="m-datatable__cell m-datatable__cell--center">
                <input type="text" class="form-control m-input m-input--square" placeholder="Giảm Tiền" :value="item.discout_fixed" @input="$set(items[index],'discout_fixed',$event.target.value)" name="product" >

            </td>
         </tr>
      </tbody>
   </table>
   <div class="m-datatable__pager m-datatable--paging-loaded clearfix">
      <div class="m-datatable__pager-info">
         <div class="btn-group bootstrap-select m-datatable__pager-size" style="width: 70px;">
            <button @click="submit()" type="button" class="btn btn-default"  role="button" title="Select page size"><span class="filter-option pull-left">Lưu</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>

         </div>
      </div>
   </div>
</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name:'OrderFrom',
        methods:{
submit:function(){
                console.log(this.order)
            }
        },
        computed:{
            ...mapGetters('order',[
                'items',
                'order'
            ]),
            hasItems:function(){
                if(this.items.length>0)
                    return 1
                else 
                    return 0
            },
            
        },
        
    }
</script>