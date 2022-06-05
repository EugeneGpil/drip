<template>
  <div class="content-main-block content-inner-container__block">
    <div class="main-value-container main-value-result-container">
      <h2
        :class="{
          'content-main-headline-with-info': isInfoVisible,
        }"
        class="
          main-value-result-container__headline
          content-main-headline
          main-value-result-headline
        "
        @click="isModalVisible = isInfoVisible"
      >
        {{ title }}
      </h2>
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

<style lang="scss" scoped>
.main-value-result-container {
  padding-top: 19px;

  &__headline {
    margin-bottom: 10px;
  }

  @media (min-width: 450px) {
    padding-top: 35px;
    padding-bottom: 20px;
  }
}

.main-value-result-headline {
  font-size: 10px;
  max-width: 90%;

  @media (min-width: 350px) {
    font-size: 12px;
  }

  @media (min-width: 450px) {
    font-size: 13px;
  }

  @media (min-width: 500px) {
    font-size: 15px;
    line-height: 14px;
  }

  @media (min-width: 550px) {
    font-size: 16px;
    line-height: 15px;
  }
}

.value-result {
  font-size: 18px;

  @media (min-width: 300px) {
    font-size: 20px;
  }

  @media (min-width: 350px) {
    font-size: 25px;
  }

  @media (min-width: 450px) {
    font-size: 30px;
  }
}
</style>
