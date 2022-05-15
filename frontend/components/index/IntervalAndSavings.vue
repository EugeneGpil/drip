<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <IntervalToHydrate/>
      <div class="additional-info-container">
        <AdditionalInfoBlock text="saving on gas" value="$ 343.54"/>
        <AdditionalInfoBlock text="this equal to" value="143.239 DRIP"/>
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
}
</script>
