<template>
  <div class="outer-wrapper">
    <div class="content-wrapper">
      <Menu/>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/index/Menu'
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
