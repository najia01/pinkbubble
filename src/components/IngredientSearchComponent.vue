<template>
  <div class="ingredientContainer row-limit-size">
    <h1 class="titleIngredients">Liste des Ingrédients</h1>
    <ul class="listIngredients">
      <li
        class="ingredientName"
        v-for="ingredient in ingredients"
        :key="ingredient.strIngredient1"
      >
        <router-link :to="'/ingredients/' + ingredient.strIngredient1">
          {{ ingredient.strIngredient1 }}
        </router-link>
      </li>
    </ul>
    <button @click="goBack">Retour</button>
  </div>
</template>

<script>
import { searchByIngredients } from "@/services/ApiCocktailDb.js";

export default {
  data() {
    return {
      ingredients: [],
    };
  },

  created() {
    this.fetchIngredients();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    async fetchIngredients() {
      try {
        const response = await searchByIngredients();
        if (!response.ok) {
          throw new Error("La requête n'a pas abouti : " + response.status);
        }
        const data = await response.json();
        this.ingredients = data.drinks;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des ingrédients :",
          error
        );
      }
    },
  },
};
</script>

<style scoped>
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.titleIngredients {
  font-size: 2.3rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
  color: deeppink;
}

.ingredient-list {
  list-style: none;
  padding: 0;
}
.listIngredients {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0;
  margin-top: 100px;
}
.ingredientName a {
  color: #da395b;
  text-decoration: none;
}
.ingredient-item {
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

/* media queries  */
@media screen and (max-width: 600px) {
  .ingredientName {
    font-size: 2rem;
  }
  .titleIngredients {
    font-size: 2.3rem;
  }
}
</style>
