<template>
  <v-flex md6 sm12 px-2>
    <v-data-table :headers="headers" :items="desserts" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td ><v-switch
          :label="props.item.status===1?`Bật`:`Tắt`"
          v-model="props.item.status"
          v-on:change="toggleStatus(props.item._id)"
        ></v-switch></td>
        <td>
          <button :class="{'btn m-btn--pill btn-outline-primary m-btn m-btn--custom m-btn--outline-2x':true}" @click="selectCategory(props.item)">
                Sửa
          </button>
        </td>
</template>
  </v-data-table>
    </v-flex>

</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    name: 'CategoryList',
    data() {
      return {
        headers: [{
            text: 'Tên',
            value: 'name'
          },
          {
            text: 'Trạng Thái',
            value: 'status'
          },
          {
            text: 'Hành động',
            value: 'status'
          },
  
        ],
  
      }
    }
  
    ,
    created: function() {
      if (this.desserts <= 0) {
        this.getAllCategory()
      }
    },
    computed: {
      ...mapGetters({
        desserts: 'category/categorys'
      })
  
    },
    methods: {
      ...mapActions('category', {
        toggleStatus: 'changeStatusCategory',
        deleteCategory: 'deleteCategory',
        selectCategory: 'selectCategory',
        getAllCategory: 'getAllCategory'
      }),
      show() {
        console.log("show")
      }
    }
  }
</script>
