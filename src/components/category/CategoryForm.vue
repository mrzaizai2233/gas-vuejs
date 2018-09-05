<template>
  <v-flex md6 sm12>
    <v-card>
      <v-card-text>
        <v-text-field label="Tên" v-model="category.name" required></v-text-field>
        <v-switch label="Trạng thái" v-model="category.status"></v-switch>
  
      </v-card-text>
      <v-toolbar>
        <div class="m--pull-left">
          <Button></Button>
  
        </div>
        <div class="m--pull-right">
          <button type="submit" :class="{'btn m-btn--pill btn-outline-primary m-btn m-btn--custom m-btn--outline-2x m--pull-right':true}" @click="submit()">
                  Hủy
              </button>
        </div>
  
      </v-toolbar>
    </v-card>
  </v-flex>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from "vuex";
  import Button from "./CategoryForm/Button";
  export default {
    name: "CategoryForm",
    data() {
      return {
  
      };
    },
    provide() {
      return {
        $validator: this.$validator
      };
    },
    methods: {
      ...mapActions("category", ["removeCategory"])
    },
    computed: {
      ...mapGetters("category", ["category"])
    },
    components: {
      Button
    }
  };
</script>

<style>
  
</style>
