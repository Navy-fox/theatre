<template>
  <div class="contacts grid">
    <h1 class="title heading heading--h2 column-12">
      <span>стать</span> меценатом
    </h1>
    <div class="section grid column-12">
      <div class="communication column-4">
        <div class="communication__item">
          <a class="text text--uppercase" href="tel:+78121234555"
            >+7 (812) 123-45-55</a
          >
          <a class="text text--uppercase" href="tel:+78121234566"
            >+7 (812) 123-45-66</a
          >
        </div>
        <div class="communication__item">
          <a class="text text--uppercase" href="mailto:info@theater.ru"
            >info@theater.ru</a
          >
          <p class="text text--uppercase">г. санкт-петербург, невский 140</p>
        </div>
      </div>
      <form action="/" class="form column-8">
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
  </div>
</template>

<script>
export default {
  name: "contacts",
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/system";

.title {
  justify-self: center;
  @include tablet() {
    grid-column: 1/13;
  }
}

.contacts {
  row-gap: 100px;
}

.section {
  @include desktop() {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 80px;
    grid-column: 3/12;
  }
  @include laptop() {
    grid-column: span 12;
  }

  .communication {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @include desktop() {
      flex-direction: row;
      justify-content: space-between;
    }

    &__item {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      @include desktop() {
        row-gap: 25px;
        align-items: flex-end;
      }
    }
  }

  .form {
    display: grid;
    gap: 30px;
    //grid-template-areas:
    //  "name company message"
    //  "tel email message"
    //  "caption caption button";
    grid-template-columns: 180px 180px 1fr;
    grid-template-rows: 35px 35px 60px;
    @include tablet() {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 35px 35px 100px 50px 1fr;
    }
  }

  .name {
    grid-row: 1;
    grid-column: 1;
  }

  .company {
    grid-row: 1;
    grid-column: 2;
  }

  .tel {
    grid-row: 2;
    grid-column: 1;
  }

  .email {
    grid-row: 2;
    grid-column: 2;
  }

  .message {
    grid-row: 1/3;
    grid-column: 3;
    padding-top: 8px;
    //height: 100px;
    @include tablet() {
      grid-row: 3;
      grid-column: 1/3;
    }
  }

  .caption {
    grid-row: 3;
    grid-column: 1/3;
    align-self: end;
    justify-self: end;
    @include tablet() {
      grid-row: 5;
      grid-column: 1/3;
      text-align: center;
      margin-top: 10px;
    }
  }

  .button {
    grid-row: 3;
    grid-column: 3;
    width: 190px;
    align-self: end;
    justify-self: end;
    @include tablet() {
      grid-row: 4;
      grid-column: 1/3;
      align-self: center;
      justify-self: center;
      margin-top: 20px;
    }
  }
}
</style>
