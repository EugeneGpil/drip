// noinspection JSUnusedGlobalSymbols

import tryToLogin from './Actions/tryToLogin'

export default {
  tryToLogin,

  setAccount({commit}, account) {
    window?.localStorage.setItem('account', account)
    commit('set', ['account', account])
  },

  getAccount({commit}) {
    const account = window?.localStorage.getItem('account')
    account !== undefined && commit('set', ['account', account])
  },
}
