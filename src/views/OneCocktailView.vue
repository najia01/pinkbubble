<template>
  <HeaderComponent />
  <div class="cocktail-detail" v-if="cocktail">
    <div class="oneCocktail-card">
      <h3>{{ cocktail.strDrink }}</h3>
      <figure>
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      </figure>
    </div>
    <span class="category">{{ cocktail.strCategory }}</span>
    <span class="alcool">{{ cocktail.strAlcoholic }}</span>

    <div class="cocktailInstruction">
      <p class="instructions">Instructions: {{ cocktail.strInstructions }}</p>
      <span class="ingredient">Ingredients</span>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <router-link :to="{ name: 'home' }" class="back-link">Retour</router-link>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { getOneCocktail } from "@/services/ApiCocktailDb.js";

export default {
  name: "OneCocktailView",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      cocktail: {},
    };
  },

  computed: {
    ingredients() {
      const ingredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
          ingredients.push(`${ingredient} - ${measure}`);
        }
      }
      return ingredients;
    },
  },
  async created() {
    const { idDrink } = this.$route.params;
    try {
      const response = await getOneCocktail(idDrink);
      const data = await response.json();
      this.cocktail = data.drinks[0];
    } catch (error) {
      console.error("Erreur lors de la récupération du cocktail :", error);
    }
  },
};
</script>

<style>
h3 {
  font-size: 1.8rem;
  font-weight: 600;
}
.cocktail-detail {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.category {
  font-size: 1.2rem;
  color: #fff;
  font-style: italic;
}
.alcool {
  font-size: 1rem;
  color: #fff;
}

.instructions {
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}
.ingredient {
  font-size: 1.3rem;
  color: #fff;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}
li {
  list-style-type: none;
  font-size: 1.2rem;
  color: #fff;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 50px;
  background-color: #96142e;
  color: #fff;
  text-decoration: none;
  border: 2px solid #96142e;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.back-link:hover {
  background-color: transparent;
  color: #96142e;
}
</style>
