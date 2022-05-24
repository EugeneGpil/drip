<template>
  <AdditionalInfoBlock
    :value="`$ ${savedInUsd}`"
    text="saved in usd"
  >
    <div class="modal-headline">SAVED BY NOT HYDRATING DAILY</div>
    <div class="modal-headline">DURING THE ABOVE MENTIONED TIMESPAN,</div>
    <div class="modal-headline">THAT COULD BE USED TO BUY AND DEPOSIT MORE DRIP</div>
    <div class="modal-headline">(DEPOSIT TEX ALREADY SUBTRACTED)</div>
    <div>IN USD</div>
  </AdditionalInfoBlock>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import AdditionalInfoBlock from '@/components/index/IntervalAndSavings/Shared/AdditionalInfoBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    AdditionalInfoBlock,
  },

  computed: {
    savedInUsd() {
      return this.$store.getters['IntervalAndSavings/savedInUsd']
    },
  },
}
</script>
