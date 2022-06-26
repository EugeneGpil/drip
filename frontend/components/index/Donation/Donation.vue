<template>
  <div class="content-outer-container">
    <section class="content-inner-container">
      <div class="text-container">
        <h2 class="second-headline content-main-headline text-container__headline">
          DONATION
        </h2>
        <p class="text-container__paragraph paragraph">
          Send me some BNB(BEP20)
        </p>
        <div class="data-field-container">
          <div class="data-copy-container-1 data-field-container__data-copy-container-1">
            <div class="data-copy-container-2" @click="copyWallet">
              <div class="data-copy-container-3">
                <div class="data-copy-text">
                  copy
                </div>
              </div>
            </div>
          </div>
          <div class="data-line-outer-container">
            <div class="data-line-inner-container">
              <div class="data-line-inner-container__data-line data-line">
                {{ wallet }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const wallet = '0x13A9C362ed32297ff5f7D6C5cF97b0A8f242AbfD'

// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    wallet() {
      return wallet
    },
  },

  methods: {
    copyWallet() {
      navigator.clipboard.writeText(wallet)
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin data-container-border-gradient {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 0.3038165949973739) 50%,
      rgba(132, 159, 195, 0) 97%
  );
  padding: 1px;
  border-radius: 100%;
}

.data-field-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__data-copy-container-1 {
    margin-right: -20px;
    margin-bottom: -5px;
    margin-top: -10px;
  }
}

.data-copy-container-1 {
  align-self: flex-end;
  border-radius: 100%;
  padding: 10px 20px;
  background: radial-gradient(circle, #70D0F0 30%, #BDD3F1 40%);
}

.data-copy-container-2 {
  @include data-container-border-gradient;
  box-shadow: 0 0 15px 7px #70D0F0;
  cursor: pointer;
}

.data-copy-container-3 {
  background: radial-gradient(circle, rgba(80, 223, 255, 1) 0%, #70D0F0);
  border-radius: 100%;
  padding: 4px 3px 3px;
}

.data-copy-text {
  font-size: 10px;
  text-shadow: none;
}

.data-line-outer-container {
  transform: matrix(1, -0.09, 0.09, 1, 0, 0);
  @include data-container-border-gradient;
  height: 40px;
  width: 100%;

  @media (min-width: 300px) {
    height: 50px;
  }

  @media (min-width: 400px) {
    height: 60px;
  }

  @media (min-width: 450px) {
    height: 70px;
  }
}

.data-line-inner-container {
  background: radial-gradient(
      circle,
      rgba(235, 240, 247, 1) 6%,
      rgba(189, 211, 241, 1) 25%
  );
  border-radius: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__data-line {
    transform: matrix(1, 0.09, -0.1, 1, 0, 0);
  }
}

.data-line {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 17px;
  width: 140px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }

  @media (min-width: 300px) {
    width: 185px;
  }

  @media (min-width: 350px) {
    width: 210px;
  }

  @media (min-width: 400px) {
    width: 240px;
  }

  @media (min-width: 450px) {
    width: 280px;
  }
}
</style>
