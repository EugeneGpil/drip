<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
      <Calculator/>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Menu from '@/components/index/Menu'
import Calculator from '@/components/index/Calculator';

export default {
  components: {
    Menu,
    Calculator,
  },
}
</script>

