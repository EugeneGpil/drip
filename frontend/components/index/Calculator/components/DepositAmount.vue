<template>
  <MainInputBlock
    v-model="depositAmount"
    text="DEPOSIT AMOUNT"
    currency="DRIP"
  >
    <div class="modal-headline">YOU MAY ADJUST THIS VALUE ONLY ONCE</div>
    <div class="modal-headline">IT WILL BE SAVED IN YOUR BROWSER</div>
  </MainInputBlock>
</template>

<script setup>
import MainInputBlock from '~/components/index/Calculator/shared/MainInputBlock'

import {computed} from 'vue'
import {useCalculatorStore} from '~/store/Calculator'

const calculatorStore = useCalculatorStore()
const depositAmount = computed({
  get: () => calculatorStore.depositAmount,
  set: depositAmount => calculatorStore.setDepositAmount(depositAmount)
})
</script>
