<template>
  <div
    class="modal-container"
    @click="close"
  >
    <div class="
      modal-container__content-inner-container
      content-inner-container
    ">
      <slot/>
    </div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  methods: {
    close(e) {
      if (e.target.classList.contains('modal-container')) {
        this.$emit('close')
      }
    }
  }
}
</script>
