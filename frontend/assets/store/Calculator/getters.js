// noinspection JSUnusedGlobalSymbols
export default {
  amountToHydrate(state) {
    const coefficient = 94.73684

    const hydrationGasFeeInUsd = state.hydrationGasFee * state.bnbRate
    const usdToHydrate = hydrationGasFeeInUsd * coefficient
    const dripToHydrate = usdToHydrate / state.dripRate
    const intDripToHydrateX1000 = Math.round(dripToHydrate * 1000)
    return intDripToHydrateX1000 / 1000
  },
}
