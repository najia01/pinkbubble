<template>
  <section class="containerCocktail">
    <div class="cocktail-card">
      <figure>
        <img :src="strDrinkThumb" alt="strDrink" />
      </figure>
      <h3>{{ strDrink }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "CocktailComponent",
  props: {
    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number,
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 20px 0 0;
  text-align: center;
}
</style>
