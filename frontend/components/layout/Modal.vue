<template>
  <div class="modal-container" @click="close">
    <div class="modal-container__content-inner-container content-inner-container">
      <slot/>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
const close = (e) => {
  if (e.target.classList.contains('modal-container')) {
    emit('close')
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0004;

  &__content-inner-container {
    padding: 50.5px 35px;
    border-radius: 25px;
    align-items: flex-end;
    line-height: 23px;
    min-width: 70%;
    max-width: 414.4px;

    @media (min-width: 500px) {
      min-width: 414.4px;
    }
  }
}
</style>
