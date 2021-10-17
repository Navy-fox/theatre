<template>
  <div class="project-card">
    <div class="project-card__hover-icon">
      <img src="/icon/search.svg" alt="" />
    </div>
    <h3 class="project-card__title heading heading--h3">{{ title }}</h3>
    <p class="project-card__date text text--middle text--uppercase">
      {{ date }}
    </p>
    <img :src="img" alt="" class="project-card__img" />
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.project-card {
  position: relative;
  width: 442px;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.3s;
  &__img {
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    z-index: 0;
  }

  &__title {
    transition: 0.3s;
    z-index: 1;
  }

  &__date {
    transition: 0.3s;
    writing-mode: sideways-lr;
    z-index: 1;
  }

  &__hover-icon {
    background-color: $color-gold;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-self: center;
    display: none;
    align-items: center;
    justify-content: center;
    //position: center;
    z-index: 1;
    transition: 0.3s;
  }

  &:hover {
    cursor: pointer;
    justify-content: center;
    .project-card__img {
      opacity: 1;
    }

    .project-card__title,
    .project-card__date {
      display: none;
    }

    .project-card__hover-icon {
      display: flex;
      opacity: 1;
    }
  }
}
</style>
