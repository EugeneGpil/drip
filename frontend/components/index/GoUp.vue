<template>
  <div class="go-up-arrow-container" @click="goToTopOfElement('body')">
    <FontAwesomeIcon class="go-up-arrow" icon="arrow-up-long"/>
    <img class="go-up-small-logo" src="/img/small_logo.webp" alt="small_logo">
  </div>
</template>

<script setup>
import {useGoToTopOfElement} from '~/composables/goToTopOfElement'

const {goToTopOfElement} = useGoToTopOfElement()
</script>

<style lang="scss" scoped>
.go-up-arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.go-up-arrow {
  font-size: 20px;
  margin-top: 15px;

  @media (min-width: 300px) {
    font-size: 25px;
  }
}

.go-up-small-logo {
  width: 40px;
  margin-top: 5px;

  @media (min-width: 300px) {
    width: 50px;
  }
}
</style>
