<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <div class="text-container">
        <Headline/>
        <EnterDepositAmount/>
        <AdjustHydrationGasFee/>
        <ReadyToGo/>
        <WillBeSaved/>
        <GetUpdated/>
        <HappyDripping/>
      </div>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import AdjustHydrationGasFee from '@/components/index/Instruction/components/AdjustHydrationGasFee'
import EnterDepositAmount from '@/components/index/Instruction/components/EnterDepositAmount'
import ReadyToGo from '@/components/index/Instruction/components/ReadyToGo'
import WillBeSaved from '@/components/index/Instruction/components/WillBeSaved'
import GetUpdated from '@/components/index/Instruction/components/GetUpdated'
import HappyDripping from '@/components/index/Instruction/components/HappyDripping'
import Headline from '@/components/index/Instruction/components/Headline'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    Headline,
    HappyDripping,
    GetUpdated,
    WillBeSaved,
    EnterDepositAmount,
    AdjustHydrationGasFee,
    ReadyToGo,
  },
}
</script>
