<template>
  <div class="content-main-block content-inner-container__block">
    <h2
        class="content-main-block__headline content-main-headline content-main-headline-with-info"
        @click="isModalVisible = true"
    >
      {{ text }}
    </h2>
    <div class="main-value-container">
      <input
          v-model="inputValue"
          ref="input"
          class="main-value-input"
      >
      <div class="main-value-underline-container">
        <div class="main-value-underline"></div>
        <div class="main-value-currency">{{ currency }}</div>
      </div>
    </div>
    <Modal v-if="isModalVisible" @close="isModalVisible = false">
      <slot/>
    </Modal>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Number,
    required: true,
  },
  'onUpdate:modelValue': {},
})

import {ref} from 'vue'
const isModalVisible = ref(false)

const emit = defineEmits(['input'])
import stringToFloat from '~/assets/converters/stringToFloat'
import {computed} from 'vue'
const inputValue = computed({
  get: () => stringToFloat(props.modelValue),
  set: inputValue => emit('update:modelValue', stringToFloat(inputValue)),
})

import Modal from '~/components/layout/Modal'
</script>

<style scoped lang="scss">
.main-value-underline-container {
  position: relative
}

.main-value-currency {
  top: 1px;
  right: 2px;
  position: absolute;
  font-size: 8px;
  font-style: italic;
  font-weight: bold;
  color: dimgray;
  text-shadow: none;

  @media (min-width: 450px) {
    font-size: 10px;
  }
}
</style>
