<template>
  <AdditionalInfoBlock
    :value="`${savedInDrip} DRIP`"
    text="saved in drip"
  >
    <div class="modal-headline">SAVED BY NOT HYDRATING DAILY</div>
    <div class="modal-headline">CONSIDERING TAXES AND GAS FEES FOR DEPOSITING DRIP</div>
    <div class="modal-headline">(BUT NOT CONSIDERING GAS FEES FOR SWAPPING)</div>
    <div>IN DRIP</div>
  </AdditionalInfoBlock>
</template>

<script>
import AdditionalInfoBlock from '../../../index/IntervalAndSavings/shared/AdditionalInfoBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    AdditionalInfoBlock,
  },

  computed: {
    savedInDrip() {
      return this.$store.getters['IntervalAndSavings/savedInDrip']
    },
  },
}
</script>
