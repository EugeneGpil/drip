<template>
  <div id="donation" class="content-outer-container">
    <section class="content-inner-container">
      <div class="text-container">
        <!--        <Headline/>-->
        <!--        <Description/>-->
        <div class="data-field-container">
          <!--          <CopyButton/>-->
          <!--          <Wallet/>-->
        </div>
        <!--        <BuddyAddress/>-->
      </div>
    </section>
    <!--    <Contacts/>-->
  </div>
</template>

<script>
// import Headline from '../../index/Donation/components/Headline'
// import Description from '../../index/Donation/components/Description'
// import CopyButton from '../../index/Donation/components/CopyButton'
// import Wallet from '../../index/Donation/components/Wallet'
// import BuddyAddress from '../../index/Donation/components/BuddyAddress'
// import Contacts from '../../index/Donation/components/Contacts'

// noinspection JSUnusedGlobalSymbols
export default {
  // components: {
  //   Contacts,
  //   BuddyAddress,
  //   Wallet,
  //   Description,
  //   Headline,
  //   CopyButton,
  // },
}
</script>

<style lang="scss" scoped>
.content-outer-container {
  position: relative;
}

.data-field-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
</style>
