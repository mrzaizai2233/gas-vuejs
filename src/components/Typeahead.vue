<template>
<div>
      <input 
            v-model="query"
            type="text" 
            class="SearchInput form-control" 
            :placeholder="placeholder"
            @keyup="isSelect=false"
        >
        <transition-group name="fade" tag="ul" class="Results" v-show="!isSelect" style="margin-bottom:0">
            <li v-for="item in filtered" :key="item._id" @click="selectItem(item)">
                <span>
                    <strong>{{ item[showKey]  }}</strong><br>
                </span>
            </li>
        </transition-group>
        <p v-show="isEmpty">Không có dữ liệu</p>
</div>

</template>

<script>    
    export default {
    
    
    
        name: 'Typeahead',
    
        data() {
            return {
                items: [],
                query: '',
                isSelect:false
            }
    
        },
        methods: {
            fetchItems() {
                if ( typeof this.source === 'string' ) {
                    fetch(this.source)
                        .then(stream => stream.json())
                        .then(data => this.items = data)
                        .catch(error => console.error(error))
                } else {
                    this.items = this.source
                }
            },
            selectItem(item){
                this.query = item[this.showKey]
                this.isSelect=true;
                this.$emit('select',item)
            }
        },
        computed:{
            filtered() {
                if(this.query.length >= this.startAt) {
                    return this.source.filter(item => {
                      if( item.hasOwnProperty(this.filterKey)  ) {
                            return item[this.filterKey]
                                .toLowerCase()
                                .indexOf(this.query.toLowerCase()) > -1
                        } else {
                            console.error(`Seems like property you passed down ${this.filterKey} doesn't exist on object ! `)
                        }
                    })
                }
            },
            isEmpty() {
                if( typeof this.filtered === 'undefined'  ) {
                    return false
                } else {
                    return this.filtered.length < 1
                }       
            }
        },
        props: {
            source: {
                type: [String, Array],
                required: true
            },
            filterKey: {
                type: String,
                required: true
            },
            startAt: {
                type: Number,
                default: 3
            },
            placeholder: {
                type: String,
                default: ''
            },
            showKey: {
                type: String,
                 required: true
            }
        },
        mounted() {
            this.fetchItems()
        },
        created(){
        },
        watch:{
            source:function(val,olvalue){
                this.items=val
            }
        }
    
    
    }
</script>