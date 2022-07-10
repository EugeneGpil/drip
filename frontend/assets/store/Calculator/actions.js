import getCurrencyRate from '../../actions/getCurrencyRate'
import getFromLocalStorage from '../../actions/getFromLocalStorage'
import setWithLocalStorage from '../../actions/setWithLocalStorage'

let updateRateInterval

// noinspection JSUnusedGlobalSymbols
export default {
  async getBnbRate({commit}) {
    await getCurrencyRate({
      commit,
      axios: this.$axios,
      currency_from_name: 'usd',
      currency_to_name: 'bnb',
      state_property: 'bnbRate',
    })
  },

  async getDripRate({commit}) {
    await getCurrencyRate({
      commit,
      axios: this.$axios,
      currency_from_name: 'usd',
      currency_to_name: 'drip',
      state_property: 'dripRate',
    })
  },

  async getRates({dispatch}) {
    await Promise.all([
      dispatch('getBnbRate'),
      dispatch('getDripRate'),
    ])
  },

  getDepositAmount({commit}) {
    getFromLocalStorage('deposit_amount', (depositAmount) => {
      commit('set', ['depositAmount', parseFloat(depositAmount)])
    })
  },

  setDepositAmount({commit}, depositAmount) {
    window?.localStorage.setItem('deposit_amount', depositAmount)
    commit('set', ['depositAmount', depositAmount])
  },

  getHydrationGasFee({commit}) {
    getFromLocalStorage('hydration_gas_fee', (hydrationGasFee) => {
      commit('set', ['hydrationGasFee', parseFloat(hydrationGasFee)])
    })
  },

  setHydrationGasFee({commit}, hydrationGasFee) {
    window?.localStorage.setItem('hydration_gas_fee', hydrationGasFee)
    commit('set', ['hydrationGasFee', hydrationGasFee])
  },

  startUpdateRatesInterval({state, dispatch}) {
    updateRateInterval = setInterval(() => {
      if (!state.wasDripRateEdited) {
        dispatch('getDripRate')
      }
      if (!state.wasBnbRateEdited) {
        dispatch('getBnbRate')
      }
    }, 1000 * 60 * 5)
  },

  clearUpdateRatesInterval() {
    clearInterval(updateRateInterval)
  },

  editBnbRate({commit}, bnbRate) {
    commit('set', ['bnbRate', bnbRate])
    commit('set', ['wasBnbRateEdited', true])
  },

  editDripRate({commit}, dripRate) {
    commit('set', ['dripRate', dripRate])
    commit('set', ['wasDripRateEdited', true])
  }
}
