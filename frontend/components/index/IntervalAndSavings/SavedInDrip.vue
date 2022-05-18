<template>
  <AdditionalInfoBlock
    :value="`${savedInDrip} DRIP`"
    text="saved in drip"
  />
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
    savedInDrip() {
      return this.$store.getters['IntervalAndSavings/savedInDrip']
    },
  },
}
</script>
