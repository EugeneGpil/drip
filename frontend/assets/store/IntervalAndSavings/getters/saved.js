const getSavedInUsdFloat = (daysToHydrate, bnbRate, hydrationGasFee) => {
  const gasFeeInUsd = hydrationGasFee * bnbRate
  const allDaysGasFeeInUsd = daysToHydrate * gasFeeInUsd
  return allDaysGasFeeInUsd / 100 * 90
}

const savedInDripFloat = (daysToHydrate, bnbRate, hydrationGasFee, dripRate) => {
  const savedInUsd = getSavedInUsdFloat(daysToHydrate, bnbRate, hydrationGasFee)
  return savedInUsd / dripRate
}

const getRounded = (value) => {
  if (value <= 0) {
    return 0
  }

  let valueToCompare = value
  let multiplyBy = 1
  while (valueToCompare < 1) {
    multiplyBy *= 10
    valueToCompare = value * multiplyBy
  }

  return Math.floor(value * multiplyBy * 100) / (multiplyBy * 100)
}

// noinspection JSUnusedGlobalSymbols
export default {
  savedInUsd(state, getters, rootState) {
    const savedInUsd = getSavedInUsdFloat(
      getters.daysToHydrate,
      rootState.Calculator.bnbRate,
      rootState.Calculator.hydrationGasFee
    )

    return getRounded(savedInUsd)
  },

  savedInDrip(state, getters, rootState) {
    const savedInDrip = savedInDripFloat(
      getters.daysToHydrate,
      rootState.Calculator.bnbRate,
      rootState.Calculator.hydrationGasFee,
      rootState.Calculator.dripRate
    )

    return getRounded(savedInDrip)
  }
}
