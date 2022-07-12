<template>
  <font-awesome-icon v-if="isAttemptingToLogin" class="wallet-icon fa-spin" icon="yin-yang"/>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    isAttemptingToLogin() {
      return this.$store.state.Login.isAttemptingToLogin
    },
  },
}
</script>
