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
          return {
            ...tile,
            img: 'http://placekitten.com/200/300',
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
