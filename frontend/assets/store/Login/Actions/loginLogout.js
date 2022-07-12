export default async ({state, commit, dispatch}) => {
  // noinspection JSUnresolvedVariable
  if (!process.browser || state.isAttemptingToLogin) {
    return
  }

  if (state.account) {
    return dispatch('setAccount', undefined)
  }

  if (!window.ethereum) {
    return window.open('https://metamask.io', "_blank")
  }

  /**
   * @typedef window.ethereum
   * @property {String} networkVersion
   */
  if (window.ethereum.networkVersion !== process.env.ETHEREUM_NETWORK_VERSION) {
    return commit('set', ['isIncorrectNetworkModalVisible', true])
  }

  commit('set', ['isAttemptingToLogin', true])
  let accounts
  try {
    accounts = await ethereum.request({method: 'eth_requestAccounts'})
  } catch (e) {
    commit('set', ['isAttemptingToLogin', false])
    return commit('set', ['loginErrorMessage', e.message])
  }
  commit('set', ['isAttemptingToLogin', false])
  const account = accounts[0]
  dispatch('setAccount', account)
}
