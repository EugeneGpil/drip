<template>
  <Modal v-if="loginErrorMessage" @close="loginErrorMessage = ''">
    <div class="modal-headline">{{ loginErrorMessage }}</div>
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
    loginErrorMessage: {
      get() {
        return this.$store.state.Login.loginErrorMessage
      },
      set(loginErrorMessage) {
        this.$store.commit('Login/set', ['loginErrorMessage', loginErrorMessage])
      },
    },
  },
}
</script>
