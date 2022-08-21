<template>
  <div class="data-line-outer-container">
    <div class="data-line-inner-container">
      <div class="data-line-inner-container__data-line data-line">
        {{ wallet }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {useDonationStore} from '~/store/Donation'

const {wallet} = useDonationStore()
</script>

<style lang="scss" scoped>
.data-line-inner-container {
  background: radial-gradient(
      circle,
      rgba(235, 240, 247, 1) 6%,
      rgba(189, 211, 241, 1) 25%
  );
  border-radius: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__data-line {
    transform: matrix(1, 0.09, -0.1, 1, 0, 0);
  }
}

.data-line {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 17px;
  width: 140px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }

  @media (min-width: 300px) {
    width: 185px;
  }

  @media (min-width: 350px) {
    width: 210px;
  }

  @media (min-width: 400px) {
    width: 240px;
  }

  @media (min-width: 450px) {
    width: 280px;
  }
}
</style>
