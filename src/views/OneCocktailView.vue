<template>
  <HeaderComponent />
  <div class="container">
    <div class="cocktail-detail" v-if="cocktail">
      <div class="oneCocktail-card">
        <figure>
          <img
            class="imgCocktail"
            :src="cocktail.strDrinkThumb"
            :alt="cocktail.strDrink"
          />
          <figcaption>{{ cocktail.strDrink }}</figcaption>
        </figure>
        <span class="category">{{ cocktail.strCategory }}</span
        ><br />
        <span class="alcool">{{ cocktail.strAlcoholic }}</span>
        <p class="instructions">Instructions: {{ cocktail.strInstructions }}</p>
        <span class="ingredient">Ingrédients</span>
        <div class="ingredient-thumbnails">
          <div
            class="ingredient-thumbnail"
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >
            <img
              class="thumbnailCocktail"
              :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Small.png`"
              :alt="ingredient.name"
            />
            <span class="ingredient-name">{{ ingredient.name }}</span>
            <span class="ingredient-measure">{{ ingredient.measure }}</span>
          </div>
        </div>
        <button @click="goBack">Retour</button>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { getOneCocktail } from "@/services/ApiCocktailDb.js";

export default {
  name: "OneCocktailView",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      cocktail: {},
      ingredients: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },

  async created() {
    const idDrink = this.$route.params.idDrink;
    try {
      const response = await getOneCocktail(idDrink);
      const data = await response.json();
      this.cocktail = data.drinks[0];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
          this.ingredients.push({ name: ingredient, measure });
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du cocktail :", error);
    }
  },
};
</script>
<style>
.container {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cocktail-detail {
  text-align: center;
}

.imgCocktail {
  width: 350px;
  border-radius: 20px;
}
.imgCocktail {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.imgCocktail:hover {
  -webkit-transform: scale(1);
  transform: scale(1);
}

figcaption {
  font-size: 2rem;
  font-weight: 500;
  color: deeppink;
  margin-top: 30px;
}

.category {
  font-size: 1.5rem;
  color: #da395b;
  font-style: italic;
}

.alcool {
  font-size: 1.5rem;
  color: #da395b;
}

.instructions {
  font-size: 2rem;
  color: #f36172;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}

.ingredient {
  font-size: 1.9rem;
  color: #da395b;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
}
.thumbnailCocktail {
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: 5px deeppink solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  img {
    width: 100%;
    height: auto;
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
.ingredient-name {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 1.9rem;
  color: #da395b;
}
.ingredient-measure {
  font-size: 1.9rem;
  color: #da395b;
}
.ingredient-thumbnails {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

li {
  list-style-type: none;
  font-size: 1.2rem;
  color: #f36172;
}

button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 100px;
  background-color: #96142e;
  color: #fff;
  text-decoration: none;
  text-decoration: none;
  border-bottom: 5px solid #f36172;
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
}

button:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  border-bottom: 1px solid;
}

@media screen and (max-width: 600px) {
  .instructions {
    font-size: 2rem;
  }
  .category {
    font-size: 1.8rem;
  }
  .alcool {
    font-size: 1.8rem;
  }
  .ingredient {
    font-size: 2rem;
  }
  .ingredients {
    font-size: 2rem;
  }
  button {
    font-size: 2rem;
  }
}
</style>
