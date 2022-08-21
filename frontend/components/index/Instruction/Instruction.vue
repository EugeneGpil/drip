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

<script setup>
import AdjustHydrationGasFee from '../../index/Instruction/components/AdjustHydrationGasFee'
import EnterDepositAmount from '../../index/Instruction/components/EnterDepositAmount'
import ReadyToGo from '../../index/Instruction/components/ReadyToGo'
import WillBeSaved from '../../index/Instruction/components/WillBeSaved'
import GetUpdated from '../../index/Instruction/components/GetUpdated'
import HappyDripping from '../../index/Instruction/components/HappyDripping'
import Headline from '../../index/Instruction/components/Headline'
</script>
