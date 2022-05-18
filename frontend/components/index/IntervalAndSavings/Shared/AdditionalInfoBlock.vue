<template>
  <div class="additional-info-block">
    <div class="additional-info-text">{{ text }}</div>
    <div class="additional-info-value">{{ value }}</div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }
}
</script>
