<template>
  <HeaderComponent />
  <div class="categories-page row-limit-size">
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
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.titleCategory {
  font-size: 2.3rem;
  margin-bottom: 20px;
  text-align: center;
  background-image: linear-gradient(
    -225deg,
    #fd1d1d 0%,
    #833ab4 29%,
    #fd1d1d 67%,
    #fcb045 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 100% center;
  }
}

.category-list {
  padding: 0;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
}

.listCategory {
  height: 100px;
  width: 500px;
  list-style-type: none;
  font-size: 1.8rem;
  color: #f36172;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.listCategory:hover {
  background-color: #f77fbe;
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

/* media queries  */
@media screen and (max-width: 700px) {
  .listCategory {
    width: 250px;
    font-size: 1.7rem;
  }
  .category-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
}
</style>
