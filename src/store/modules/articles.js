import axios from 'axios';

const state = {
  items: [],
};

const mutations = {
  setArticles(state, payload) {
    state.articles = payload.articles;
  }
};

const actions = {
  getServerArticles({ commit }) {
    axios.get('/api/tiles')
      .then((response) => {
        commit('setArticles', {articles: response});
      })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
