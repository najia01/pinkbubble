<template>
  <HeaderComponent />
  <div class="category-results row-limit-size">
    <h1 class="titleResults">Résultats pour la catégorie : {{ category }}</h1>
    <ul class="CategoryResults">
      <li
        class="ResultsCategory"
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
      >
        <router-link :to="`/cocktail/${cocktail.idDrink}`">{{
          cocktail.strDrink
        }}</router-link>
      </li>
    </ul>
    <button @click="goBack">Retour</button>
  </div>
  <FooterComponent />
</template>

<script>
import { CocktailByCategory } from "@/services/ApiCocktailDb";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      category: "",
      cocktails: [],
    };
  },
  created() {
    this.category = this.$route.params.category;
    this.fetchDrinksByCategory();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchDrinksByCategory() {
      try {
        const response = await CocktailByCategory(this.category);
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        throw error;
      }
    },
  },
};
</script>
<style>
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.titleResults {
  font-size: 2.3rem;
  font-style: italic;
  text-align: center;
  color: deeppink;
}

.CategoryResults {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;
  padding-left: 0px;
}

.ResultsCategory {
  padding: 10px;
  margin-top: 70px;
  border: 1px solid pink;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.ResultsCategory:hover {
  background-color: #f77fbe;
}

.ResultsCategory a {
  color: #da395b;
  text-decoration: none;
  font-size: 2rem;
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

/* media queries  */
@media screen and (max-width: 700px) {
  .titleResults {
    font-size: 2.5rem;
  }
  .ResultsCategory {
    font-size: 2rem;
  }
  .category-results {
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }

  .CategoryResults {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0px;
  }
}
</style>
