// noinspection JSUnusedGlobalSymbols

import loginLogout from './Actions/loginLogout'

export default {
  loginLogout,

  setAccount({commit}, account) {
    account === undefined && window?.localStorage.removeItem('account')
    account !== undefined && window?.localStorage.setItem('account', account)
    commit('set', ['account', account])
  },

  getAccount({commit}) {
    const account = window?.localStorage.getItem('account')
    account !== undefined && commit('set', ['account', account])
  },
}
