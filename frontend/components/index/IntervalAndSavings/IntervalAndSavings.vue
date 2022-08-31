<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <IntervalToHydrate/>
      <div class="additional-info-container">
        <!--        <SavedInUsd/>-->
        <!--        <SavedInDrip/>-->
      </div>
    </section>
  </div>
</template>

<script setup>
import IntervalToHydrate from '~/components/index/IntervalAndSavings/components/IntervalToHydrate'
// import SavedInUsd from '../../index/IntervalAndSavings/components/SavedInUsd'
// import SavedInDrip from '../../index/IntervalAndSavings/components/SavedInDrip'
</script>

<style lang="scss" scoped>
.additional-info-container {
  width: 100%;

  @media (min-width: 350px) {
    margin-top: 5px;
  }
}
</style>
