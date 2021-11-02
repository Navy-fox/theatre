<template>
  <div class="card">
    <div class="card__bg">
      <div style="position: relative">
        <div class="card__effect"></div>
        <img :src="img" alt="" />
      </div>
    </div>
    <img class="card__img" :src="img" alt="" />
  </div>
</template>

<script>
export default {
  name: "main-slider-cards",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.card {
  position: relative;
  width: 370px;
  height: 510px;
  &__img {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &__effect {
    position: absolute;
    opacity: 0.85;
    background-color: $color-gold;
    width: 100%;
    height: 100%;
  }
}
</style>
