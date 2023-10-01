import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import OneCocktailView from "@/views/OneCocktailView.vue";
import LetterSearchView from "@/views/LetterSearchView.vue";
import IngredientSearchView from "@/views/IngredientSearchView.vue";
import IngredientsByName from "@/components/IngredientsByName.vue";
import CategoryView from "@/components/CategoryView.vue";
import CategoryResults from "@/components/CategoryResults.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/cocktail/:idDrink",
    name: "OneCocktailDetail",
    component: OneCocktailView,
    props: true,
  },

  {
    path: "/search/letter/:letter",
    name: "LetterSearch",
    component: LetterSearchView,
    props: true,
  },

  {
    path: "/category",
    name: "CategoryResult",
    component: CategoryView,
    props: true,
  },
  {
    path: "/category/:category",
    name: "CategoryResults",
    component: CategoryResults,
  },
  {
    path: "/ingredient",
    name: "IngredientSearch",
    component: IngredientSearchView,
  },

  {
    path: "/ingredients/:ingredientName",
    name: "IngredientsByName",
    component: IngredientsByName,
  },

  {
    path: "/aboutview",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
