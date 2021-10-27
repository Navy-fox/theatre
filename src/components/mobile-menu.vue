<template>
  <div class="mobile-menu mobile-only">
    <img class="close" src="icon/close.svg" alt="" />
    <div class="menu">
      <nav class="nav heading heading--h3">
        <router-link to="/">Главная</router-link>
        <router-link to="/">о театре</router-link>
        <router-link to="/">Наши постановки</router-link>
        <router-link to="/">партнеры театра</router-link>
        <router-link to="/">контакты</router-link>
      </nav>
      <div class="icon-block">
        <IconFacebook h="45px" w="26px" />
        <IconInstagram h="45px" w="45px" />
        <IconYouTube h="31px" w="45px" />
        <IconVk h="24px" w="45px" />
      </div>
    </div>
  </div>
</template>

<script>
import IconVk from "./social-icon/iconVk";
import IconInstagram from "./social-icon/iconInstagram";
import IconYouTube from "./social-icon/iconYouTube";
import IconFacebook from "./social-icon/iconFacebook";

export default {
  name: "mobile-menu",
  components: { IconVk, IconInstagram, IconYouTube, IconFacebook },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/system";

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: $color-black;
  z-index: 50;
}

.social-icon {
  fill-opacity: 1;
}

.nav {
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  padding-left: 39px;
}
.close {
  position: absolute;
  right: 30px;
  top: 30px;
}

.menu {
  display: flex;
  flex-direction: column;
  row-gap: 89px;
  padding-top: 17.6vh;
}

.icon-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
}
</style>
