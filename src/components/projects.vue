<template>
  <div class="projects pt-projects grid">
    <h2 class="projects__title heading heading--h2 column-12">
      <span>наши</span> постановки
    </h2>
    <div class="carousel column-12">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide" v-for="(i, k) in PROJECT_CARDS" :key="k">
            <project-card :img="i.img" :title="i.title" :date="i.date" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Splide from "@splidejs/splide";
import ProjectCard from "./little/project-card";
import { PROJECT_CARDS } from "../data/PROJECT_CARDS";

export default {
  name: "projects",
  components: { ProjectCard },
  data: () => ({
    PROJECT_CARDS,
  }),
  mounted() {
    const slide = new Splide(".carousel", {
      arrows: false,
      autoWidth: true,
      perMove: 1,
      height: "550px",
      type: "slide",
      // breakpoints: {
      //   992: {
      //     height: "1000px",
      //   },
      // },
    });

    slide.mount();
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.projects {
  //display: flex;
  //flex-direction: column;
  //row-gap: 100px;
  grid-row-gap: 100px;

  &__title {
    justify-self: center;
    align-self: center;
  }
}

.carousel {
  //margin-left: 150px;
  //width: calc(100vw - 150px);
  overflow: hidden;
  max-width: 100%;
  grid-column: 2/13;
  @include desktop() {
    width: 100%;
    margin-left: 20px;
    grid-column: 3/12;
  }
}
</style>
