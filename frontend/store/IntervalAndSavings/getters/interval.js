const getFullMinutesToHydrate = (depositAmount, amountToHydrate) => {
  const dripPerDay = depositAmount / 100
  const dripPerHour = dripPerDay / 24
  const dripPerMinute = dripPerHour / 60
  const minutesToHydrateFloat = amountToHydrate / dripPerMinute
  return Math.floor(minutesToHydrateFloat)
}

const getFullHoursToHydrate = (depositAmount, amountToHydrate) => {
  const hoursToHydrateFloat = getFullMinutesToHydrate(depositAmount, amountToHydrate) / 60;
  return Math.floor(hoursToHydrateFloat)
}

import {useCalculatorStore} from '~/store/Calculator'

export default {
  daysToHydrate() {
    const calculatorStore = useCalculatorStore()

    const depositAmount = calculatorStore.depositAmount
    const amountToHydrate = calculatorStore.amountToHydrate
    const daysToHydrateFloat = getFullHoursToHydrate(depositAmount, amountToHydrate) / 24

    return Math.floor(daysToHydrateFloat)
  },

  hoursToHydrate() {
    const calculatorStore = useCalculatorStore()

    const depositAmount = calculatorStore.depositAmount
    const amountToHydrate = calculatorStore.amountToHydrate

    return getFullHoursToHydrate(depositAmount, amountToHydrate) - this.daysToHydrate * 24
  },

  minutesToHydrate() {
    const calculatorStore = useCalculatorStore()

    const depositAmount = calculatorStore.depositAmount
    const amountToHydrate = calculatorStore.amountToHydrate
    const fullMinutesToHydrate = getFullMinutesToHydrate(depositAmount, amountToHydrate)
    const fullHoursToHydrate = getFullHoursToHydrate(depositAmount, amountToHydrate)

    return fullMinutesToHydrate - fullHoursToHydrate * 60
  },
}
