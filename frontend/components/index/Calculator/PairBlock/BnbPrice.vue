<template>
  <PairedBlock
    v-model="bnbRate"
    text="BNB PRICE"
  >
    <div class="modal-headline">
      THIS VALUE GET UPDATED FROM
      <a href="https://www.coingecko.com/en/coins/bnb" target="_blank">
        https://www.coingecko.com/en/coins/bnb
      </a>
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
