<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <HydrationGasFee/>
      <PairBlock/>
      <DepositAmount/>
      <MainResultBlock
        :value="`${amountToHydrate} DRIP`"
        title="AMOUNT TO HYDRATE PROPERLY"
      />
    </section>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import PairBlock from '@/components/index/Calculator/components/PairBlock'
import MainResultBlock from '@/components/index/shared/MainResultBlock'
import HydrationGasFee from '@/components/index/Calculator/components/HydrationGasFee'
import DepositAmount from '@/components/index/Calculator/components/DepositAmount'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    HydrationGasFee,
    PairBlock,
    DepositAmount,
    MainResultBlock,
  },

  computed: {
    amountToHydrate() {
      return this.$store.getters['Calculator/amountToHydrate']
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
