<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login" @click="tryLogin">
    <img
      :class="{'black-and-white': !isMetamaskInstalled}"
      src="~/static/img/metamask_logo.svg"
      alt="metamask"
    >
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    isMetamaskInstalled() {
      return this.$store.state.Login.isMetamaskInstalled
    },
  },
  methods: {
    tryLogin() {
      // noinspection JSUnresolvedVariable
      if (!process.browser) {
        return
      }

      if (!this.isMetamaskInstalled) {
        return window.open('https://metamask.io', "_blank")
      }

      /**
       * @typedef window.ethereum
       * @property {String} networkVersion
       */
      console.log(window.ethereum.networkVersion)
    }
  },
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
