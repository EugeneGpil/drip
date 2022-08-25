<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
      <Calculator/>
      <About/>
      <Instruction/>
      <Donation/>
      <GoUp/>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/index/Menu'
import Calculator from '../components/index/Calculator/Calculator'
import About from '../components/index/About'
import GoUp from '../components/index/GoUp'
import Donation from '../components/index/Donation/Donation'
import Instruction from '~/components/index/Instruction/Instruction'
</script>

<style lang="scss" scoped>
.outer-wrapper {
  background-image: url('/img/overall_background.webp');
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
    padding-top: 55px;
  }
}
</style>
