<template>
  <div class="partners grid">
    <h1 class="partners__title heading heading--h2 column-12">
      <span>партнеры</span> театра
    </h1>
    <div class="partners__logos column-12">
      <img
        src="icon/logo.svg"
        alt=""
        v-for="item in new Array(8)"
        :key="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "partners",
};
</script>

<style lang="scss">
.partners {
  //justify-items: center;
  //align-content: center;
  //justify-content: center;
  //align-items: center;
  row-gap: 100px;
  &__title {
    justify-self: center;
  }
  &__logos {
    display: flex;
    flex-wrap: wrap;
    column-gap: 78px;
    row-gap: 80px;
    justify-content: center;
  }
}
</style>
