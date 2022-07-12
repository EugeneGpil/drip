<template>
  <div class="content-outer-container">
    <Login/>
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

<script>
import PairBlock from '../../index/Calculator/components/PairBlock'
import MainResultBlock from '../../index/shared/MainResultBlock'
import HydrationGasFee from '../../index/Calculator/components/HydrationGasFee'
import DepositAmount from '../../index/Calculator/components/DepositAmount'
import Login from '../Login/Login'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    HydrationGasFee,
    PairBlock,
    DepositAmount,
    MainResultBlock,
    Login,
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

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}
</style>
