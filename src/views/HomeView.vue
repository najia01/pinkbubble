<template>
  <HeaderComponent />
  <div class="row-limit-size">
    <div class="home">
      <div class="drinks">
        <img
          class="color-drinks"
          src="../assets/img/blue-lagoon.jpg "
          alt="blue-lagoon"
        />
        <img
          class="color-drinks"
          src="../assets/img/cocktail-fraises.jpg "
          alt="cocktail-fraises"
        />
        <img
          class="color-drinks"
          src="../assets/img/limonade-fraiche-bleue.jpg "
          alt="limonade-fraiche-bleue"
        />
      </div>

      <h1 class="search-title">Citation</h1>
      <p class="citation">
        "Les cocktails sans alcool sont comme des poèmes sans rimes. Ils ont la
        magie, la créativité et le goût, mais ils préservent la clarté de
        l'esprit."<br />
      </p>
      <span class="name">Richard Branson</span>

      <!-- Pictures  -->
      <h1 class="tendances">Les tendances du moment</h1>
      <div class="nonalcohol">
        <img
          class="cocktailsImg"
          src="../assets/img/anil.png"
          alt="cocktail anil"
        />
        <img
          class="cocktailsImg"
          src="../assets/img/blu.png"
          alt="cocktail anil"
        />
        <img
          class="cocktailsImg"
          src="../assets/img/bleu.png"
          alt="cocktail anil"
        />

        <img
          class="cocktailsImg"
          src="../assets/img/charlotte.png"
          alt="cocktail anil"
        />
      </div>
      <!-- texte  -->

      <h1 class="pink">PINK BUBBLE C'EST</h1>
      <p class="intro">
        Une collection diversifiée de recettes de cocktails, des classiques
        revisités aux créations originales, le tout présenté avec des
        instructions claires et faciles à suivre. Que vous prépariez un cocktail
        pour une soirée entre amis, une fête spéciale ou tout simplement pour
        vous détendre après une longue journée, nos recettes vous guideront vers
        l'excellence de la mixologie.
      </p>

      <h1 class="randPict">Vous aimerez aussi...</h1>

      <Carousel
        autoplay="2000"
        wrapAround="true"
        v-bind="settings"
        :breakpoints="breakpoints"
      >
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
      },
    };
  },
  methods: {
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
  box-sizing: border-box;
}
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.search-title {
  font-size: 1.8rem;
  color: deeppink;
  margin-top: inherit;
}

.citation {
  width: 800px;
  margin: 0 auto;
  line-height: 2;
  font-size: 1.8rem;
  color: deeppink;
  font-style: italic;
}

.name {
  font-style: italic;
  color: #da395b;
  font-size: 1.3rem;
}
.tendances {
  font-size: 2rem;
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
  transform: scale(1.1);
}
figcaption {
  color: deeppink;
}
/* texte middle  */
.pink {
  text-transform: capitalize;
  margin-top: 100px;
  /* color: deeppink; */
  text-align: center;
  font-size: 2.5em;
  letter-spacing: 2px;
  font-weight: 600;
  text-shadow: 0 0 2px deeppink, 0 0 30px deeppink, 0px 0px 5px deeppink,
    0 0 150px deeppink;
  color: deeppink;
}
.intro {
  font-size: 1.5rem;
  font-style: italic;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5;
  color: #da395b;
}
/* slider */
h1 {
  margin-top: 100px;
  color: deeppink;
}
.TitleCocktails {
  font-size: 1.8rem;
  font-style: italic;
  color: deeppink;
}
.carousel__viewport {
  overflow: hidden;
  margin-top: 80px;
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
  .tendances {
    display: none;
  }
  .intro {
    font-size: 2rem;
  }
  figcaption.titleCock {
    font-size: 2rem;
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
  .tendances {
    display: none;
  }
  .search-title {
    font-size: 2rem;
  }

  .citation {
    font-size: 2.1rem;
  }
  .name {
    font-size: 1.6rem;
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
