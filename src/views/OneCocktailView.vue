<template>
  <HeaderComponent />
  <div class="cocktail-detail" v-if="cocktail">
    <div class="oneCocktail-card">
      <figure>
        <img
          class="imgCocktail"
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
        />
        <figcaption>{{ cocktail.strDrink }}</figcaption>
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
      <button @click="goBack">Retour</button>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
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
    const idDrink = this.$route.params.idDrink;
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
.imgCocktail {
  width: 400px;
  border-radius: 20px;
}
.imgCocktail:hover {
  opacity: 50%;
}
figcaption {
  font-size: 1.7rem;
  font-weight: 500;
  color: deeppink;
  margin-top: 30px;
}
.cocktail-detail {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.category {
  font-size: 1.2rem;
  color: #da395b;
  font-style: italic;
}
.alcool {
  font-size: 1rem;
  color: #da395b;
}

.instructions {
  font-size: 1.5rem;
  color: #f36172;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}
.ingredient {
  font-size: 1.3rem;
  color: #da395b;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}
li {
  list-style-type: none;
  font-size: 1.2rem;
  color: #f36172;
}

button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 40px;
  background-color: #96142e;
  color: #fff;
  text-decoration: none;
  border: 2px solid #96142e;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 20px;
}

button:hover {
  background-color: transparent;
  color: #96142e;
}
</style>
