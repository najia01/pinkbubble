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
      </div>
    </div>

    <div class="responseSearch" v-if="searchResults.length > 0">
      <ul class="detailsSearch">
        <li
          class="cokctailList"
          v-for="cocktail in searchResults"
          :key="cocktail.idDrink"
        >
          <router-link
            :to="{
              name: 'OneCocktailDetail',
              params: { idDrink: cocktail.idDrink },
            }"
          >
            <figure>
              <img
                class="searchImg"
                :src="cocktail.strDrinkThumb"
                :alt="cocktail.strDrink"
              />
              <figcaption class="titleCock">{{ cocktail.strDrink }}</figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Pictures  -->
    <h1>Les tendances du moment</h1>
    <div class="nonalcohol">
      <img class="cocktailsImg" src="../assets/anil.png" alt="cocktail anil" />
      <img class="cocktailsImg" src="../assets/blu.png" alt="cocktail anil" />
      <img class="cocktailsImg" src="../assets/bleu.png" alt="cocktail anil" />
      <!-- <img
        class="cocktailsImg"
        src="../assets/citron.png"
        alt="cocktail anil"
      /> -->
      <img
        class="cocktailsImg"
        src="../assets/charlotte.png"
        alt="cocktail anil"
      />
    </div>
    <!-- texte  -->

    <h1 class="pink">PINK BUBBLE C'EST</h1>
    <p class="intro">
      Une collection diversifiée de recettes de cocktails, des classiques
      revisités aux créations originales, le tout présenté avec des instructions
      claires et faciles à suivre. Que vous prépariez un cocktail pour une
      soirée entre amis, une fête spéciale ou tout simplement pour vous détendre
      après une longue journée, nos recettes vous guideront vers l'excellence de
      la mixologie.
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
            <h3 class="TitleCocktails">{{ cocktail.strDrink }}</h3>
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
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        550: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        800: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
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
  background-color: black;
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
.color-drinks:hover {
  opacity: 70%;
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
  color: deeppink;
}

.citation {
  font-size: 1.3rem;
  font-family: "OpenSans-Bold", sans-serif;
  font-style: italic;
  text-align: center;
  color: deeppink;
  padding: 30px;
  line-height: 2;
}

.citation .name {
  font-size: 1.5rem;
  font-family: "OpenSans-Bold", sans-serif;
  text-transform: capitalize;
  color: deeppink;
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
  color: deeppink;
  font-style: italic;
  opacity: 0.6;
}

.search-bar {
  height: 3em;
  display: flex;
  border-radius: 4em;
}
.search-bar:hover .SearchBar-input {
  padding-left: 2em;
  padding-right: 1em;
  width: 400px;
}
.search-bar .SearchBar-input {
  width: 0;
  font-size: 1.2em;
  color: deeppink;
  transition: 0.45s;
}

.search-bar .SearchBar-button {
  border-radius: 50%;
  height: 3.5em;
  transition: 0.3s;
  color: pink;
  padding: inherit;
  margin-top: inherit;
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
.titleCock {
  text-decoration: none;
}
.cokctailList a {
  text-decoration: none;
}
.searchImg {
  width: 300px;
  border-radius: 20px;
}
.searchImg:hover {
  transform: scale(1.2);
}
.randPict {
  color: deeppink;
}
.nonalcohol {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.cocktailsImg {
  width: 300px;
  border-radius: 20px;
}
.cocktailsImg:hover {
  opacity: 70%;
  transform: scale(1.2);
}
figcaption {
  color: deeppink;
}
/* texte middle  */
.pink {
  text-transform: capitalize;
  margin-top: 100px;
  color: deeppink;
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
  color: deeppink;
}
.TitleCocktails {
  font-size: 1.2rem;
  font-style: italic;
  color: deeppink;
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
.carousel__track {
  display: flex;
  position: relative;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}
.carousel__slide img {
  max-width: 350px;
  height: auto;
  border-radius: 20px;
}
.carousel__slide img:hover {
  transform: scale(1.2);
}
.carousel * {
  box-sizing: border-box;
  text-decoration: none;
  color: deeppink;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid deeppink;
  border-radius: 50%;
}

/* media queries  */
@media screen and (max-width: 500px) {
  .carousel__slide img {
    width: 250px;
  }
}
@media screen and (max-width: 768px) {
  .nonalcohol {
    display: none;
  }

  .drinks {
    display: none;
  }

  .color-drinks {
    width: 80%;
    margin-bottom: 20px;
  }

  .search-contain {
    flex-direction: column;
  }

  .search-title {
    font-size: 1.5rem;
  }

  .citation {
    font-size: 1.1rem;
  }

  .search-bar {
    flex-direction: column;
  }

  .search-bar input {
    margin-bottom: 10px;
  }

  .responseSearch {
    flex-direction: column;
  }

  .detailsSearch {
    flex-direction: column;
  }

  .searchImg {
    width: 80%;
    margin-bottom: 20px;
  }

  .cocktailsImg {
    width: 80%;
    margin-bottom: 20px;
  }

  .carousel__slide {
    margin-bottom: 20px;
  }

  .carousel__slide img {
    width: 80%;
  }
}
</style>
