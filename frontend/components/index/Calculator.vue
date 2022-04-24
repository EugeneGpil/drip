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
      <div class="content-main-block content-inner-container__block">
        <div class="main-value-container main-value-result-container">
          <div class="
                main-value-result-container__headline
                content-main-headline
                main-value-result-headline
              ">
            THE AMOUNT TO HYDRATE PROPERLY
          </div>
          <div class="value-result">0.777 DRIP</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import MainInputBlock from '@/components/index/Calculator/MainInputBlock'
import PairBlock from '@/components/index/Calculator/PairBlock'

export default {
  components: {
    MainInputBlock,
    PairBlock
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
  },
}
</script>
