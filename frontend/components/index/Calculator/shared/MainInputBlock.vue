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
        v-model.number="inputValue"
        type="number"
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
  text: {type: String, required: true},
  currency: {type: String, required: true},
  modelValue: {type: Number, required: true},
})

import {ref} from 'vue'

const isModalVisible = ref(false)

import {computed} from 'vue'

const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
  get: () => props.modelValue,
  set: inputValue => emit('update:modelValue', inputValue || 0),
})

import Modal from '~/components/layout/Modal'
</script>
