<template>
  <AdditionalInfoBlock
    :value="`$ ${intervalAndSavingsStore.savedInUsd}`"
    text="saved in usd"
  >
    <div class="modal-headline">SAVED BY NOT HYDRATING DAILY</div>
    <div class="modal-headline">DURING THE ABOVE MENTIONED TIMESPAN,</div>
    <div class="modal-headline">THAT COULD BE USED TO BUY AND DEPOSIT MORE DRIP</div>
    <div class="modal-headline">(DEPOSIT TEX ALREADY SUBTRACTED)</div>
    <div>IN USD</div>
  </AdditionalInfoBlock>
</template>

<script setup>
import AdditionalInfoBlock from '~/components/index/IntervalAndSavings/shared/AdditionalInfoBlock'
import {useIntervalAndSavingsStore} from '~/store/IntervalAndSavings'

/**
 * @type {Store<"intervalAndSavingsStore", {}, {savedInDrip(*, *): number|*, hoursToHydrate(): *, minutesToHydrate(): *, savedInUsd(*, *): number|*, daysToHydrate(): number}, {}>}
 */
const intervalAndSavingsStore = useIntervalAndSavingsStore()
</script>
