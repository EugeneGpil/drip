// noinspection JSUnusedGlobalSymbols

export default {
  checkIsWalletInstalled({commit}) {
    /**
     * @type window
     * @property {Object} ethereum
     *
     * @typedef process
     * @property {Boolean} client
     */
    const isWalletInstalled = process.browser && !!window.ethereum
    commit('set', ['isWalletInstalled', isWalletInstalled])
  }
}
