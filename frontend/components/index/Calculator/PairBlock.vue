<template>
  <div class="content-pair-block-container content-inner-container__block">
    <PairedBlock
      v-model="dripRate"
      text="DRIP PRICE"
    />
    <PairedBlock
      v-model="bnbRate"
      text="BNB PRICE"
    />
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import PairedBlock from '@/components/index/Calculator/Shared/PairedBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    PairedBlock,
  },

  computed: {
    dripRate: {
      get() {
        return this.$store.state.Calculator.dripRate
      },
      set(dripRate) {
        this.$store.dispatch('Calculator/editDripRate', dripRate)
      },
    },
    bnbRate: {
      get() {
        return this.$store.state.Calculator.bnbRate
      },
      set(bnbRate) {
        this.$store.dispatch('Calculator/editBnbRate', bnbRate)
      },
    },
  },
}
</script>

<style lang="scss" scoped>

.content-pair-block-container {
  display: flex;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
}
</style>
