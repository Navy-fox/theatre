<template>
  <section class="grid main wrapper">
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

    <div class="slider desktop-only">
      <div class="splide__track desktop-only">
        <ul class="splide__list">
          <li
            class="splide__slide"
            v-for="(i, k) in MAIN_SLIDER_CARDS"
            :key="k"
          >
            <MainSliderCards :img="i.img" />
          </li>
        </ul>
      </div>
      <div class="slider__buttons desktop-only">
        <button
          class="text text--middle text--uppercase desktop-only"
          @click="slide.go('<')"
        >
          <img src="icon/ArrowL.svg" alt="" />
          пред
        </button>
        <button
          class="text text--middle text--uppercase desktop-only"
          @click="slide.go('>')"
        >
          след
          <img src="icon/ArrowR.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import MainSliderCards from "./little/main-slider-cards";
import { MAIN_SLIDER_CARDS } from "../data/MAIN_SLIDER_CARDS";
import Splide from "@splidejs/splide";

export default {
  name: "main",
  components: { MainSliderCards },
  data: () => ({
    MAIN_SLIDER_CARDS,
    slide: null,
  }),
  methods: {},
  mounted() {
    const slide = new Splide(".slider", {
      // arrowPath: "/icon/arrow.svg",
      type: "slide",
      arrows: false,
      pagination: false,
    });
    slide.mount();
    this.slide = slide;
  },
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
  grid-column: 8/13;
  //max-width: 682px;
  display: grid;
  gap: 35px;
  align-items: center;
  justify-content: center;
  //height: 570px;

  &__buttons {
    //max-width: 370px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }

  .splide__slide {
    display: flex;
    justify-content: center;
    align-self: center;
  }
}
</style>
