<template>
  <div class="about grid pt">
    <h1 class="about__title heading heading--h2 column-12">
      <span>о</span> театре
    </h1>
    <div class="about__text column-5">
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
    <div class="about__numbers numbers column-3">
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
    <img class="about__image column-4" src="img/about.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">
.about {
  grid-row-gap: 100px;

  &__title {
    justify-self: center;
  }

  &__text {
    display: grid;
    grid-row-gap: 9px;
  }
}
.numbers {
  display: grid;
  grid-row-gap: 34px;
  &__title {
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    display: grid;
    grid-row-gap: 15px;
  }
}
</style>
