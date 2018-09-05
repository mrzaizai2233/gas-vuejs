<template>
<div>
    <table class="table table-hover table-striped">
        <thead>
            <tr>
                <th style="width:20%">Tên KH</th>
                <th style="width:20%">Mã KH</th>
                <th style="width:20%">SĐT</th>
                <th style="width:20%">Địa Chỉ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="hidden" v-model="order.user">
            <Typeahead 
                   :filter-key="'name'" 
                   :placeholder="'Nhập tên'"
                   :source="users"
                   :showKey="'name'"
                   :start-at="1"
                   @select="getUser"
                   > 
                   </Typeahead>                </td>
                <td>
                    {{userSelected.code}}
                </td>
                <td>
                    {{userSelected.phone}}
                </td>
                <td>
                    {{userSelected.adress}}
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-hover">
        <thead>
            <tr>
                <th style="width: 130px;">
                   Sản Phẩm
                </th>
                <th >
                    SL
                </th>
                <th>
                    Giá
                </th>
                <!-- <th>
                    Giảm Giá
                </th> -->
                <th>
                    Tổng
                </th>
                <th class="text-center">
                    Xóa
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="hasItems" v-for="(item,index) in items" :key="index" class="" style="height: 64px;">
                <td class="" style="width: 130px;">
                    {{productName(item.product)}}
                    <input type="hidden" v-model="item.product" name="product">
                </td>
                <td class="" >
                    <input type="text" class="form-control m-input m-input--square input-small" placeholder="Số Lương" v-model="item.qty" name="qty" @keyup="discount($event,index,'qty')">
                </td>
                <td class="">
                    <span>{{item.price | toUSD }}</span>
                    <input type="hidden" class="" placeholder="Đơn giá" v-model="item.price" name="price" :readonly="true">
                </td>
                <!-- <td class="">
                    <input type="text" class="form-control m-input m-input--square" placeholder="Giảm Tiền" v-model="item.discount_fixed" name="discount_fixed" @keyup="discount($event,index,'fixed')">
                </td> -->
                <td class="">
                    <span>  {{item.total | toUSD }}</span>
                  
                </td>
                <td class="text-center">
                    <button @click="removeItem(index)" type="button" class="btn m-btn--pill    btn-outline-danger m-btn  m-btn--outline-2x square-btn"><i class="la la-trash"></i></button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                
                <td><v-checkbox label="Nợ" v-model="order.status"></v-checkbox> </td>
                <td>Tổng: </td>
                <td><span class="m-widget13__text m-widget13__number-bolder m--font-brand">{{total}}</span></td>
            </tr>
            
        </tfoot>
    </table>
</div>
</template>

<script>
    import Typeahead from '../Typeahead'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        name: "OrderFrom",
        data(){
            return {
                userSelected:{},
                // users:[
                //     {name:"ba thin",_id:1,code:"kh1",phone:"123"},
                //     {name:"ba thin",_id:2,code:"kh1",phone:"123"},
                //     {name:"ba thin",_id:3,code:"kh1",phone:"123"},
                //     {name:"ba thin",_id:4,code:"kh1",phone:"123"}
                // ]
            }
        },
        methods: {
            ...mapActions("order", ["changeItem", "removeItem"]),
            ...mapActions("user", ["getAllUser"]),
            submit: function() {
                console.log(this.order);
            },
            discount: function($event, index, element) {
                let item = this.items[index];
                if (element === "qty") {
                    item.discount_percent = 0;
                    item.discount_fixed = 0;
                }
                item.total = item.qty ? parseInt(item.qty) * parseFloat(item.price) : 0;
                if (element === "fixed") {
                    if (item.discount_fixed <= item.price) {
                        item.discount_percent = parseFloat(
                            item.discount_fixed * 100 / item.total
                        );
                        item.discount_fixed = item.discount_fixed ? item.discount_fixed : 0;
                    }
                }
                if (element === "percent") {
                    if (item.discount_percent <= 100) {
                        item.discount_fixed = parseFloat(
                            item.total * item.discount_percent / 100
                        );
                        item.discount_percent = item.discount_percent ?
                            item.discount_percent :
                            0;
                    }
                }
                if (item.discount_percent <= 100 && item.discount_fixed <= item.price) {
                    item.total = item.total - item.discount_fixed;
                }
            },
            productName:function(product_id){
                return this.products.find(product=>product._id===product_id).name
            },
            getUser:function(item){
                this.userSelected = item
                this.order.user = item._id
            },
           
        },
        computed: {
            ...mapGetters("order", ["items", "order", "total"]),
            ...mapGetters("product", ["products"]),
            ...mapGetters("user", ["users"]),

            hasItems: function() {
                if (this.items.length > 0) return 1;
                else return 0;
            }
        },
        watch: {},
        components:{
            Typeahead
        },
        filters: {
            toUSD (value) {
            return `${value.toLocaleString()}`
            }
        },
        created(){
            if(this.users.length<=0){
                this.getAllUser()
            }
        }
    };
</script>
