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
}
