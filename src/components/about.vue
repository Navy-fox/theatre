<template>
  <div class="about grid pt-main">
    <h1 class="about__title heading heading--h2 column-12">
      <span>о</span> театре
    </h1>
    <div class="column-2 custom-view"></div>
    <div class="about__text column-5 column-tab-12">
      <h2 class="text text--big text--uppercase">Самый лучший театр СПБ</h2>
      <p class="text text--little">
        Как свидетельствуют архивные документы, первое каменное здание Большого
        театра начали возводить в 1775 году по проекту Антонио Ринальди. В
        дальнейшем, после того как Ринальди упал с лесов и не мог лично
        наблюдать за ходом работ, Екатерина II поручила немецкому театральному
        декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект
        театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А.
        Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на
        других свидетельствах, годом открытия можно считать 1784 год.
      </p>
    </div>
    <div class="about__numbers numbers column-3 column-lap-4 column-tab-12">
      <h2 class="text text--big text--uppercase numbers__title">
        немного о цифрах
      </h2>
      <div class="numbers__items">
        <div class="numbers__item">
          <img src="icon/armchair%201.svg" alt="" />
          <h3 class="text"><span>1600</span> посадочных мест</h3>
        </div>
        <div class="numbers__item">
          <img src="icon/theater%201.svg" alt="" />
          <h3 class="text"><span>350</span> лет истории</h3>
        </div>
      </div>
    </div>
    <img
      class="about__image column-4 desktop-only"
      src="img/about.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">
@import "src/assets/scss/system";
.custom-view {
  display: none;
  @include desktop() {
    display: block;
  }
  @include laptop() {
    display: none;
  }
}
.about {
  grid-row-gap: 100px;
  @include laptop() {
    grid-row-gap: 60px;
  }

  &__title {
    justify-self: center;
  }

  &__text {
    display: grid;
    grid-row-gap: 9px;
    //@include laptop() {
    //  grid-column: span 8;
    //}
    @include tablet() {
      //grid-column: span 12;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      row-gap: 40px;
    }
  }
}

.numbers {
  display: grid;
  grid-row-gap: 34px;

  @include tablet() {
    grid-row-gap: 40px;
  }

  &__title {
    @include tablet() {
      justify-self: center;
      //justify-content: center;
      //align-items: center;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet() {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 30px;
    }
  }

  &__item {
    display: grid;
    grid-row-gap: 15px;
  }
}
</style>
