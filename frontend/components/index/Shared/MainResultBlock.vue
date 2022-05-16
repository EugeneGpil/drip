<template>
  <div class="content-main-block content-inner-container__block">
    <div class="main-value-container main-value-result-container">
      <div class="
        main-value-result-container__headline
        content-main-headline
        main-value-result-headline
      ">
        {{ title }}
        <font-awesome-icon
          v-if="isInfoVisible"
          icon="circle-info"
          class="content-main-headline__info-icon"
          @click="isModalVisible = true"
        />
      </div>
      <div class="value-result">{{ value }}</div>
    </div>
    <Modal v-if="isModalVisible" @close="isModalVisible = false">
      <slot/>
    </Modal>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
import Modal from '@/components/layout/Modal'

// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isInfoVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  components: {
    Modal,
  },

  data() {
    return {
      isModalVisible: false,
    }
  },
}
</script>
