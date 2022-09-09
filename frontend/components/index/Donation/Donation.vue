<template>
  <div id="donation" class="content-outer-container">
    <section class="content-inner-container">
      <div class="text-container">
        <Headline/>
        <Description/>
        <div class="data-field-container">
          <CopyButton/>
          <Wallet/>
        </div>
        <BuddyAddress/>
      </div>
    </section>
    <Contacts/>
  </div>
</template>

<script setup>
import Headline from '~/components/index/Donation/components/Headline'
import Description from '~/components/index/Donation/components/Description'
import BuddyAddress from '~/components/index/Donation/components/BuddyAddress'
import Contacts from '~/components/index/Donation/components/Contacts'
import Wallet from '~/components/index/Donation/components/Wallet'
import CopyButton from '~/components/index/Donation/components/CopyButton'
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
