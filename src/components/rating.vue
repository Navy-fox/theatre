<template>
  <div class="rating grid">
    <div class="dates">
      <p
        class="text text--gold text--uppercase"
        style="font-size: 72px; letter-spacing: 0.1em; line-height: 98px"
      >
        2018
      </p>
      <p
        class="text text--gold text--uppercase"
        style="font-size: 72px; letter-spacing: 0.1em; line-height: 98px"
      >
        2019
      </p>
      <p
        class="text text--gold text--uppercase"
        style="font-size: 72px; letter-spacing: 0.1em; line-height: 98px"
      >
        2020
      </p>
    </div>
    <div class="rate">
      <div class="rate__img">
        <img
          src="icon/star.svg"
          alt=""
          v-for="item in new Array(5)"
          :key="item"
        />
      </div>

      <p class="text text--rating">
        Лучший театр <br />
        по мнению театральных критиков Парижа
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "rating",
};
</script>

<style lang="scss">
@import "src/assets/scss/system";

.rating {
  background-image: url("/img/rating.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height: 550px;
  justify-items: center;
  align-content: center;
  @include laptop() {
    background-image: none;
  }
}

.dates {
  grid-column-start: 3;
  grid-column-end: 5;
}

.rate {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  grid-column-start: 6;
  grid-column-end: 12;
  justify-content: center;

  &__img {
    display: flex;
    column-gap: 25px;
  }
}
</style>
