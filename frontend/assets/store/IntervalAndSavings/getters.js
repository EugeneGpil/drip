// noinspection JSUnusedGlobalSymbols

const getFullMinutesToHydrate = (depositAmount, amountToHydrate) => {
  const dripPerDay = depositAmount / 100;
  const dripPerHour = dripPerDay / 24;
  const dripPerMinute = dripPerHour / 60;
  const minutesToHydrateFloat = amountToHydrate / dripPerMinute;
  return Math.floor(minutesToHydrateFloat)
}

const getFullHoursToHydrate = (depositAmount, amountToHydrate) => {
  const hoursToHydrateFloat = getFullMinutesToHydrate(depositAmount, amountToHydrate) / 60;
  return Math.floor(hoursToHydrateFloat);
}

export default {
  daysToHydrate(state, getters, rootState, rootGetters) {
    const depositAmount = rootState.Calculator.depositAmount
    const amountToHydrate = rootGetters['Calculator/amountToHydrate']
    const daysToHydrateFloat = getFullHoursToHydrate(depositAmount, amountToHydrate) / 24;
    return Math.floor(daysToHydrateFloat)
  },

  hoursToHydrate(state, getters, rootState, rootGetters) {
    const depositAmount = rootState.Calculator.depositAmount
    const amountToHydrate = rootGetters['Calculator/amountToHydrate']
    return getFullHoursToHydrate(depositAmount, amountToHydrate) - getters.daysToHydrate * 24;
  },

  minutesToHydrate(state, getters, rootState, rootGetters) {
    const depositAmount = rootState.Calculator.depositAmount
    const amountToHydrate = rootGetters['Calculator/amountToHydrate']
    const fullMinutesToHydrate = getFullMinutesToHydrate(depositAmount, amountToHydrate)
    const fullHoursToHydrate = getFullHoursToHydrate(depositAmount, amountToHydrate)
    return fullMinutesToHydrate - fullHoursToHydrate * 60;
  },

  savedInUsd(state, getters, rootState) {
    const daysToHydrate = getters.daysToHydrate
    const bnbPrice = rootState.Calculator.bnbRate
    const gasFee = rootState.Calculator.hydrationGasFee
    const gasFeeInUsd = gasFee * bnbPrice
    const allDaysGasFeeInUsd = daysToHydrate * gasFeeInUsd
    return allDaysGasFeeInUsd / 100 * 90
  },

  savedInDrip(state, getters, rootState) {
    const dripPrice = rootState.Calculator.dripRate
    return getters.savedInUsd / dripPrice
  }
}
