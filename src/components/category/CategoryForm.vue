<template>
<!-- <form @submit.prevent="saveProduct"> -->
  <div class="m-form__section m-form">
        <div :class="{'form-group m-form__group': true, 'has-danger': errors.has('name') }">
            <label for="example_input_full_name">
                Tên Danh Mục:
            </label>
            <input type="text" :class="{'form-control m-input': true, 'form-control-danger': errors.has('name') }" placeholder="Tên danh mục" name="name" v-model="category.name" v-validate="'required'">
            <input type="hidden" class="form-control m-input" placeholder="Tên danh mục" v-model="category._id">
            <div v-show="errors.has('name')" class="form-control-feedback">
				Trường dữ liệu này không thể để trống :( !
			</div>
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
            <Button  :category="category" ></Button>
            <button type="reset" class="btn m-btn--pill btn-outline-metal m-btn m-btn--custom m-btn--outline-2x" @click="removeCategory()">
                Làm Mới
            </button>
        </div>
    </div>
<!-- </form> -->
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import Button from './CategoryForm/Button'
    export default {
        name:'CategoryForm',
        data(){
            return {

            }
        },
        provide () {
            return {
                $validator: this.$validator
            }
        },
        methods:{
            ...mapActions('category',[
                'removeCategory'
            ]),
           
           
        },
        computed:{
            ...mapGetters('category',[
                'category'
            ]),
        
      
        },
        components:{
            Button
        },        created(){
            
          
        }
    }
</script>
<style>

</style>
