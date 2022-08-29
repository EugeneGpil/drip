<template>
  <PairedBlock
    v-model="bnbRate"
    text="BNB PRICE"
  >
    <div class="modal-headline">
      THIS VALUE GET UPDATED FROM
      <a href="https://www.coingecko.com/en/coins/bnb" target="_blank">
        https://www.coingecko.com/en/coins/bnb
      </a>
    </div>
    <div class="modal-headline">EVERY 5 MINUTES</div>
    <div>BUT YOU MAY EDIT IT IF YOU WISH</div>
  </PairedBlock>
</template>

<script setup>
import PairedBlock from '~/components/index/Calculator/shared/PairedBlock'

import {computed} from 'vue'
import {useCalculatorStore} from '~/store/Calculator'

const calculatorStore = useCalculatorStore()
import stringToFloat from '~/utils/converters/stringToFloat'

const bnbRate = computed({
  get: () => calculatorStore.bnbRate,
  set: (bnbRate) => calculatorStore.setBnbRate(stringToFloat(bnbRate))
})
</script>
