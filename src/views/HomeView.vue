<template>
  <HeaderComponent />

  <div class="home">
    <div class="drinks">
      <img
        class="color-drinks"
        src="../assets/blue-lagoon.jpg "
        alt="blue-lagoon"
      />
      <img
        class="color-drinks"
        src="../assets/cocktail-fraises.jpg "
        alt="cocktail-fraises"
      />
      <img
        class="color-drinks"
        src="../assets/limonade-fraiche-bleue.jpg "
        alt="limonade-fraiche-bleue"
      />
    </div>

    <!-- BARRE DE RECHERCHE -->
    <div class="search-contain">
      <h1 class="search-title">Citation</h1>
      <p class="citation">
        "Les cocktails sans alcool sont comme des poèmes sans rimes. Ils ont la
        magie, la créativité et le goût, mais ils préservent la clarté de
        l'esprit."<br />
        <span class="name">Richard Branson</span>
      </p>

      <div class="search-bar">
        <!-- <form @submit.prevent="performSearch"> -->
        <input
          v-model="searchText"
          type="text"
          name="search"
          class="SearchBar-input"
          placeholder="Votre recherche ici....."
        />
        <button @click.prevent="performSearch" class="SearchBar-button">
          Search
        </button>
        <!-- </form> -->
      </div>
    </div>

    <!-- <h2>Résultats de la recherche :</h2> -->

    <div class="responseSearch" v-if="searchResults.length > 0">
      <ul class="detailsSearch">
        <li v-for="cocktail in searchResults" :key="cocktail.idDrink">
          <h3>{{ cocktail.strDrink }}</h3>
          <figure>
            <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          </figure>
        </li>
      </ul>
    </div>

    <!-- Pictures  -->
    <h1>Les tendances du moment</h1>
    <div class="nonalcohol">
      <img src="../assets/anil.png" alt="cocktail anil" />
      <img src="../assets/blu.png" alt="cocktail anil" />
      <img src="../assets/bleu.png" alt="cocktail anil" />
      <img src="../assets/citron.png" alt="cocktail anil" />
      <img src="../assets/charlotte.png" alt="cocktail anil" />
    </div>
    <!-- texte  -->

    <h1 class="pink">PINK BUBBLE C'EST</h1>
    <p class="intro">
      Des recettes conçues pour vous offrir une explosion de saveurs sans
      l'influence de l'alcool. Que vous recherchiez une boisson rafraîchissante
      pour une chaude journée d'été, un cocktail sans alcool festif pour une
      soirée entre amis, ou une option délicieuse pour les designated drivers,
      PinkPubble a la solution parfaite pour vous.De la classique Virgin Mojito
      à notre création signature, le Pink Sunrise Bliss, nos cocktails sans
      alcool sont conçus pour éveiller vos sens et égayer vos moments
      spéciaux.PinkPubble vous accompagne avec des instructions faciles à suivre
      et des conseils pour réussir chaque préparation.
    </p>

    <h1 class="randPict">Vous aimerez aussi...</h1>

    <Carousel :items-to-show="3">
      <slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <router-link
          :to="{
            name: 'OneCocktailDetail',
            params: { idDrink: cocktail.idDrink },
          }"
        >
          <div class="cocktail-card">
            <h3>{{ cocktail.strDrink }}</h3>
            <figure>
              <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
            </figure>
          </div>
        </router-link>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { getRandomCocktails } from "@/services/ApiCocktailDb.js";
import { searchByCocktail } from "@/services/ApiCocktailDb.js";
// import { ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      searchText: "",
      searchResults: [],
      cocktails: [],
    };
  },

  methods: {
    async performSearch() {
      this.searchResults = [];
      try {
        const response = await searchByCocktail(this.searchText);
        if (!response.ok) {
          throw new Error("Erreur de recherche");
        }
        const data = await response.json();
        this.searchResults = data.drinks || [];
      } catch (error) {
        console.error("Erreur lors de la recherche de cocktails:", error);
      }
    },
    async fetchCocktails() {
      try {
        const response = await getRandomCocktails();
        const data = await response.json();
        this.cocktails = data.drinks.map((cocktail) => ({
          ...cocktail,
          details: {},
        }));
      } catch (error) {
        console.error("Error fetching random cocktails:", error);
      }
    },
  },
  created() {
    this.fetchCocktails();
  },
});
</script>

<style>
body {
  background-color: #181317;
}

.drinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 100px;
}

.color-drinks {
  width: 300px;
  height: 350px;
  border-radius: 20px;
}

/* Search bar */
.search-contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-title {
  font-size: 1.8rem;
  font-family: "OpenSans-Bold", sans-serif;
  text-align: center;
  font-style: italic;
  color: #fff;
}

.citation {
  font-size: 1.3rem;
  font-family: "OpenSans-Bold", sans-serif;
  font-style: italic;
  text-align: center;
  color: #fff;
  padding: 30px;
  line-height: 2;
}

.citation .name {
  font-size: 1.5rem;
  font-family: "OpenSans-Bold", sans-serif;
  text-transform: capitalize;
  color: #fff;
}

input,
button {
  border: none;
  background: none;
  outline: 0;
}

button {
  cursor: pointer;
}

.SearchBar-input::placeholder {
  color: white;
  font-style: italic;
  opacity: 0.6;
}

.search-bar {
  height: 3em;
  display: flex;
  border-radius: 4em;
  background-color: #a32308;
}
.search-bar:hover .SearchBar-input {
  padding-left: 2em;
  padding-right: 1em;
  width: 400px;
}
.search-bar .SearchBar-input {
  width: 0;
  font-size: 1.2em;
  color: white;
  transition: 0.45s;
}
.search-bar .SearchBar-button {
  border-radius: 50%;
  height: 3.5em;
  transition: 0.3s;
  color: white;
}
.search-bar .SearchBar-button:active {
  transform: scale(0.85);
}
.search-bar .SearchBar-icon {
  margin: auto;
  color: #fff;
}

/* resultats recherche */
.responseSearch {
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.detailsSearch {
  display: contents;
}
/* cocktails sans alcool*/
.randPict {
  color: #96142e;
}
.nonalcohol {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.containerCocktail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cocktail-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
figure {
  width: 300px;
  height: fit-content;
}
img {
  width: 300px;
  border-radius: 20px;
}
h3 {
  color: #fff;
}
/* texte middle  */
.pink {
  text-transform: capitalize;
  margin-top: 100px;
  color: #96142e;
}
.intro {
  font-size: 1.2rem;
  font-style: italic;
  text-align: justify;
  padding: 20px;
}
/* slider */
h1 {
  margin-top: 100px;
  color: #96142e;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
.carousel__slide img {
  max-width: 350px;
  height: auto;
}
.carousel * {
  box-sizing: border-box;
  color: white;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid #a32308;
  border-radius: 50%;
}
</style>
