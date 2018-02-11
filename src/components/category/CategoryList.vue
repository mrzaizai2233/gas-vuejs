<template>
<div class="m_datatable m-datatable m-datatable--default m-datatable--loaded" id="local_data" style="">
   <table class="m-datatable__table" id="m-datatable--1277337141009" style="display: block; height: auto; overflow-x: auto;">
      <thead class="m-datatable__head">
         <tr class="m-datatable__row" style="height: 53px;">
            <th data-field="RecordID" class="m-datatable__cell--center m-datatable__cell m-datatable__cell--sort"><span style="width: 50px;">#</span></th>
            <th data-field="OrderID" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 110px;">Tên Danh Mục</span></th>
            <th data-field="ShipName" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 110px;">Trạng Thái</span></th>
            <th data-field="Actions" class="m-datatable__cell m-datatable__cell--sort"><span style="width: 110px;"> Hành Động</span></th>
         </tr>
      </thead>
      <tbody class="m-datatable__body" style="">
         <tr v-for="category in categorys" :key="category._id" @dblclick="selectCategory(category)" data-row="0" class="m-datatable__row m-datatable__row--even" style="height: 64px;">
            <td data-field="RecordID" class="m-datatable__cell--center m-datatable__cell"><span style="width: 50px;">30</span></td>
            <td data-field="OrderID" class="m-datatable__cell"><span style="width: 110px;">{{category.name}}</span></td>
            <td data-field="ShipName" class="m-datatable__cell">
                <span style="width: 110px;"> 
                    <span class="m-switch m-switch--icon">
                            <label>
                                <input type="checkbox" :checked="category.status==1" name="">
                                <span @click="toggleStatus(category._id)"></span>
                            </label>
                    </span>
                </span>
                </td>
            <td data-field="Actions" class="m-datatable__cell">
               <button @click="deleteCategory(category._id)" type="button" class="btn m-btn--pill    btn-outline-danger m-btn m-btn--custom m-btn--outline-2x">
                                <i class="la la-trash"></i>
               </button>
            </td>
         </tr>
      </tbody>
   </table>
   <div class="m-datatable__pager m-datatable--paging-loaded clearfix">
      <ul class="m-datatable__pager-nav">
         <li><a title="First" class="m-datatable__pager-link m-datatable__pager-link--first m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-double-left"></i></a></li>
         <li><a title="Previous" class="m-datatable__pager-link m-datatable__pager-link--prev m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-left"></i></a></li>
         <li style="display: none;"><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-prev" data-page="1"><i class="la la-ellipsis-h"></i></a></li>
         <li style="display: none;"><input type="text" class="m-pager-input form-control" title="Page number"></li>
         <li><a class="m-datatable__pager-link m-datatable__pager-link-number m-datatable__pager-link--active" data-page="1" title="1">1</a></li>
         <li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="2" title="2">2</a></li>
         <li><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-next" data-page="7"><i class="la la-ellipsis-h"></i></a></li>
         <li><a title="Next" class="m-datatable__pager-link m-datatable__pager-link--next" data-page="2"><i class="la la-angle-right"></i></a></li>
         <li><a title="Last" class="m-datatable__pager-link m-datatable__pager-link--last" data-page="10"><i class="la la-angle-double-right"></i></a></li>
      </ul>
      <div class="m-datatable__pager-info">
         <div class="btn-group bootstrap-select m-datatable__pager-size" style="width: 70px;">
            <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Select page size"><span class="filter-option pull-left">10</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
            <div class="dropdown-menu open" role="combobox">
               <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                  <li data-original-index="1" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">10</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                  <li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">20</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                  <li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">30</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                  <li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">50</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                  <li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">100</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
               </ul>
            </div>
            <select class="selectpicker m-datatable__pager-size" title="Select page size" data-width="70px" data-selected="10" tabindex="-98">
               <option class="bs-title-option" value="">Select page size</option>
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="30">30</option>
               <option value="50">50</option>
               <option value="100">100</option>
            </select>
         </div>
         <span class="m-datatable__pager-detail">Displaying 1 - 10 of 100 records</span>
      </div>
   </div>
</div>

</template>
<script>

import {mapActions,mapGetters } from 'vuex'
    export default {
        name:'CategoryList',
        data(){
            return {
                isLoaded:false
            }
        },
        created:function(){
            if(this.categorys<=0){
                this.getAllCategory()
            }
            // if(this.isLoaded){
                mApp.block(".table-hover", {
                    overlayColor: "#000000",
                    type: "loader",
                    state: "success",
                    size: "lg"
                })
            // }
        },
        computed:{
            ...mapGetters({
                categorys:'category/categorys'
            })
           
        },
         methods:{
             ...mapActions('category',{
                 toggleStatus:'changeStatusCategory',
                 deleteCategory:'deleteCategory',
                 selectCategory:'selectCategory',
                 getAllCategory:'getAllCategory'
             }),
             show(){
             
             }
        }
    }
</script>
