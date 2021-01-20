import Vue from 'vue'
import Vuex from 'vuex'
import appetiserModule from './modules/appetiser/state';

Vue.use(Vuex)


export default new Vuex.Store({

  modules: {
    appt: appetiserModule
  }
})