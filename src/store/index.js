import Vue from 'vue';
import Vuex from 'vuex';

import contactsModul from './modules/contactsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { contacts: contactsModul }
});
