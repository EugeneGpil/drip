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
import PairedBlock from '@/components/index/Calculator/PairBlock/PairedBlock'

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
        this.$store.commit('Calculator/set', ['dripRate', dripRate])
      },
    },
    bnbRate: {
      get() {
        return this.$store.state.Calculator.bnbRate
      },
      set(bnbRate) {
        this.$store.commit('Calculator/set', ['bnbRate', bnbRate])
      },
    },
  },
}
</script>
