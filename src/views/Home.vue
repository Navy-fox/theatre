<template>
  <div class="home">
    <section class="section section--main">
      <div class="wrapper">
        <Header />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  name: "Home",
  components: { Header },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.home {
  background: $color-black;
  min-height: 100vh;
}
</style>
