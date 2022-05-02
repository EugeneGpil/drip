<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <MainInputBlock
        v-model="hydrationGasFee"
        text="HYDRATION GAS FEE"
        currency="BNB"
      />
      <PairBlock/>
      <MainInputBlock
        v-model="depositAmount"
        text="DEPOSIT AMOUNT"
        currency="DRIP"
      />
      <MainResultBlock/>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import MainInputBlock from '@/components/index/Calculator/MainInputBlock'
import PairBlock from '@/components/index/Calculator/PairBlock'
import MainResultBlock from '@/components/index/Calculator/MainResultBlock'

export default {
  components: {
    MainInputBlock,
    PairBlock,
    MainResultBlock,
  },

  computed: {
    bnbRate() {
      return this.$store.state.Calculator.bnbRate
    },
    dripRate() {
      return this.$store.state.Calculator.dripRate
    },
    hydrationGasFee: {
      get() {
        return this.$store.state.Calculator.hydrationGasFee
      },
      set(hydrationGasFee) {
        this.$store.dispatch('Calculator/setHydrationGasFee', hydrationGasFee)
      },
    },
    depositAmount: {
      get() {
        return this.$store.state.Calculator.depositAmount
      },
      set(depositAmount) {
        this.$store.dispatch('Calculator/setDepositAmount', depositAmount)
      },
    },
  },

  async fetch() {
    await this.$store.dispatch('Calculator/getRates')
  },

  mounted() {
    this.$store.dispatch('Calculator/getDepositAmount')
    this.$store.dispatch('Calculator/getHydrationGasFee')
    this.$store.dispatch('Calculator/startUpdateRatesInterval')
  },

  beforeDestroy() {
    this.$store.dispatch('Calculator/clearUpdateRatesInterval')
  },
}
</script>
