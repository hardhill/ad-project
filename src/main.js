import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    var firebaseConfig = {
      apiKey: "AIzaSyAKUw6gnnFMieDSQ7-fCgHwHq3337lUvVw",
      authDomain: "ad-project-3e884.firebaseapp.com",
      databaseURL: "https://ad-project-3e884.firebaseio.com",
      projectId: "ad-project-3e884",
      storageBucket: "",
      messagingSenderId: "697526754304",
      appId: "1:697526754304:web:633c50a0da8aacd2"
    };
    fb.initializeApp(firebaseConfig)
  }
}).$mount('#app')
