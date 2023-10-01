<template>
  <HeaderComponent />
  <div class="categories-page">
    <h1 class="titleCategory">Liste des catégories</h1>
    <ul class="category-list">
      <li
        class="listCategory"
        v-for="category in categories"
        :key="category.strCategory"
      >
        <router-link
          :to="{
            name: 'CategoryResults',
            params: { category: category.strCategory },
          }"
        >
          {{ category.strCategory }}
        </router-link>
      </li>
    </ul>
    <button @click="goBack">Retour</button>
  </div>
  <FooterComponent />
</template>

<script>
import { getCategory } from "@/services/ApiCocktailDb";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchCategories() {
      try {
        const response = await getCategory();
        const data = await response.json();
        this.categories = data.drinks; //
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        throw error;
      }
    },
  },
};
</script>

<style>
.categories-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.titleCategory {
  font-size: 2rem;
  margin-bottom: 20px;
  color: deeppink;
}

.category-list {
  padding: 0;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
}

.listCategory {
  list-style-type: none;
  font-size: 1.5rem;
  color: #f36172;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.listCategory:hover {
  background-color: fuchsia;
}
.listCategory a {
  color: #da395b;
  text-decoration: none;
  font-weight: 600;
}

.category-item {
  margin-bottom: 10px;
  font-size: 18px;
}
</style>
