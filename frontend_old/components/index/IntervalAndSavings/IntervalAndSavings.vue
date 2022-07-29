<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <IntervalToHydrate/>
      <div class="additional-info-container">
        <SavedInUsd/>
        <SavedInDrip/>
      </div>
    </section>
  </div>
</template>

<script>
import IntervalToHydrate from '../../index/IntervalAndSavings/components/IntervalToHydrate'
import SavedInUsd from '../../index/IntervalAndSavings/components/SavedInUsd'
import SavedInDrip from '../../index/IntervalAndSavings/components/SavedInDrip'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    IntervalToHydrate,
    SavedInUsd,
    SavedInDrip,
  },
}
</script>

<style lang="scss" scoped>
.additional-info-container {
  width: 100%;

  @media (min-width: 350px) {
    margin-top: 5px;
  }
}
</style>
