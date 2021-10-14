<template>
  <div class="contacts grid">
    <h1 class="contacts__title heading heading--h2 column-12">
      <span>стать</span> меценатом
    </h1>
    <div class="contacts__communication column-4">
      <a class="text text--uppercase" href="tel:+78121234555"
        >+7 (812) 123-45-55</a
      >
      <a class="text text--uppercase" href="tel:+78121234566"
        >+7 (812) 123-45-66</a
      >
      <a class="text text--uppercase" href="mailto:info@theater.ru"
        >info@theater.ru</a
      >
      <p class="text text--uppercase">г. санкт-петербург, невский 140</p>
    </div>
    <form action="/" class="contacts__form column-8">
      <input type="text" placeholder="Имя" class="name" />
      <input type="text" placeholder="Компания" class="company" />
      <textarea placeholder="Сообщение" class="message" />
      <input type="text" placeholder="Телефон" class="tel" />
      <input type="text" placeholder="E-mail" class="email" />
      <p class="caption">
        * Ваши данные не будут переданы третьим лицам, 100% вероятность.
        Конфиденциальность мы гарантируем, и защищаем персональные данные
        согласно законку ФЗ-52.
      </p>
      <button class="but button text text--uppercase text--middle">
        отправить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contacts",
};
</script>

<style lang="scss">
.contacts {
  row-gap: 100px;

  &__title {
    justify-self: center;
  }

  &__communication {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__form {
    display: grid;
    gap: 30px;
    grid-template-areas:
      "name company message"
      "tel email message"
      "caption caption button";
    grid-template-columns: 180px 180px 1fr;
    grid-template-rows: 35px 35px 60px;
  }

  .name {
    grig-area: name;
  }

  .company {
    grig-area: company;
  }

  .tel {
    grig-area: tel;
  }

  .email {
    grig-area: email;
  }

  .message {
    grig-area: message;
    padding-top: 8px;
    height: 100px;
  }

  .caption {
    grid-area: caption;
    align-self: end;
    justify-self: end;
  }

  .button {
    grid-area: button;
    width: 190px;
    align-self: end;
    justify-self: end;
  }
}
</style>
