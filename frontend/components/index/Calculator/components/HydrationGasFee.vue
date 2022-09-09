<template>
  <MainInputBlock
    v-model="hydrationGasFee"
    text="HYDRATION GAS FEE"
    currency="BNB"
  >
    <div class="modal-headline">YOU MAY ADJUST THIS VALUE ONLY ONCE</div>
    <div class="modal-headline">IT WILL BE SAVED IN YOUR BROWSER</div>
  </MainInputBlock>
</template>

<script setup>
import {computed} from 'vue'
import {useCalculatorStore} from '~/store/Calculator'
const calculatorStore = useCalculatorStore()
const hydrationGasFee = computed({
  get: () => calculatorStore.hydrationGasFee,
  set: calculatorStore.setHydrationGasFee,
})

import MainInputBlock from '~/components/index/Calculator/shared/MainInputBlock'
</script>
