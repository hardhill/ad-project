<template>
  <!--  -->
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
              <div class="card-link">
                <v-btn text :to="'/ad/'+ad.id">{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap="true">
        <v-flex xs12 sm6 md4 lg3 v-for="ad in ads" :key="ad.id">
          <v-card elevation="5" raised>
            <v-img class="white--text" height="200px" :src="ad.imageSrc">
              <v-card-title class="align-end fill-height">{{ad.title}}</v-card-title>
            </v-img>
            <v-card-text>{{ad.description}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised outlined="true">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "Squirrel",
          description: "Squirrel on tree",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Sky",
          description: "Ski is on",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Bird",
          description: "Funny bird",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Planet",
          description: "Planet Earth",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: rgba(0, 0, 0, 0.33);
}
</style>>
