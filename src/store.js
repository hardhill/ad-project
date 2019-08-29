import Vue from 'vue'
import Vuex from 'vuex'
import ads from '@/models/ads'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ads,
    
  }
})
