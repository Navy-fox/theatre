<template>
  <div class="header">
    <header class="grid wrapper">
      <nav class="header__nav column-9 text text--uppercase text--middle">
        <router-link to="/">Главная</router-link>
        <router-link to="/">о театре</router-link>
        <router-link to="/">Наши постановки</router-link>
        <router-link to="/">партнеры театра</router-link>
        <router-link to="/">контакты</router-link>
      </nav>
      <div class="column-3 header__tel">
        <button class="mobile-only">
          <img src="icon/menu.svg" alt="" />
        </button>
        <a href="tel:+74951234567" class="text">+7 495 123-45-67</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/system";

.header {
  padding-top: 50px;
  width: 100vw;
  //background: $color-black;
  position: fixed;
  left: 0;
  right: 0;

  &__nav {
    display: flex;
    justify-content: space-between;
    @include desktop() {
      grid-column: 3/12;
      column-gap: 30px;
      justify-content: center;
    }
    @include laptop() {
      display: none;
    }
  }

  &__tel {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      border-bottom: 2px $color-gold solid;
      padding-bottom: 4px;
    }

    @include desktop() {
      grid-column: span 12;
      padding-top: 50px;
      justify-content: center;
    }
    @include laptop() {
      padding-top: 0;
      justify-content: space-between;
      align-items: center;
      grid-column: span 12;
    }
    @include mobile() {
      grid-column: span 6;
    }
  }
}
</style>
