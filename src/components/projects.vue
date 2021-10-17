<template>
  <div class="projects pt-projects">
    <h2 class="projects__title heading heading--h2 column-12">
      <span>наши</span> постановки
    </h2>
    <div class="carousel">
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
    new Splide(".carousel", {
      arrows: false,
      autoWidth: true,
      height: "550px",
      type: "slide",
    }).mount();
  },
};
</script>

<style lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  &__title {
    align-self: center;
  }
}

.carousel {
  margin-left: 150px;
}
</style>
