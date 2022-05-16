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

<!--suppress NpmUsedModulesInstalled -->
<script>
import MainResultBlock from '@/components/index/Shared/MainResultBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    MainResultBlock,
  },

  computed: {
    daysToHydrate() {
      return this.$store.getters['IntervalAndSavings/daysToHydrate']
    },
    hoursToHydrate() {
      return this.$store.getters['IntervalAndSavings/hoursToHydrate']
    },
    minutesToHydrate() {
      return this.$store.getters['IntervalAndSavings/minutesToHydrate']
    },
  },
}
</script>
