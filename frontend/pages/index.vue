<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
      <Calculator/>
      <IntervalAndSavings/>
      <About/>
      <Instruction/>
      <Donation/>
      <GoUp/>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Menu from '@/components/index/Menu'
import Calculator from '@/components/index/Calculator/Calculator'
import IntervalAndSavings from '@/components/index/IntervalAndSavings/IntervalAndSavings'
import About from '@/components/index/About'
import Instruction from '@/components/index/Instruction/Instruction'
import GoUp from '@/components/index/GoUp'
import Donation from '@/components/index/Donation/Donation'

export default {
  components: {
    Menu,
    Calculator,
    IntervalAndSavings,
    About,
    Instruction,
    Donation,
    GoUp,
  },
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  //noinspection CssUnknownTarget
  background-image: url('~/static/img/overall_background.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;

  @media (min-width: 750px) {
    padding-top: 15px;
  }
}
</style>
