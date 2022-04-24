<template>
  <div class="content-main-block content-inner-container__block">
    <div class="main-value-container main-value-result-container">
      <div class="
        main-value-result-container__headline
        content-main-headline
        main-value-result-headline
      ">
        THE AMOUNT TO HYDRATE PROPERLY
      </div>
      <div class="value-result">{{ amountToHydrate }} DRIP</div>
    </div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    amountToHydrate() {
      return this.$store.getters['Calculator/amountToHydrate']
    },
  },
}
</script>
