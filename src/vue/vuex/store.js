import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    todos: [1,2,3,4]
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;

