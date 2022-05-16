<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <IntervalToHydrate/>
      <div class="additional-info-container">
        <AdditionalInfoBlock
          :value="`$ ${savedInUsd}`"
          text="saved in usd"
        />
        <AdditionalInfoBlock
          :value="`${savedInDrip} DRIP`"
          text="saved in drip"
        />
      </div>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import IntervalToHydrate from '@/components/index/IntervalAndSavings/IntervalToHydrate'
import AdditionalInfoBlock from '@/components/index/IntervalAndSavings/AdditionalInfoBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    IntervalToHydrate,
    AdditionalInfoBlock,
  },

  computed: {
    savedInUsd() {
      return this.$store.getters['IntervalAndSavings/savedInUsd']
    },
    savedInDrip() {
      return this.$store.getters['IntervalAndSavings/savedInDrip']
    },
  },
}
</script>
