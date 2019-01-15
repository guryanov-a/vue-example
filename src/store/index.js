import 'es6-promise/auto'; // polyfill for IE
import Vue from 'vue';
import Vuex from 'vuex';

import nav from './modules/nav';
import articles from './modules/articles';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    nav,
    articles,
  },
});

export default store;
