<template>
  <div class="home">
    <section class="section section--main">
      <div class="wrapper">
        <Header />
        <Main />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/header";
import Main from "../components/main";
export default {
  name: "Home",
  components: { Main, Header },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.home {
  background: $color-black;
  min-height: 100vh;
}

.section {
  &--main {
    background-image: url("/img/main.png");
    min-height: 100vh;
  }
}
</style>
