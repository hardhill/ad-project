<template>
  <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">Create new ad</h1>
          <v-form v-model="valid" ref="form" class="mb-3">
                  <v-text-field
                    label="Title"
                    name="title"
                    required
                    :rules="[v=>!!v||'Title required']"
                    type="text"
                    v-model="title"
                  ></v-text-field>
                  <v-textarea
                    required
                    label="Description"
                    name="description"
                    :rules="[v=>!!v||'Description required']"
                    type="text"
                    v-model="description"
                    ></v-textarea>
          </v-form>
          <v-layout row mb-3>
            <v-flex xs12>
              <v-btn class="warning">Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row mb-3>
            <v-flex xs12>
              <v-img src="" height="100"/>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch label="Ad to promo?" v-model="promo"></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn 
              class="success" 
              @click="createAd"
              :disabled="!valid"
              >Create Ad</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name:'newAd',
  data(){
    return {
      valid:false,
      title:'',
      description:'',
      promo:false,
    }
  },
  methods:{
    createAd(){
      if(this.$refs.form.validate()){
        const ad = {
          title:this.title,
          description:this.description,
          promo:this.promo,
          imageSrc:'https://bit.ua/wp-content/uploads/2017/06/ivars-krutainis-146071-800x360.jpg'
        }
        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

<style>

</style>