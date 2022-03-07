 const state = () => {
  return {
    collapse: false
  };
};

const mutations = {
  updateVal(state, {key,val}) {
    state[key] = val
  },
};

const getters = {
  collapse (state) {
    return state.collapse
  }
}

export default {
  state,
  getters,
  mutations
}
