<template>
  <div class="sidebar">
    <p class="title text text--uppercase text--middle">контактная информация</p>
    <div class="line" />
    <div class="icon-block">
      <IconInstagram />
      <IconFacebook />
      <IconVk />
      <IconYouTube />
    </div>
  </div>
</template>

<script>
import IconFacebook from "./social-icon/iconFacebook";
import IconYouTube from "./social-icon/iconYouTube";
import IconInstagram from "./social-icon/iconInstagram";
import IconVk from "./social-icon/iconVk";

export default {
  name: "sidebar",
  components: { IconVk, IconInstagram, IconYouTube, IconFacebook },
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
  padding-bottom: 86px;
  align-items: center;
  width: 150px;
  height: 100vh;
  background: $color-black;
  opacity: 0.75;
  position: fixed;
  @include laptop() {
    display: none;
  }
  .title {
    writing-mode: sideways-lr;
  }
}

.line {
  height: 80px;
  width: 3px;
  background-color: #c4c4c4;
}

.icon-block {
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  justify-items: center;
}
</style>
