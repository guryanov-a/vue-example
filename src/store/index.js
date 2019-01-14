import Vuex from 'vuex';

import nav from './modules/nav';
import articles from './modules/articles';

export const store = new Vuex.Store({
  modules: {
    nav,
    articles,
  },
});
