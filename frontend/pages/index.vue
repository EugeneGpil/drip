<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
      <Calculator/>
      <IntervalAndSavings/>
      <About/>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Menu from '@/components/index/Menu'
import Calculator from '@/components/index/Calculator/Calculator'
import IntervalAndSavings from '@/components/index/IntervalAndSavings/IntervalAndSavings'
import About from '@/components/index/About'

export default {
  components: {
    Menu,
    Calculator,
    IntervalAndSavings,
    About,
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
