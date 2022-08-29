import getCurrencyRate from '~/utils/fetchers/getCurrencyRate'
import toFloatString from '~/utils/converters/toFloatString'

export default {
  setHydrationGasFee(hydrationGasFee) {
    this.hydrationGasFee = hydrationGasFee
  },

  setBnbRate(bnbRate) {
    this.bnbRate = bnbRate
    this.wasBnbRateEdited = true
  },

  setDripRate(dripRate) {
    this.dripRate = dripRate
    this.wasDripRateEdited = true
  },

  setDepositAmount(depositAmount) {
    window?.localStorage.setItem('deposit_amount', depositAmount)
    this.depositAmount = depositAmount
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
}
