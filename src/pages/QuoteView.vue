<template>
  <v-container fluid>
    <v-layout row wrap>
      <QuoteList></QuoteList>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import QuoteList from "@/components/quote/QuoteList";
export default {
  name: "QuoteView",
  computed: {
    ...mapGetters("quote", ["quotes"])
  },
  components: {
    QuoteList
  }
};
</script>
<style scoped>
</style>
