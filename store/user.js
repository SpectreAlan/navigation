export const state = () => {
  return { info: {} };
};

export const mutations = {
  setInfo(state, data) {
    state.info = data;
  },
};
