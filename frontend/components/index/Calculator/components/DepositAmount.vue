<template>
  <MainInputBlock
    v-model="depositAmount"
    text="DEPOSIT AMOUNT"
    currency="DRIP"
  >
    <div class="modal-headline">YOU MAY ADJUST THIS VALUE ONLY ONCE</div>
    <div class="modal-headline">IT WILL BE SAVED IN YOUR BROWSER</div>
  </MainInputBlock>
</template>

<script>
import MainInputBlock from '../../../index/Calculator/shared/MainInputBlock'

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
        this.$store.dispatch('Calculator/setDepositAmount', depositAmount)
      },
    },
  },
}
</script>
