<template>
  <div class="content-pair-block-container content-inner-container__block">
    <DripPrice/>
    <BnbPrice/>
  </div>
</template>

<script>
import DripPrice from '../../../index/Calculator/PairBlock/DripPrice'
import BnbPrice from '../../../index/Calculator/PairBlock/BnbPrice'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    DripPrice,
    BnbPrice,
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
