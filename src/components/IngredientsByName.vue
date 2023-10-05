<template>
  <HeaderComponent />
  <div class="row-limit-size">
    <h1 class="titleCocktail">Cocktails à base de {{ ingredientName }}</h1>
    <ul class="cocktail-list">
      <li
        class="CocktailName"
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
      >
        <router-link :to="'/cocktail/' + cocktail.idDrink">
          {{ cocktail.strDrink }}
        </router-link>
      </li>
    </ul>
    <button @click="goBack">Retour</button>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { getIngredientByName } from "@/services/ApiCocktailDb.js";

export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      ingredientName: "",
      cocktails: [],
    };
  },

  created() {
    this.ingredientName = this.$route.params.ingredientName;
    this.fetchCocktailsByIngredient();
  },

  watch: {
    "$route.params.ingredientName": "fetchCocktailsByIngredient",
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    goToCocktailDetail(cocktailId) {
      const currentUrl = this.$router.currentRoute.fullPath;
      // Passez l'URL en tant que paramètre lors de la navigation vers la page de détails du cocktail
      this.$router.push({
        name: "OneCocktailDetail",
        params: { idDrink: cocktailId, previousUrl: currentUrl },
      });
    },
    async fetchCocktailsByIngredient() {
      try {
        const response = await getIngredientByName(this.ingredientName);
        if (!response.ok) {
          throw new Error("La requête n'a pas abouti : " + response.status);
        }
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
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
.titleCocktail {
  font-size: 1.8rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
  color: deeppink;
}
.cocktail-list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.CocktailName {
  width: 80%;
  font-size: 1.5rem;
  margin-bottom: 10px;
  border: 1px solid pink;
  padding: 10px;
  border-radius: 5px;
}
.CocktailName a {
  color: #da395b;
  text-decoration: none;
}
button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 100px;
  background-color: #96142e;
  color: #fff;
  text-decoration: none;
  border: 2px solid #96142e;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

button:hover {
  background-color: transparent;
  color: #96142e;
}
</style>
