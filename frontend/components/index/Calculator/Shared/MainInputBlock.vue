<template>
  <div class="content-main-block content-inner-container__block">
    <div class="content-main-block__headline content-main-headline">
      {{ text }}
    </div>
    <div class="main-value-container">
      <input
        v-model="inputValue"
        ref="input"
        class="main-value-input"
      >
      <div class="main-value-underline"></div>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import stringToFloat from '@/assets/converters/stringToFloat'

// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    currency: {
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
        this.$nextTick(() => {
          const input = this.$refs.input
          const valueStr = this.value.toString()
          const length = valueStr.length
          input?.focus()
          input?.setSelectionRange(length, length)
        })

        return `${this.value} ${this.currency}`
      },
      set(inputValue) {
        this.$emit('input', stringToFloat(inputValue))
      }
    }
  },
}
</script>
