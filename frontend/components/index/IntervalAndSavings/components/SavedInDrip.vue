<template>
  <AdditionalInfoBlock
    :value="`${intervalAndSavingsStore.savedInDrip} DRIP`"
    text="saved in drip"
  >
    <div class="modal-headline">SAVED BY NOT HYDRATING DAILY</div>
    <div class="modal-headline">CONSIDERING TAXES AND GAS FEES FOR DEPOSITING DRIP</div>
    <div class="modal-headline">(BUT NOT CONSIDERING GAS FEES FOR SWAPPING)</div>
    <div>IN DRIP</div>
  </AdditionalInfoBlock>
</template>

<script setup>
import AdditionalInfoBlock from '~/components/index/IntervalAndSavings/shared/AdditionalInfoBlock'
import {useIntervalAndSavingsStore} from '~/store/IntervalAndSavings'

/**
 * @type {Store<"intervalAndSavingsStore", {}, {savedInDrip(): number|*, hoursToHydrate(): *, minutesToHydrate(): *, savedInUsd(): number|*, daysToHydrate(): number}, {}>}
 */
const intervalAndSavingsStore = useIntervalAndSavingsStore()
</script>
