<template>
  <div class="additional-info-block">
    <div class="additional-info-text">{{ text }}</div>
    <div class="additional-info-value">{{ value }}</div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.additional-info-block {
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: 350px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media (min-width: 400px) {
    margin-top: 35px;
    margin-bottom: 35px;
  }
}

.additional-info-text {
  font-size: 12px;
  flex: 0.6;
  text-align: center;
  color: #0C0A0A;
  -webkit-text-stroke-color: #A5EE6B;
  -webkit-text-stroke-width: 0.60px;
  font-weight: bold;

  @media (min-width: 300px) {
    padding-left: 15px;
    padding-right: 15px;
    flex: 0.8;
    font-size: 14px;
  }

  @media (min-width: 350px) {
    font-size: 15px;
  }

  @media (min-width: 400px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 16px;
    flex: 1;
  }
}

.additional-info-value {
  white-space: nowrap;
  font-size: 13px;
  flex: 1;
  text-align: left;
  height: fit-content;
  margin-left: 5px;

  @media (min-width: 300px) {
    font-size: 14px;
  }

  @media (min-width: 400px) {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>
