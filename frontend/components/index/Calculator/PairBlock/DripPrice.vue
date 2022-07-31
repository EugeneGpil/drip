<template>
  <PairedBlock
    v-model="dripRate"
    text="DRIP PRICE"
  >
    <div class="modal-headline">
      THIS VALUE GET UPDATED FROM
      <a href="https://drip.community/fountain" target="_blank">https://drip.community/fountain</a>
    </div>
    <div class="modal-headline">EVERY 5 MINUTES</div>
    <div>BUT YOU MAY EDIT IT IF YOU WISH</div>
  </PairedBlock>
</template>

<script>
import PairedBlock from '../../../index/Calculator/shared/PairedBlock'

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
  },
}
</script>
