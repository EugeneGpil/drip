<template>
  <div class="content-pair-block-container content-inner-container__block">
    <DripPrice/>
    <BnbPrice/>
  </div>
</template>

<script setup>
import DripPrice from '~/components/index/Calculator/PairBlock/DripPrice'
import BnbPrice from '~/components/index/Calculator/PairBlock/BnbPrice'
</script>

<style lang="scss" scoped>

.content-pair-block-container {
  display: flex;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
}
</style>
