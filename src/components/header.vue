<template>
  <header class="grid header">
    <nav class="header__nav column-9 text text--uppercase text--middle">
      <router-link to="/">Главная</router-link>
      <router-link to="/">о театре</router-link>
      <router-link to="/">Наши постановки</router-link>
      <router-link to="/">партнеры театра</router-link>
      <router-link to="/">контакты</router-link>
    </nav>
    <div class="column-3 header__tel">
      <a href="tel:+74951234567" class="text">+7 495 123-45-67</a>
    </div>
  </header>
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

  &__nav {
    display: flex;
    justify-content: space-between;
  }

  &__tel {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      border-bottom: 2px $color-gold solid;
      padding-bottom: 5px;
    }
  }
}
</style>
