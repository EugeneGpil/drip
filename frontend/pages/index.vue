<template>
  <div class="main-wrapper">
    <div class="amount-card">
      <div class="amount-card__amount-container">
        <div class="amount-card__amount">100.756</div>
        <div class="amount-card__amount-currency">DRIP</div>
      </div>
      <div class="card amount-card__card">
        This is amount of DRIP to hydrate properly
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-card {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.25rem;
  width: 80%;
  margin-top: 20px;
  //noinspection CssUnknownTarget
  background-image: url('~static/img/silas.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 20px;

  &__amount-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsla(0,0%,100%,.96);
    font-size: 2rem;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);

    @media (min-width: 350px) {
      flex-direction: row;
    }

    @media (min-width: 700px) {
      font-size: 4rem;
    }

    @media (min-width: 1250px) {
      font-size: 6rem;
    }
  }

  &__amount {
    font-family: FredokaOne, serif;
  }

  &__amount-currency {
    font-family: Aquino, serif;

    @media (min-width: 350px) {
      margin-bottom: 6px;
      margin-left: 5px;
    }

    @media (min-width: 700px) {
      margin-bottom: 10px;
    }

    @media (min-width: 1250px) {
      margin-bottom: 18px;
    }
  }

  &__card {
    margin-top: 5px;
  }
}

.card {
  background-color: rgba(0,123,255,.7);
  font-family: Roboto, sans-serif;
  color: #00dcff;
  text-shadow: 2px 2px #000;
  padding: 5px 10px 20px;
  border-radius: 0.25rem;
}
</style>
