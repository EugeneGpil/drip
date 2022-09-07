import {useCalculatorStore} from '~/store/Calculator'

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

export default {
  savedInUsd() {
    const calculatorStore = useCalculatorStore()

    const savedInUsd = getSavedInUsdFloat(
      this.daysToHydrate,
      calculatorStore.bnbRate,
      calculatorStore.hydrationGasFee
    )

    return getRounded(savedInUsd)
  },

  savedInDrip() {
    const calculatorStore = useCalculatorStore()

    const savedInDrip = savedInDripFloat(
      this.daysToHydrate,
      calculatorStore.bnbRate,
      calculatorStore.hydrationGasFee,
      calculatorStore.dripRate
    )

    return getRounded(savedInDrip)
  }
}
