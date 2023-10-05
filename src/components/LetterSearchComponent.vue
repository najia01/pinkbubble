<template>
  <div class="letter-search">
    <!-- Barre de recherche par lettre -->
    <div class="letter-search-bar">
      <router-link
        v-for="letter in letters"
        :to="'/search/letter/' + letter"
        :key="letter"
        class="letter-button"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <!-- Résultats de la recherche -->
  <div class="search-results">
    <div class="cocktail-cards">
      <router-link
        v-for="cocktail in searchResults"
        :key="cocktail.idDrink"
        :to="'/cocktail/' + cocktail.idDrink"
        class="cocktail-card"
      >
        <div class="cocktail-image">
          <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          <div class="cocktail-title">{{ cocktail.strDrink }}</div>
        </div>
        <div class="cocktail-details">
          <div class="cocktail-instructions">
            <h4>Instructions:</h4>
            <p>{{ cocktail.instructions }}</p>
          </div>
          <div class="cocktail-ingredients">
            <h4>Ingredients:</h4>
            <ul>
              <li v-for="ingredient in cocktail.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetterSearchComponent",

  data() {
    return {
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    };
  },
};
</script>

<style scoped>
.letter-search-bar {
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
  font-size: 1.5rem;
}

.letter-button:hover {
  background-color: #181317;
}

/* media queries */
</style>
