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
import MainResultBlock from '~/components/index/shared/MainResultBlock'

import {useCalculatorStore} from '~/store/Calculator'

/**
 * @type {Store<"calculatorStore", {depositAmount: number, hydrationGasFee: number, bnbRate: number, wasBnbRateEdited: boolean, wasDripRateEdited: boolean, dripRate: number}, {amountToHydrate(*): *}, {getBnbRate(): Promise<void>, setBnbRate(*): void, setDepositAmount(*): void, setDripRate(*): void, getRates(): Promise<void>, setHydrationGasFee(*): void, getDripRate(): Promise<void>}>}
 */
const calculatorStore = useCalculatorStore()

await calculatorStore.getRates()

import {onMounted} from 'vue'
onMounted(() => {
  calculatorStore.getRates()
})
</script>

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}
</style>
