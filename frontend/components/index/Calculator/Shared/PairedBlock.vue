<template>
  <div class="content-pair-block">
    <div class="
                content-pair-block__headline
                content-main-headline
                content-pair-block-headline
              ">
      {{ text }}
    </div>
    <input
      v-model="inputValue"
      class="main-value-input content-pair-block-input"
    >
    <div class="main-value-underline pair-value-underline"></div>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import stringToFloat from '@/assets/converters/stringToFloat'

// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    inputValue: {
      get() {
        return `$ ${this.value}`
      },
      set(inputValue) {
        this.$emit('input', stringToFloat(inputValue))
      },
    }
  }
}
</script>

