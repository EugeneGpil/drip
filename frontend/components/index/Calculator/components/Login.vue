<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login">
    <img
      :class="{
        'black-and-white': !$store.state.Login.isMetamaskInstalled
      }"
      src="~/static/img/metamask_logo.svg"
      alt="metamask"
    >
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  mounted() {
    this.$store.dispatch('Login/checkIsMetamaskInstalled')
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: -60px;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.black-and-white {
  filter: grayscale(100%)
}
</style>
