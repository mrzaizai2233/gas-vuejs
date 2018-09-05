<template>
  <v-container fluid>
    <v-layout row wrap>

      <category-list></category-list>
      <categoryForm></categoryForm>
    </v-layout>
  </v-container>


</template>
<script>
  import categoryList from '@/components/category/CategoryList'
  import categoryForm from '@/components/category/CategoryForm'
  import {mapActions} from 'vuex';

  export default {
    name: 'Category',

    computed: {},
    methods: {
      ...mapActions([
        'setPageTitle'
      ])
    },
    created() {
      this.setPageTitle('Danh Mục')
    },
    components: {
      categoryList,
      categoryForm
    }
  }
</script>
<style>
  .inherit {
    display: inherit;
  }
</style>
