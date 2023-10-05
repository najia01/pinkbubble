<template>
  <HeaderComponent />
  <IngredientSearchComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import IngredientSearchComponent from "@/components/IngredientSearchComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    IngredientSearchComponent,
  },

  data() {
    return {
      selectedIngredients: [],
      cocktails: [],
    };
  },
};
</script>

<style scoped>
.resultsIngredients {
  width: 100%;
  height: 500px;
  margin: 0 auto;
}

.cocktail-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cocktail-list li {
  padding: 5px;
  border: 1px solid #ccc;
  margin: 5px 0;
  background-color: #f9f9f9;
}

.cocktail-list li:hover {
  background-color: #e0e0e0;
}
</style>
