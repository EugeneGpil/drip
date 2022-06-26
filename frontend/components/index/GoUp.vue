<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <div class="go-up-arrow">
      <div class="go-up-arrow-triangle"/>
      <div class="go-up-arrow-line"/>
    </div>
    <img class="go-up-small-logo" src="~/static/img/small_logo.webp" alt="small_logo">
  </div>
</template>

<style lang="scss" scoped>
.go-up-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.go-up-arrow-triangle {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-135deg);
  width: 0;
}

.go-up-arrow-line {
  width: 2px;
  background-color: black;
  height: 40px;
  margin-top: -12px;
}

.go-up-small-logo {
  width: 40px;
}
</style>
