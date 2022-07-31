<template>
  <Modal v-if="isIncorrectNetworkModalVisible" @close="isIncorrectNetworkModalVisible = false">
    <div class="modal-headline">INCORRECT NETWORK</div>
    <div class="modal-headline">PLEASE CONNECT TO BINANCE SMART CHAIN (BEP20)</div>
  </Modal>
</template>

<script>
import Modal from '../../../layout/Modal'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    Modal,
  },
  computed: {
    isIncorrectNetworkModalVisible: {
      get() {
        return this.$store.state.Login.isIncorrectNetworkModalVisible
      },
      set(isIncorrectNetworkModalVisible) {
        this.$store.commit(
          'Login/set',
          ['isIncorrectNetworkModalVisible', isIncorrectNetworkModalVisible]
        )
      },
    },
  },
}
</script>
