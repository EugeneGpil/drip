<template>
  <div class="content-pair-block">
    <h2
      class="content-pair-block__headline content-main-headline content-pair-block-headline content-main-headline-with-info"
      @click="isModalVisible = true"
    >
      {{ text }}
    </h2>
    <input
      v-model="inputValue"
      class="main-value-input content-pair-block-input"
    >
    <div class="main-value-underline-container">
      <div class="main-value-underline pair-value-underline"></div>
      <div class="main-value-currency">USD</div>
    </div>
    <Modal v-if="isModalVisible" @close="isModalVisible = false">
      <slot/>
    </Modal>
  </div>
</template>

<script setup>
import Modal from '~/components/layout/Modal'
import toFloatString from '~/utils/converters/toFloatString'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

import {computed} from 'vue'

const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
  get: () => props.modelValue,
  set: (inputValue) => emit('update:modelValue', toFloatString(inputValue)),
})

import {ref} from 'vue'

const isModalVisible = ref(false)
</script>

<style lang="scss" scoped>
.content-pair-block {
  background: rgba(237, 231, 255, 0.95);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 47px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  &__headline {
    margin-bottom: 5px;

    @media (min-width: 350px) {
      margin-bottom: 10px;
    }
  }
}

.content-pair-block-headline {
  font-size: 10px;

  @media (min-width: 400px) {
    font-size: 12px;
  }

  @media (min-width: 450px) {
    font-size: 16px;
  }
}

.content-pair-block-input {
  font-size: 12px;

  @media (min-width: 300px) {
    font-size: 13px;
  }

  @media (min-width: 400px) {
    font-size: unset;
  }
}

.pair-value-underline {
  width: 50px;

  @media (min-width: 350px) {
    width: 60px;
  }

  @media (min-width: 450px) {
    width: 85px;
  }
}
</style>
