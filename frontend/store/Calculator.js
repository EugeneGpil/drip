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

export const getters = {
  amountToHydrate(state) {
    const coefficient = 94.73684

    const hydrationGasFeeInUsd = state.hydrationGasFee * state.bnbRate
    const usdToHydrate = hydrationGasFeeInUsd * coefficient
    const dripToHydrate = usdToHydrate / state.dripRate
    const intDripToHydrateX1000 = Math.round(dripToHydrate * 1000)
    return intDripToHydrateX1000 / 1000
  }
}
