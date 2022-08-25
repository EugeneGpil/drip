<template>
  <PairedBlock
    v-model="dripRate"
    text="DRIP PRICE"
  >
    <div class="modal-headline">
      THIS VALUE GET UPDATED FROM
      <a href="https://drip.community/fountain" target="_blank">https://drip.community/fountain</a>
    </div>
    <div class="modal-headline">EVERY 5 MINUTES</div>
    <div>BUT YOU MAY EDIT IT IF YOU WISH</div>
  </PairedBlock>
</template>

<script setup>
import PairedBlock from '../../../index/Calculator/shared/PairedBlock'

import {computed} from 'vue'
import {useCalculatorStore} from '~/store/Calculator'

const calculatorStore = useCalculatorStore()
const dripRate = computed({
  get: () => calculatorStore.dripRate,
  set: (dripRate) => calculatorStore.setDripRate(dripRate),
})
</script>
