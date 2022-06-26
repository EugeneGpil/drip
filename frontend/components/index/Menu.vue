<!--suppress HtmlUnknownTarget -->
<template>
  <div class="menu-outer-container">
    <section class="menu-container">
      <img class="logo" src="~/static/img/logo.webp" alt="drip calculator logo">
      <div class="menu-outer-item menu-outer-item1">
        <div class="menu-inner-item">
          <img class="menu-inner-item__logo" src="~/static/img/menu_item_logo.webp" alt="menu item logo">
          <div class="menu-inner-item__text">
            <span class="nowrap">HELP THE</span>
            CREATOR
          </div>
        </div>
      </div>
      <div class="menu-outer-item menu-outer-item2">
        <div class="menu-inner-item">
          <img class="menu-inner-item__logo" src="~/static/img/menu_item_logo.webp" alt="menu item logo">
          <div class="menu-inner-item__text" @click="goToAbout">
              <span class="nowrap">
                ABOUT
                <span class="menu-inner-item__bigger-text">DRIP</span>
              </span>
            CALCULATOR
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  methods: {
    goToAbout() {
      const about = document.getElementById('about')
      const top = about.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-outer-container {
  @media (min-width: 750px) {
    position: fixed;
    right: 0;
    top: 0;
    width: 17vw;
  }

  @media (min-width: 800px) {
    width: 20vw;
  }

  @media (min-width: 850px) {
    width: 22vw;
  }

  @media (min-width: 900px) {
    width: 24vw;
  }

  @media (min-width: 1450px) {
    width: 30vw;
  }
}

.menu-container {
  position: relative;
  height: 150px;
  width: 170px;
  margin-bottom: -15px;

  @media (min-width: 750px) {
    margin-top: 40vh;
    margin-bottom: 0;
  }
}

.logo {
  position: absolute;
  width: 150px;
  height: 150px;
  left: -20px;
  top: 10px;

  @media (min-width: 750px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 800px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 850px) {
    width: 140px;
    height: 140px;
  }

  @media (min-width: 900px) {
    width: 160px;
    height: 160px;
  }

  @media (min-width: 1000px) {
    width: 180px;
    height: 180px;
  }
}

.menu-outer-item {
  position: absolute;
}

.menu-outer-item1 {
  top: 22px;
  left: 80px;

  @media (min-width: 750px) {
    top: 17px;
    left: 55px;
  }

  @media (min-width: 800px) {
    top: 20px;
    left: 70px;
  }

  @media (min-width: 850px) {
    top: 25px;
    left: 80px;
  }

  @media (min-width: 900px) {
    top: 30px;
    left: 90px;
  }

  @media (min-width: 1000px) {
    top: 35px;
    left: 100px;
  }
}

.menu-outer-item2 {
  top: 54px;
  left: 65px;

  @media (min-width: 750px) {
    top: 47px;
    left: 40px;
  }

  @media (min-width: 800px) {
    top: 50px;
    left: 55px;
  }

  @media (min-width: 850px) {
    top: 60px;
    left: 65px;
  }

  @media (min-width: 900px) {
    top: 70px;
    left: 75px;
  }

  @media (min-width: 1000px) {
    top: 80px;
    left: 85px;
  }
}

.menu-inner-item {
  position: relative;
  line-height: 12px;
  font-size: 10px;

  @media (min-width: 850px) {
    font-size: 12px;
  }

  @media (min-width: 900px) {
    font-size: 13px;
  }

  @media (min-width: 1000px) {
    font-size: 14px;
  }

  &__logo {
    width: 20px;
    height: 20px;

    @media (min-width: 900px) {
      width: 22px;
      height: 22px;
    }
  }

  &__text {
    position: absolute;
    top: 17px;
    left: 17px;
    cursor: pointer;

    @media (min-width: 900px) {
      top: 20px;
      left: 20px;
    }
  }

  &__bigger-text {
    font-size: 12px;

    @media (min-width: 850px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 15px;
    }

    @media (min-width: 1000px) {
      font-size: 17px;
    }
  }
}
</style>
