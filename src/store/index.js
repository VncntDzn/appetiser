import Vue from 'vue'
import Vuex from 'vuex'
import appetiserModule from './modules/appetiser/state';

import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)


export default new Vuex.Store({
  //to prevent losing the data after refreshing the page
  plugins: [createPersistedState({
    //specify only the module you want to be persistent
    paths: ['appt']
  })],
  modules: {
    appt: appetiserModule
  }
})