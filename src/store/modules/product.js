// initial state
const state = () => ({
  all: []
});

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    console.log(111);
  }
};

// mutations
const mutations = {
  setProducts(states = state, products) {
    states.all = products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
