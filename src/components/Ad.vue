<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="OneAd.imageSrc" height="300px"></v-img>
        </v-card>
        <v-card-text>
          <h2>{{OneAd.title}}</h2>
          <p>{{OneAd.description}}</p>
          
        </v-card-text>
        <v-card-actions class="mr-2">
          <v-spacer></v-spacer>
          <v-btn class="warning" text>Edit</v-btn>
          <v-btn class="success" @click="Increment">Buy</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  computed:{
      OneAd(){
          const id = this.id
          return this.$store.getters.GetAdById(id)
      },
      
  }
};
</script>

<style scope>
</style>