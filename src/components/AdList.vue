<template>
  <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">Ad List</h1>
          <v-card class="elevation-10 mb-5"
          v-for="ad in myAds"
          :key="ad.id">
            <v-layout row>
              <v-flex xs4>
                <v-img height="160px" :src="ad.imageSrc"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-text>
                  <h2 class="text--primary">{{ad.title}}</h2>
                    <p>{{ad.description}}</p>
                </v-card-text>
                <v-card-actions class="mr-3">
                  <v-spacer/>
                  <v-btn class="info" :to="'/ad/'+ad.id">Open</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return {}
  },
  computed:{
    myAds(){
      return this.$store.getters.MY_ADS
    }
  }
}
</script>

<style>

</style>