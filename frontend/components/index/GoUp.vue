<template>
  <div>
    <div class="go-up-arrow-container" @click="goUp">
      <FontAwesomeIcon class="go-up-arrow" icon="arrow-up-long"/>
      <img class="go-up-small-logo" src="/img/small_logo.webp" alt="small_logo">
    </div>
  </div>
</template>

<script setup>
import goToTopOfElement from '../../assets/functions/goToTopOfElement'

const goUp = () => goToTopOfElement(document.getElementsByTagName('body')[0])
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
