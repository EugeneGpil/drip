import actions from '~/store/Calculator/actions'

const state = () => ({
  hydrationGasFee: 0.0025,
  bnbRate: 400,
  wasBnbRateEdited: false,
  dripRate: 10,
  wasDripRateEdited: false,
})

const getters = {}

import {defineStore} from 'pinia'

export const useCalculatorStore = defineStore('calculatorStore', {
  state,
  actions,
  getters,
})
