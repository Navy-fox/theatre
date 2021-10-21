<template>
  <div class="partners grid">
    <h1 class="partners__title heading heading--h2 column-12">
      <span>партнеры</span> театра
    </h1>
    <div class="block column-12">
      <div class="logos">
        <div class="logo" v-for="item in new Array(8)" :key="item">
          <img src="icon/logo.svg" alt="" />
          <img src="icon/logo.svg" alt="" />
        </div>
      </div>
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

  .block {
    flex-wrap: nowrap;
    overflow-x: auto;

    .logos {
      display: flex;
      flex: 0 0 auto;
      column-gap: 78px;

      .logo {
        display: flex;
        flex-direction: column;
        //column-gap: 78px;
        row-gap: 80px;
      }
    }
  }
}
</style>
