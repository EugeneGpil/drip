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
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Headline from '@/components/index/Donation/components/Headline'
import Description from '@/components/index/Donation/components/Description'
import CopyButton from '@/components/index/Donation/components/CopyButton'
import Wallet from '@/components/index/Donation/components/Wallet'
import BuddyAddress from '@/components/index/Donation/components/BuddyAddress'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    BuddyAddress,
    Wallet,
    Description,
    Headline,
    CopyButton,
  },
}
</script>

<style lang="scss" scoped>
.data-field-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
</style>
