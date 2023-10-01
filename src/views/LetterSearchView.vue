<template>
  <HeaderComponent />
  <div class="letter-search">
    <h1 class="letter">Recherche par lettre</h1>
    <!-- Barre de recherche par lettre -->
    <LetterSearchComponent :setsearchletter="performLetterSearch" />

    <div class="letter-search-bar">
      <div class="letter-buttons">
        <button
          v-for="letter in alphabet"
          :key="letter"
          @click="setSearchLetter(letter)"
          class="letter-button"
        >
          {{ letter }}
        </button>
      </div>
    </div>
  </div>

  <div class="search-results" v-if="searchResults.length > 0">
    <div class="cocktail-cards">
      <div
        v-for="result in searchResults"
        :key="result.idDrink"
        class="cocktail-card"
      >
        <div class="cocktail-image">
          <img :src="result.strDrinkThumb" :alt="result.strDrink" />
          <div class="cocktail-title">{{ result.strDrink }}</div>
        </div>
        <div class="cocktail-details">
          <div class="cocktail-instructions">
            <h4>Instructions:</h4>
            <p>{{ result.instructions }}</p>
          </div>
          <div class="cocktail-ingredients">
            <h4>Ingredients:</h4>
            <ul>
              <li v-for="ingredient in result.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="goBack">Retour</button>
  <FooterComponent />
</template>

<script>
import { searchByLetter } from "@/services/ApiCocktailDb.js";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LetterSearchComponent from "@/components/LetterSearchComponent.vue";

export default {
  name: "LetterSearchView",
  components: { HeaderComponent, LetterSearchComponent, FooterComponent },
  props: {},

  data() {
    return {
      searchResults: [],
    };
  },
  watch: {
    "$route.params.letter": "performLetterSearch",
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    performLetterSearch(letter) {
      this.searchLetter = letter || this.$route.params.letter;
      this.fetchSearchResults();
    },
    async fetchSearchResults() {
      this.searchResults = [];
      try {
        const response = await searchByLetter(this.searchLetter);
        if (!response.ok) {
          throw new Error("Erreur de recherche par lettre");
        }
        const data = await response.json();
        this.searchResults = data.drinks.map((drink) => ({
          strDrink: drink.strDrink,
          instructions: drink.strInstructions,
          ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
          ],
          strDrinkThumb: drink.strDrinkThumb,
        }));
      } catch (error) {
        console.error("Erreur lors de la recherche par lettre:", error);
      }
    },
  },
};
</script>

<style scoped>
.letter {
  margin-top: 80px;
  font-size: 1.8rem;
  font-style: italic;
  text-align: center;
  color: deeppink;
}
.letter-search-bar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.letter-buttons {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.letter-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: crimson;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.letter-button:hover {
  background-color: #181317;
}

.search-results {
  margin-top: 100px;
}

.cocktail-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.cocktail-card {
  background-color: transparent;
  color: #fff;
  border: 1px solid deeppink;
  border-radius: 10px;
  padding: 20px;
}

.cocktail-image {
  text-align: center;
}
.cocktail-image img {
  width: 300px;
  border-radius: 20px;
}
.cocktail-title {
  font-size: 1.5rem;
  margin-top: 10px;
  color: crimson;
}

.cocktail-instructions h4 {
  font-size: 1.2rem;
  color: deeppink;
}
.cocktail-instructions p {
  font-size: 1rem;
  font-style: italic;
  color: #da395b;
}

.cocktail-ingredients h4 {
  font-size: 1rem;
  margin-bottom: 5px;
  color: deeppink;
}

.cocktail-ingredients ul {
  list-style: none;
  padding: 0;
  margin-left: 0;
}

.cocktail-ingredients li {
  margin-bottom: 5px;
  list-style-type: none;
  font-size: 0.8rem;
  color: #da395b;
}

.cocktail-details {
  display: flex;
  flex-direction: column;
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
