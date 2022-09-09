<template>
  <MainResultBlock
    :value="`${daysToHydrate}D ${hoursToHydrate}H ${minutesToHydrate}M`"
    :isInfoVisible="true"
    title="INTERVAL TO HYDRATE"
  >
    <div class="modal-headline">INTERVAL TO HYDRATE:</div>
    <div>{{ daysToHydrate }} DAYS</div>
    <div>{{ hoursToHydrate }} HOURS</div>
    <div>{{ minutesToHydrate }} MINUTES</div>
  </MainResultBlock>
</template>

<script setup>
import MainResultBlock from '~/components/index/shared/MainResultBlock'

import {useIntervalAndSavingsStore} from '~/store/IntervalAndSavings'

/**
 * @type {Store<"intervalAndSavingsStore", {}, {hoursToHydrate(): *, minutesToHydrate(): *, daysToHydrate(): number}, {}>}
 */
const intervalAndSavingsStore = useIntervalAndSavingsStore();

import {computed} from 'vue'

const daysToHydrate = computed(() => intervalAndSavingsStore.daysToHydrate)
const hoursToHydrate = computed(() => intervalAndSavingsStore.hoursToHydrate)
const minutesToHydrate = computed(() => intervalAndSavingsStore.minutesToHydrate)
</script>
