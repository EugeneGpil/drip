<template>
  <MainInputBlock
    v-model="depositAmount"
    text="DEPOSIT AMOUNT"
    currency="DRIP"
  />
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import MainInputBlock from '@/components/index/Calculator/Shared/MainInputBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    MainInputBlock,
  },

  computed: {
    depositAmount: {
      get() {
        return this.$store.state.Calculator.depositAmount
      },
      set(depositAmount) {
        this.$store.dispatch('Calculator/depositAmount', depositAmount)
      },
    },
  },
}
</script>
