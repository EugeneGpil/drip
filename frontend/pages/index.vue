<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
      <Calculator/>
      <IntervalAndSavings/>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Menu from '@/components/index/Menu'
import Calculator from '@/components/index/Calculator'
import IntervalAndSavings from '@/components/index/IntervalAndSavings'

export default {
  components: {
    Menu,
    Calculator,
    IntervalAndSavings,
  },
}
</script>

