import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    updateContent: false,
  },
  mutations: {
    update: (state) => {
      state.updateContent = true;
    }
  },
  actions: {

  },
});
