<template>
  <MainInputBlock
    v-model="hydrationGasFee"
    text="HYDRATION GAS FEE"
    currency="BNB"
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
    hydrationGasFee: {
      get() {
        return this.$store.state.Calculator.hydrationGasFee
      },
      set(hydrationGasFee) {
        this.$store.dispatch('Calculator/setHydrationGasFee', hydrationGasFee)
      },
    },
  },
}
</script>
