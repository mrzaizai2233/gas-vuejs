<template>
  <div class="m-form__section m-form">
        <div class="form-group m-form__group">
            <label for="example_input_full_name">
                Tên Danh Mục:
            </label>
            <input type="text" class="form-control m-input" placeholder="Tên danh mục" v-model="categorySelect.name">
            <input type="hidden" class="form-control m-input" placeholder="Tên danh mục" v-model="categorySelect._id">
            <span class="m-form__help">

            </span>
        </div>
        <div class="form-group m-form__group">
            <label class="inherit">
                Trạng Thái:
            </label>
            <span class="m-switch m-switch--icon">
                <label>
                    <input type="checkbox" checked="checked" v-model="categorySelect.status">
                    <span></span>
                </label>
            </span>
        </div>
        <div class="form-group m-form__group">
            <button type="reset" class="btn btn-primary" @click="submit()">
                {{isCreate?'Tạo':'Sửa'}}
            </button>
            <button type="reset" class="btn btn-secondary" @click="reset()">
                Làm Mới
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'CategoryForm',
        data(){
            return {

            }
        },
        methods:{
            submit:function(){
              if(this.isCreate){
                this.$store.dispatch('category/addCategory',this.categorySelect)
              } else {
                this.$store.dispatch('category/updateCategory',this.categorySelect)
              }
            },
            reset(){
                this.$store.dispatch('category/removeCategory')
            }
        },
        computed:{
          categorySelect(){
              return  this.$store.getters['category/category']?this.$store.getters['category/category']:{_id:'',name:'',status:true}
          },
          isCreate(){
              return this.$store.getters['category/isCreate']
          }
        }
    }
</script>
<style>

</style>
