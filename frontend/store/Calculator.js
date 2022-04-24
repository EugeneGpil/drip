// noinspection NpmUsedModulesInstalled

import calculatorActions from '@/assets/store/Calculator/actions';

export const state = () => ({
  bnbRate: 400,
  dripRate: 35,
  hydrationGasFee: 0.0025,
  depositAmount: 10,
})

export const mutations = {
  set(state, [property, value]) {
    state[property] = value
  },
}

export const actions = calculatorActions
