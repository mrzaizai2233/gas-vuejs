<template>
  <div class="m-form__section m-form">
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Tên Danh Mục:
            </label>
            <input type="text" class="form-control m-input" placeholder="Tên danh mục" v-model="category.name">
            <input type="hidden" class="form-control m-input" placeholder="Tên danh mục" v-model="category._id">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label class="inherit">
                Trạng Thái:
            </label>
            <span class="m-switch m-switch--icon">
                <label>
                    <input type="checkbox" checked="checked" v-model="category.status">
                    <span></span>
                </label>
            </span>
        </div>
        <div class="form-group m-form__group">
            <button type="reset" class="btn btn-primary" @click="submit()">
                {{isCreate?'Tạo':'Sửa'}}
            </button>
            <button type="reset" class="btn btn-secondary" @click="removeCategory()">
                Làm Mới
            </button>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'CategoryForm',
        data(){
            return {

            }
        },
        methods:{
            ...mapActions('category',[
                'addCategory',
                'updateCategory',
                'removeCategory'
            ]),
            submit:function(){
              if(this.isCreate){
                  this.addCategory(this.category)
                // this.$store.dispatch('category/addCategory',this.category)
              } else {
                  this.updateCategory(this.category)
                // this.$store.dispatch('category/updateCategory',this.category)
              }
            },
          
        },
        computed:{
            ...mapGetters('category',[
                'isCreate',
                'category'
            ]),
        
      
        }
    }
</script>
<style>

</style>
