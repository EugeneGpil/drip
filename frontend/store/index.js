export const state = () => ({
  isIntervalModalOpen: false,
})

export const mutations = {
  set(state, [property, value]) {
    state[property] = value
  },
}
