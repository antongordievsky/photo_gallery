import Vue from 'vue';
import Vuex from 'vuex';
import user from "../domains/user/state/state"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
// @todo Remove me
//
// import Vue from "vue"
// import Vuex from "vuex"
// import {createDirectStore} from "direct-vuex"
// import userState from "../domains/user/state/state"
//
// Vue.use(Vuex);
// const {store, rootActionContext, moduleActionContext} = createDirectStore({
//   modules: {
//     userState,
//   }
// });
//
// // Export the direct-store instead of the classic Vuex store.
// export default store
// // The following exports will be used to enable types in the
// // implementation of actions.
// export {rootActionContext, moduleActionContext}
// // The following lines enable types in the injected store '$store'.
// export type AppStore = typeof store
// declare module "vuex" {
//   interface Store<S> {
//     direct: AppStore
//   }
// }
//
//
// // store.ts
// import Vue from "vue"
// import Vuex from "vuex"
// import { createDirectStore } from "direct-vuex"
// import module1 from "./module1"
// Vue.use(Vuex)
// const { store, rootActionContext, moduleActionContext } = createDirectStore({
//   modules: {
//     module1
//   }
// })
// // Export the direct-store instead of the classic Vuex store.
// export default store
// // The following exports will be used to enable types in the
// // implementation of actions.
// export { rootActionContext, moduleActionContext }
// // The following lines enable types in the injected store '$store'.
// export type AppStore = typeof store
// declare module "vuex" {
//   interface Store<S> {
//     direct: AppStore
//   }
// }
