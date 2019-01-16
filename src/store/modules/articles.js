import axios from 'axios';

const state = {
  items: [],
};

const mutations = {
  setArticles(state, payload) {
    state.items = payload.items;
  }
};

const actions = {
  getServerArticles({ commit }) {
    axios.get('/api/tiles')
      .then((response) => {
        const tilesWithImages = response.data.tiles.map((tile) => {
          let img;

          if (tile.type === 'normal') {
            img = 'http://placekitten.com/g/400/300';
          } else {
            img = 'http://placekitten.com/g/800/300';
          }

          return {
            ...tile,
            img,
          };
        });

        commit('setArticles', { items: tilesWithImages });
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
