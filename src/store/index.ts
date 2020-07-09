import Vue from 'vue';
import Vuex from 'vuex';
import user from "../domains/user/state/state"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
