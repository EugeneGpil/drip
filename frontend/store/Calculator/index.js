const state = () => ({
  hydrationGasFee: 0.0025,
  bnbRate: '400',
  wasBnbRateEdited: false,
  dripRate: '10',
  wasDripRateEdited: false,
  depositAmount: 10,
})

import {defineStore} from 'pinia'
import actions from '~/store/Calculator/actions'
import getters from '~/store/Calculator/getters'

export const useCalculatorStore = defineStore('calculatorStore', {
  state,
  actions,
  getters,
})
