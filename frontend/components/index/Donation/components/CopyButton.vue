<template>
  <div class="data-copy-container-1 data-field-container__data-copy-container-1">
    <div class="data-copy-container-2" @click="copyWallet">
      <div
        :class="{'data-copy-container-3_copying': isCopying}"
        class="data-copy-container-3"
      >
        <div class="data-copy-text">
          {{ isCopying ? 'OK' : 'copy' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useDonationStore} from '~/store/Donation'

const isCopying = ref(false)
const donationStore = useDonationStore()
const {wallet} = donationStore

const copyWallet = () => {
  navigator.clipboard.writeText(wallet)

  isCopying.value = true

  setTimeout(() => {
    isCopying.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.data-copy-container-1 {
  align-self: flex-end;
  border-radius: 100%;
  padding: 10px 20px;
  background: radial-gradient(circle, #70D0F0 30%, #BDD3F1 40%);
}

.data-field-container__data-copy-container-1 {
  margin-right: -20px;
  margin-bottom: -5px;
  margin-top: -10px;
}

@keyframes data-copying {
  10% {
    background: lightgreen;
  }
  90% {
    background: lightgreen;
  }
}

.data-copy-container-3 {
  background: radial-gradient(circle, rgba(80, 223, 255, 1) 0%, #70D0F0);
  border-radius: 100%;
  padding: 4px 3px 3px;
  width: 25px;
  text-align: center;

  &_copying {
    animation-name: data-copying;
    animation-duration: 1s;
  }
}

.data-copy-text {
  font-size: 10px;
  text-shadow: none;
}
</style>
