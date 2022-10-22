import getCurrencyRate from '~/utils/fetchers/getCurrencyRate'
import toFloatString from '~/utils/converters/toFloatString'
import getFromLocalStorage from '~/utils/localStorage/getFromLocalStorage'
import setWithLocalStorage from '~/utils/localStorage/setWithLocalStorage'

let updateRateInterval

export default {
  setBnbRate(bnbRate) {
    this.bnbRate = bnbRate
    this.wasBnbRateEdited = true
  },

  setDripRate(dripRate) {
    this.dripRate = dripRate
    this.wasDripRateEdited = true
  },

  async getBnbRate() {
    await getCurrencyRate.bind(this)('usd', 'bnb', (rate) => {
      this.bnbRate = toFloatString(rate)
    })
  },

  async getDripRate() {
    await getCurrencyRate.bind(this)('usd', 'drip', (rate) => {
      this.dripRate = toFloatString(rate)
    })
  },

  async getRates() {
    await Promise.all([
      this.getBnbRate(),
      this.getDripRate(),
    ])
  },

  getDepositAmount() {
    getFromLocalStorage('deposit_amount', (depositAmount) => {
      this.depositAmount = parseFloat(depositAmount)
    })
  },

  setDepositAmount(depositAmount) {
    setWithLocalStorage('deposit_amount', depositAmount, () =>
      this.depositAmount = depositAmount
    )
  },

  setHydrationGasFee(hydrationGasFee) {
    setWithLocalStorage('hydration_gas_fee', hydrationGasFee, () =>
      this.hydrationGasFee = hydrationGasFee
    )
  },

  getHydrationGasFee() {
    getFromLocalStorage('hydration_gas_fee', (hydrationGasFee) =>
      this.hydrationGasFee = parseFloat(hydrationGasFee)
    )
  },

  startUpdateRatesInterval() {
    updateRateInterval = setInterval(() => {
      if (!this.wasDripRateEdited) {
        this.getDripRate()
      }
      if (!this.wasBnbRateEdited) {
        this.getBnbRate()
      }
    }, 1000 * 60 * 5)
  },

  clearUpdateRatesInterval() {
    clearInterval(updateRateInterval)
  },
}
