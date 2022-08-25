<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <HydrationGasFee/>
      <PairBlock/>
    </section>
  </div>
</template>

<script setup>
import HydrationGasFee from '~/components/index/Calculator/components/HydrationGasFee'
import PairBlock from '~/components/index/Calculator/components/PairBlock'
</script>

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}
</style>
