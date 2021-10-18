<template>
  <div class="grid main wrapper">
    <div class="preview column-6">
      <h1 class="heading heading--h1">Большой театр</h1>
      <p class="text text--little">
        Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с
        1886 года — Петербургская консерватория. Первое постоянное в
        Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных
        зданий в Европе XVIII.
      </p>
      <button class="but text text--middle text--uppercase">афиша</button>
    </div>
    <div class="slider desktop-only">123</div>
  </div>
</template>

<script>
export default {
  name: "main",
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/system";

.main {
  padding-top: 248px;
  @include desktop() {
    padding-top: 384px;
    margin: 0 0;
  }
  @include laptop() {
    padding-top: 231px;
  }
  @include tablet() {
    padding-top: 158px;
  }
  @include mobile() {
    padding-top: 103px;
  }
}

.preview {
  align-self: center;
  @include desktop() {
    grid-column: 3/11;
  }
  @include laptop() {
    //padding-left: 15px;
    grid-column: 2/11;
  }
  @include tablet() {
    //margin: 0 0 !important;
    grid-column: 2/11;
  }
}

.but {
  //margin-bottom: 40px;
}

p {
  margin-top: 31px;
  margin-bottom: 44px;
}

.slider {
  height: 570px;
}
</style>
