// noinspection NpmUsedModulesInstalled

import getCurrencyRate from '@/assets/actions/getCurrencyRate'
import getFromLocalStorage from '@/assets/actions/getFromLocalStorage'
import setWithLocalStorage from '@/assets/actions/setWithLocalStorage'

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
}
