<template>
  <div class="home">
    <Sidebar />
    <Header />
    <section class="section section--main">
      <Main />
    </section>
    <section class="section section--about">
      <div class="wrapper">
        <About />
      </div>
    </section>
    <section class="section section--projects">
      <Projects />
    </section>
    <section class="section section--rating">
      <div class="wrapper pt-main">
        <Rating />
      </div>
    </section>
    <section class="section section--partners">
      <div class="wrapper pt-main">
        <Partners />
      </div>
    </section>
    <section class="section section--contacts">
      <div class="wrapper pt120">
        <Contacts />
      </div>
    </section>
    <div class="wrapper">
      <Footer />
    </div>
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
import Contacts from "../components/contacts";

export default {
  name: "Home",
  components: {
    Contacts,
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
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    @include tablet() {
      min-height: 800px;
    }
    @include mobile() {
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
