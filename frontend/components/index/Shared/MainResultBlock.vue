<template>
  <div class="content-main-block content-inner-container__block">
    <div class="main-value-container main-value-result-container">
      <div class="
        main-value-result-container__headline
        content-main-headline
        main-value-result-headline
      ">
        {{ title }}
      </div>
      <div class="value-result">{{ value }}</div>
    </div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
