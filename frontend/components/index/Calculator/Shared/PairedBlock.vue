<template>
  <div class="content-pair-block">
    <div class="
                content-pair-block__headline
                content-main-headline
                content-pair-block-headline
              ">
      {{ text }}
    </div>
    <input
      v-model="inputValue"
      class="main-value-input content-pair-block-input"
    >
    <div class="main-value-underline pair-value-underline"></div>
  </div>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import stringToFloat from '@/assets/converters/stringToFloat'

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

  computed: {
    inputValue: {
      get() {
        return `$ ${this.value}`
      },
      set(inputValue) {
        this.$emit('input', stringToFloat(inputValue))
      },
    }
  }
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
