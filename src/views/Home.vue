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
    <section class="section">
      <div>
        <Projects />
      </div>
    </section>
    <section class="section section--rating">
      <div class="wrapper pt-main">
        <Rating />
      </div>
    </section>
    <section class="section">
      <div class="wrapper pt-main">
        <Partners />
      </div>
      <div class="wrapper pt120">
        <!--        <Contacts />-->
        <Footer />
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
import Partners from "../components/partners";
import Footer from "../components/footer";

export default {
  name: "Home",
  components: {
    Footer,
    Partners,
    Rating,
    Projects,
    About,
    Sidebar,
    Main,
    Header,
  },
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
    @include laptop() {
      min-height: 800px;
    }
    @include tablet() {
      min-height: 600px;
    }
  }

  &--rating {
    @include laptop() {
      background-image: url("/img/rating2.png");
      //background-position: 0 0;
      background-repeat: no-repeat;
      background-size: auto 100%;
      min-width: 100vw;
      min-height: 550px;
    }
  }
}
</style>
