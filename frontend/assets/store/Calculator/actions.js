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
    getFromLocalStorage({
      commit,
      local_storage_key: 'deposit_amount',
      state_property: 'depositAmount',
      presenter: (value) => parseFloat(value),
    })
  },

  setDepositAmount({commit}, depositAmount) {
    setWithLocalStorage({
      commit,
      value: depositAmount,
      local_storage_key: 'deposit_amount',
      state_property: 'depositAmount',
    })
  },

  getHydrationGasFee({commit}) {
    getFromLocalStorage({
      commit,
      local_storage_key: 'hydration_gas_fee',
      state_property: 'hydrationGasFee',
      presenter: (value) => parseFloat(value),
    })
  },

  setHydrationGasFee({commit}, hydrationGasFee) {
    setWithLocalStorage({
      commit,
      value: hydrationGasFee,
      local_storage_key: 'hydration_gas_fee',
      state_property: 'hydrationGasFee',
    })
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
