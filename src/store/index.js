import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navOpen: true
  },
  mutations: {
    toggleNav (state) {
      state.navOpen = !state.navOpen
    }
  },
  actions: {
    toggleNavDrawer ({ commit }) {
      commit('toggleNav')
    }
  }
})
