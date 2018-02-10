<template>
              <button type="submit" :class="isSend?'btn btn-primary m-loader m-loader--light m-loader--right':'btn btn-primary'" @click="submit()">
                {{isCreate?'Tạo':'Sửa'}}
            </button>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

    export default {
        name:'Button',
        props:['category'],
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
                console.log(this.$validator)
                 this.$validator.validateAll().then((result) => {
                    if (result) {
                    // eslint-disable-next-line
                    alert('Form Submitted!');
                    } else {
                        alert('fiald')
                    }
                });
              if(this.isCreate){
                  this.isSend = true;
                  this.addCategory(this.category).then(()=>{
                      this.isSend = false;
                  })
                // this.$store.dispatch('category/addCategory',this.category)
              } else {
                  this.updateCategory(this.category).then(()=>{
                      this.isSend = false;
                  })
                // this.$store.dispatch('category/updateCategory',this.category)
              }
            },
          
        },
    }
</script>