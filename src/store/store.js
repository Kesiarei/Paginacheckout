// src/store/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addToCartAsync({ commit }, product) {
      // Simulação de operação assíncrona
      setTimeout(() => {
        commit('addToCart', product);
      }, 500);
    },
  },
});