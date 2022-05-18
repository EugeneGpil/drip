<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <IntervalToHydrate/>
      <div class="additional-info-container">
        <SavedInUsd/>
        <SavedInDrip/>
      </div>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import IntervalToHydrate from '@/components/index/IntervalAndSavings/IntervalToHydrate'
import SavedInUsd from '@/components/index/IntervalAndSavings/SavedInUsd'
import SavedInDrip from '@/components/index/IntervalAndSavings/SavedInDrip'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    IntervalToHydrate,
    SavedInUsd,
    SavedInDrip,
  },
}
</script>
