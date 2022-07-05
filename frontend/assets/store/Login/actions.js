// noinspection JSUnusedGlobalSymbols

export default {
  checkIsMetamaskInstalled({commit}) {
    /**
     * @type window
     * @property {Object} ethereum
     *
     * @typedef process
     * @property {Boolean} client
     */
    const isMetamaskInstalled = process.browser && !!window.ethereum
    commit('set', ['isMetamaskInstalled', isMetamaskInstalled])
  }
}
