<template>
  <font-awesome-icon
    v-if="!isAttemptingToLogin && account"
    class="wallet-check-icon"
    icon="circle-check"
  />
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    isAttemptingToLogin() {
      return this.$store.state.Login.isAttemptingToLogin
    },
    account() {
      return this.$store.state.Login.account
    },
  },
}
</script>

<style lang="scss" scoped>
.wallet-check-icon {
  color: green;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
