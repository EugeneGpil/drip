<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <HydrationGasFee/>
      <PairBlock/>
      <DepositAmount/>
      <MainResultBlock
        :value="`${calculatorStore.amountToHydrate} DRIP`"
        title="AMOUNT TO HYDRATE PROPERLY"
      />
    </section>
  </div>
</template>

<script setup>
import HydrationGasFee from '~/components/index/Calculator/components/HydrationGasFee'
import PairBlock from '~/components/index/Calculator/components/PairBlock'
import DepositAmount from '~/components/index/Calculator/components/DepositAmount'
import MainResultBlock from '../../index/shared/MainResultBlock'

import {useCalculatorStore} from '~/store/Calculator'

/**
 * @type {Store<"calculatorStore", {depositAmount: number, hydrationGasFee: number, bnbRate: number, wasBnbRateEdited: boolean, wasDripRateEdited: boolean, dripRate: number}, {amountToHydrate(*): *}, {setBnbRate(*): void, setDepositAmount(*): void, setDripRate(*): void, setHydrationGasFee(*): void}>}
 */
const calculatorStore = useCalculatorStore()
</script>

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}
</style>
