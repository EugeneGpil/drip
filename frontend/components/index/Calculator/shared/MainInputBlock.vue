<template>
  <div class="content-main-block content-inner-container__block">
    <h2
        class="
        content-main-block__headline
        content-main-headline
        content-main-headline-with-info
      "
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
      <div class="main-value-underline"></div>
    </div>
    <Modal v-if="isModalVisible" @close="isModalVisible = false">
      <slot/>
    </Modal>
  </div>
</template>

<script setup>
import {ref, nextTick} from 'vue'

import Modal from '../../../layout/Modal'

import stringToFloat from '../../../../assets/converters/stringToFloat'

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
})

const isModalVisible = ref(false)

const emit = defineEmits(['input'])

const inputValue = $computed({
  async get() {
    await nextTick()
    const valueStr = props.value.toString()
    const length = valueStr.length
    const input = ref()
    input?.focus()
    input?.setSelectionRange(length, length)
  },
  set(inputValue) {
    emit('update:modelValue', stringToFloat(inputValue))
  },
})
</script>
