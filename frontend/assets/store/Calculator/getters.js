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

  fullMinutesToHydrate(state, getters) {
    const dripPerDay = state.depositAmount / 100;
    const dripPerHour = dripPerDay / 24;
    const dripPerMinute = dripPerHour / 60;
    const minutesToHydrateFloat = getters.amountToHydrate / dripPerMinute;
    return Math.floor(minutesToHydrateFloat)
  },

  fullHoursToHydrate(state, getters) {
    const hoursToHydrateFloat = getters.fullMinutesToHydrate / 60;
    return Math.floor(hoursToHydrateFloat);
  },

  daysToHydrate(state, getters) {
    const daysToHydrateFloat = getters.fullHoursToHydrate / 24;
    return Math.floor(daysToHydrateFloat);
  },

  hoursToHydrate(state, getters) {
    return getters.fullHoursToHydrate - getters.daysToHydrate * 24;
  },

  minutesToHydrate(state, getters) {
    return getters.fullMinutesToHydrate - getters.fullHoursToHydrate * 60;
  },
}
