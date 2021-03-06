// noinspection JSUnusedGlobalSymbols

import getDefaultMutations from '../assets/functions/getDefaultMutations'
import calculatorActions from '../assets/store/Calculator/actions'
import calculatorGetters from '../assets/store/Calculator/getters'

export const state = () => ({
  bnbRate: 400,
  dripRate: 35,
  hydrationGasFee: 0.0025,
  depositAmount: 10,
  wasBnbRateEdited: false,
  wasDripRateEdited: false,
})

export const mutations = getDefaultMutations()

export const actions = calculatorActions
export const getters = calculatorGetters
