import Vuex from 'vuex';
import axios from 'axios';

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload.articles;
    }
  },
  actions: {
    getServerArticles({ commit }) {
      axios.get('/api/tiles')
        .then((response) => {
          commit('setArticles', {articles: response});
        })
    }
  }
});
