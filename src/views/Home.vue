<template>
  <div class="home">
    <Sidebar />
    <section class="section section--main">
      <div class="wrapper">
        <Header />
        <Main />
      </div>
    </section>
    <section class="section section--about">
      <div class="wrapper">
        <About />
      </div>
    </section>
    <section class="section section--about">
      <div>
        <Projects />
      </div>
    </section>
    <section class="section section--about">
      <div class="wrapper pt">
        <Rating />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/header";
import Main from "../components/main";
import Sidebar from "../components/sidebar";
import About from "../components/about";
import Projects from "../components/projects";
import Rating from "../components/rating";

export default {
  name: "Home",
  components: { Rating, Projects, About, Sidebar, Main, Header },
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
    //background-position: 0 0;
    //background-repeat: no-repeat;
    //background-size: auto 100%;
    min-height: 100vh;
  }

  &--about {
    //height: 100px;
  }
}
</style>
