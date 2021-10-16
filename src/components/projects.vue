<template>
  <div class="projects pt-projects">
    <h1 class="projects__title heading heading--h2 column-12">
      <span>наши</span> постановки
    </h1>
    <div class="carousel">321</div>
  </div>
</template>

<script>
export default {
  name: "projects",
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
  height: 550px;
  width: calc(100vw - 150px);
  margin-left: 150px;
  background-color: #d1a954;
  opacity: 0.2;
}
</style>
