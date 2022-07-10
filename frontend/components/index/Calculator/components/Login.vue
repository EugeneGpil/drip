<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <div class="login" @click="tryLogin">
      <font-awesome-icon v-if="isAttemptingToLogin" class="wallet-icon fa-spin" icon="yin-yang"/>
      <font-awesome-icon v-else class="wallet-icon" icon="wallet"/>
    </div>

    <Modal v-if="isIncorrectNetworkModalVisible" @close="isIncorrectNetworkModalVisible = false">
      <div class="modal-headline">INCORRECT NETWORK</div>
      <div class="modal-headline">PLEASE CONNECT TO BINANCE SMART CHAIN (BEP20)</div>
    </Modal>

    <Modal v-if="loginErrorMessage" @close="loginErrorMessage = ''">
      <div class="modal-headline">{{ loginErrorMessage }}</div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../../layout/Modal'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isIncorrectNetworkModalVisible: false,
      isAttemptingToLogin: false,
      loginErrorMessage: '',
    }
  },
  methods: {
    async tryLogin() {
      // noinspection JSUnresolvedVariable
      if (!process.browser || this.isAttemptingToLogin) {
        return
      }

      if (!window.ethereum) {
        return window.open('https://metamask.io', "_blank")
      }

      /**
       * @typedef window.ethereum
       * @property {String} networkVersion
       */
      if (window.ethereum.networkVersion !== process.env.ETHEREUM_NETWORK_VERSION) {
        return this.isIncorrectNetworkModalVisible = true
      }

      this.isAttemptingToLogin = true
      let accounts
      try {
        accounts = await ethereum.request({method: 'eth_requestAccounts'})
      } catch (e) {
        this.isAttemptingToLogin = false
        return this.loginErrorMessage = e.message
      }
      this.isAttemptingToLogin = false
      const account = accounts[0]
      console.log(account)
    }
  },
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
