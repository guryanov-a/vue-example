import axios from 'axios';

const state = {
  items: [],
  loadedArticle: {},
};

const mutations = {
  setArticles(state, payload) {
    state.items = payload.items;
  },
  setArticle(state, payload) {
    state.loadedArticle = payload.article;
  },
};

const actions = {
  loadArticles({ commit }) {
    axios.get('/api/tiles')
      .then((response) => {
        const tilesWithImages = response.data.tiles.map((tile) => {
          let img;

          if (tile.type === 'normal') {
            img = 'http://placekitten.com/g/640/400';
          } else {
            img = 'http://placekitten.com/g/1280/400';
          }

          return {
            ...tile,
            img,
          };
        });

        commit('setArticles', { items: tilesWithImages });
      });
  },
  loadArticle({ commit }, payload) {
    axios.get('/api/tiles')
      .then((response) => {
        const article = response.data.tiles.find((tile) => {
          return tile.id === payload.id;
        });

        commit('setArticle', { article });
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
