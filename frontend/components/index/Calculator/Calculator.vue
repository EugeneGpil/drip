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
 * @type {Store<"calculatorStore", {depositAmount: string, hydrationGasFee: string, bnbRate: string, wasBnbRateEdited: boolean, wasDripRateEdited: boolean, dripRate: string}, {amountToHydrate(*): *}, {getBnbRate(): Promise<void>, getHydrationGasFee(): void, setBnbRate(*): void, getDepositAmount(): void, setDepositAmount(*): void, startUpdateRatesInterval(): void, setDripRate(*): void, getRates(): Promise<void>, clearUpdateRatesInterval(): void, getDripRate(): Promise<void>, setHydrationGasFee(*): void}>}
 */
const calculatorStore = useCalculatorStore()

await calculatorStore.getRates()

import {onMounted, onUnmounted} from 'vue'

onMounted(() => {
  calculatorStore.getRates()
  calculatorStore.getDepositAmount()
  calculatorStore.getHydrationGasFee()
  calculatorStore.startUpdateRatesInterval()
})

onUnmounted(() => {
  calculatorStore.clearUpdateRatesInterval()
})
</script>

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}
</style>
