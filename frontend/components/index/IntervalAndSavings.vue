<template>
  <div class="content-outer-container">
    <div class="content-inner-container">
      <MainResultBlock
        :value="`${daysToHydrate}D ${hoursToHydrate}H ${minutesToHydrate}M`"
        :isInfoVisible="true"
        :isModalOpen="isIntervalModalOpen"
        title="INTERVAL TO HYDRATE"
        @setIsModalOpen="setIsModalOpen"
      >
        <div class="modal-headline">INTERVAL TO HYDRATE:</div>
        <div>{{ daysToHydrate }} DAYS</div>
        <div>{{ hoursToHydrate }} HOURS</div>
        <div>{{ minutesToHydrate }} MINUTES</div>
      </MainResultBlock>
    </div>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import MainResultBlock from '@/components/index/Shared/MainResultBlock'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {
    MainResultBlock,
  },

  computed: {
    daysToHydrate() {
      return this.$store.getters['Calculator/daysToHydrate']
    },
    hoursToHydrate() {
      return this.$store.getters['Calculator/hoursToHydrate']
    },
    minutesToHydrate() {
      return this.$store.getters['Calculator/minutesToHydrate']
    },
    isIntervalModalOpen() {
      return this.$store.state.isIntervalModalOpen
    },
  },

  methods: {
    setIsModalOpen(isModalOpen) {
      this.$store.commit('set', ['isIntervalModalOpen', isModalOpen])
    }
  }
}
</script>
