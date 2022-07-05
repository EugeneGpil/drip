<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login">
    <img src="~/static/img/metamask_logo.svg" alt="metamask"/>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  async mounted() {
    /**
     * @typedef window
     * @property ethereum
     */
    if (!window.ethereum) {
      return
    }
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
}
</style>
