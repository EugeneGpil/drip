<template>
  <div class="content-pair-block">
    <h2
      class="
                content-pair-block__headline
                content-main-headline
                content-pair-block-headline
                content-main-headline-with-info
              "
      @click="isModalVisible = true"
    >
      {{ text }}
    </h2>
    <input
      v-model="inputValue"
      class="main-value-input content-pair-block-input"
    >
    <div class="main-value-underline pair-value-underline"></div>
    <Modal v-if="isModalVisible" @close="isModalVisible = false">
      <slot/>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../../layout/Modal'

import stringToFloat from '../../../../assets/converters/stringToFloat'

// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },

  components: {
    Modal,
  },

  computed: {
    inputValue: {
      get() {
        return `$ ${this.value}`
      },
      set(inputValue) {
        this.$emit('input', stringToFloat(inputValue))
      },
    },
  },

  data() {
    return {
      isModalVisible: false,
    }
  },
}
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
