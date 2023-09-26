<template>
  <HeaderComponent />
  <div class="letter-search">
    <h1>Search by Letter</h1>

    <!-- Barre de recherche par lettre -->
    <LetterSearchComponent :setSearchLetter="setSearchLetter" />

    <div class="search-bar">
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

    <!-- Résultats de la recherche -->
    <div class="search-results">
      <h2>Results for letter "{{ searchLetter }}"</h2>
      <ul>
        <li v-for="cocktail in searchResults" :key="cocktail.idDrink">
          <h3>{{ cocktail.strDrink }}</h3>
          <p>{{ cocktail.instructions }}</p>
          <ul>
            <li v-for="ingredient in cocktail.ingredients" :key="ingredient">{{ ingredient }}</li>
          </ul>
          <figure>
            <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          </figure>
        </li>
      </ul>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import { ref } from "vue";
import { searchByLetter } from "@/services/ApiCocktailDb.js";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LetterSearchComponent from "@/components/LetterSearchComponent.vue";

export default {
  name: "LetterSearchView",
  components: { HeaderComponent, LetterSearchComponent, FooterComponent },
  
  data() {
    return {
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      searchLetter: "",
      searchResults: [],
    };
  },
  methods: {
    setSearchLetter(letter) {
      this.searchLetter = letter;
      this.performLetterSearch();
    },
    async performLetterSearch() {
      this.searchResults = [];
      try {
        const response = await searchByLetter(this.searchLetter);
        if (!response.ok) {
          throw new Error("Erreur de recherche par lettre");
        }
        const data = await response.json();
        this.searchResults = data.drinks.map((drink) => ({
          title: drink.strDrink,
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
/* Styles spécifiques à la vue LetterSearchView */
.letter-search {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}
h3{
    color: #333;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.letter-buttons {
  display: flex;
  flex-wrap: wrap;
}

.letter-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.letter-button:hover {
  background-color: #0056b3;
}

.search-results ul {
  list-style: none;
  padding: 0;
}

.search-results li {
  margin: 20px 0;
  padding: 20px;
 
  border-radius: 4px;
}

.search-results h2 {
  font-size: 1.5rem;
  margin-top: 0;
}

.search-results h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.search-results img {
  max-width: 100%;
  height: auto;
}
</style>
