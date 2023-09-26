import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import OneCocktailView from "@/views/OneCocktailView.vue";
import LetterSearchView from "@/views/LetterSearchView.vue";

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
    path: "/aboutview",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
