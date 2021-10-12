<template>
  <div class="grid main">
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
    <div class="slider">123</div>
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
  margin-top: 190px;
}
.preview {
  align-self: center;
}
.but {
  margin-bottom: 40px;
}
p {
  margin-top: 31px;
  margin-bottom: 44px;
}

.slider {
  height: 570px;
}
</style>
