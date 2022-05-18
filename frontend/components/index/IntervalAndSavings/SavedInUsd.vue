<template>
  <AdditionalInfoBlock
    :value="`$ ${savedInUsd}`"
    text="saved in usd"
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
    savedInUsd() {
      return this.$store.getters['IntervalAndSavings/savedInUsd']
    },
  },
}
</script>
