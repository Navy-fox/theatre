<template>
  <div class="footer">
    <div class="footer__captions">
      <p class="caption">(с) Все права защищены. Большой театр. 2020</p>
      <p class="caption">Разработано d-e-n.ru</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style lang="scss">
.footer {
  border-top: #565656 1px solid;
  margin-top: 80px;

  &__captions {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }
}
</style>
