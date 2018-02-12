<template>
              <button type="submit" :class="{'btn m-btn--pill btn-outline-primary m-btn m-btn--custom m-btn--outline-2x':true,'m-loader m-loader--brand':isSend}" @click="submit()">
                {{isCreate?'Tạo':'Sửa'}}
            </button>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

    export default {
        name:'Button',
        props:['category'],
        inject: ['$validator'],
        data(){
            return {
                isSend:false
            }
        },
        computed:{
            ...mapGetters('category',[
                'isCreate'
            ]),
        },
        methods:{
            ...mapActions('category',[
                'addCategory',
                'updateCategory',
            ]),
            submit:function(){
                this.$validator.validateAll().then((result) => {
                    if(result){
                        if(this.isCreate){
                            this.isSend = true;
                            this.addCategory(this.category).then(()=>{
                                this.isSend = false;
                            })
                        } else {
                            this.updateCategory(this.category).then(()=>{
                                this.isSend = false;
                            })
                        }
                    }
                })

            },
          
        },
        created(){
        }
    }
</script>