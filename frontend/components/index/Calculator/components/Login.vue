<!--suppress HtmlUnknownTarget -->
<template>
  <div class="login" @click="tryLogin">
    <font-awesome-icon class="wallet-icon" icon="wallet"/>
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
  border-radius: 100%;
  border: solid 2px #ACE;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BDF;
  box-sizing: border-box;
}
.wallet-icon {
  font-size: 25px;
  color: #356;
}
</style>
