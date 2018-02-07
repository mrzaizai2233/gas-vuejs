<template>
    <div class="m-section">
        <div class="m-section__content">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Tên Danh Mục
                        </th>
                        <th>
                            Trạng Thái
                        </th>
                            <th>
                            Hành Động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categorys" :key="category._id" @dblclick="selectCategory(category)">
                        <th scope="row">
                            1
                        </th>
                        <td>
                            {{category.name}}
                        </td>
                        <td>
                        <span class="m-switch m-switch--icon">
                                <label>
                                    <input type="checkbox" :checked="category.status==1" name="">
                                    <span @click="toggleStatus(category._id)"></span>
                                </label>
                        </span>
                        </td>
                        <td>
                            <button @click="deleteCategory(category._id)" type="button" class="btn m-btn--pill    btn-outline-danger m-btn m-btn--custom m-btn--outline-2x">
                                <i class="la la-trash"></i>
                            </button>
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
        name:'CategoryList',
        computed:{
            ...mapGetters({
                categorys:'category/categorys'
            })
           
        },
         methods:{
             ...mapActions('category',{
                 toggleStatus:'changeStatusCategory',
                 deleteCategory:'deleteCategory',
             }),
            selectCategory(category){
                this.$store.dispatch('category/selectCategory',category)
            },
         
        }
    }
</script>
