<template>
  <div>
    <div class="login" @click="loginLogout">
      <WalletLoadingIcon/>
      <WalletIcon/>
      <WalletCheckIcon/>
    </div>
    <IncorrectNetworkModal/>
    <LoginErrorModal/>
  </div>
</template>

<script>
import IncorrectNetworkModal from './components/IncorrectNetworkModal'
import LoginErrorModal from './components/LoginErrorModal'
import WalletCheckIcon from './components/WalletCheckIcon'
import WalletLoadingIcon from './components/WalletLoadingIcon'
import WalletIcon from './components/WalletIcon'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    WalletIcon,
    WalletLoadingIcon,
    WalletCheckIcon,
    LoginErrorModal,
    IncorrectNetworkModal,
  },
  methods: {
    loginLogout() {
      this.$store.dispatch('Login/loginLogout')
    },
  },
  mounted() {
    this.$store.dispatch('Login/getAccount')
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: none;
  position: absolute;
  top: -60px;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  border: solid 2px #ACE;
  //display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BDF;
  box-sizing: border-box;
}
</style>
