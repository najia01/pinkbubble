<template>
  <div class="header row-limit-size">
    <router-link to="/">
      <img class="logo" src="../assets/img/logo.png" alt="logo pinkbubble"
    /></router-link>
    <div class="search-contain">
      <div class="search-bar">
        <input
          v-model="searchText"
          type="text"
          name="search"
          class="SearchBar-input"
          placeholder="Votre recherche de cocktail....."
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

    <p class="hero-paragraphe">
      Bienvenue dans l'univers pétillant de Pink Bubble, où la créativité
      s'exprime à travers des cocktails avec ou sans alcool aussi délicieux que
      colorés !
    </p>
    <div id="sidemenu">
      <button
        class="sidemenu-btn rose-bars"
        v-on:click="navOpen = !navOpen"
        v-bind:class="{ active: navOpen }"
      >
        <img id="menu" src="../assets/img/hamburger.png" alt="menu burger" />
      </button>

      <nav v-show="navOpen">
        <div class="sidemenu-wrapper">
          <ul class="sidemenu-list">
            <li class="sidemenu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="sidemenu-item">
              <router-link to="/ingredient">Search by Ingredient</router-link>
            </li>
            <li class="sidemenu-item">
              <router-link :to="{ name: 'CategoryResult' }"
                >Category</router-link
              >
            </li>
            <li class="sidemenu-item">
              <router-link
                :to="{ name: 'LetterSearch', params: { letter: 'A' } }"
                >Search by Letter</router-link
              >
            </li>
            <li class="sidemenu-item">
              <router-link to="/aboutview">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { searchByLetter, searchByCocktail } from "@/services/ApiCocktailDb.js";

export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {
      searchResults: [],
      searchText: "",
      cocktails: [],
      navOpen: false,
    };
  },
  watch: {
    searchText: function (newText) {
      this.performSearch();
    },
  },
  methods: {
    async LetterSearch() {
      this.searchResults = [];
      try {
        const response = await searchByLetter(this.letter);

        const data = await response.json();
        this.searchResults = data.drinks || [];
      } catch (error) {
        console.error("Erreur lors de la recherche par lettre", error);
      }
    },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.header a {
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
}
.logo {
  width: 180px;
  margin: 0 auto;
}

.search-contain {
  text-align: center;
  padding: 20px;
}
/* Style de la barre de recherche */
.search-bar {
  margin-top: 20px;
}

.SearchBar-input {
  width: 500px;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.SearchBar-button {
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: deeppink;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.SearchBar-button:hover {
  background-color: #f77fbe;
}

.hero-paragraphe {
  font-size: 2rem;
  text-align: center;
  padding: 80px;
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

nav a.router-link-exact-active {
  color: deeppink;
}
nav {
  padding: 0;
}

.sidemenu-wrapper {
  width: 280px;
}

#sidemenu {
  position: absolute;
  top: 30px;
}

.sidemenu-btn {
  display: block;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

#menu {
  display: block;
  width: 50px;
  transition: all 0.4s ease;
}

.sidemenu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidemenu-item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1 rem;
  padding: 0.5em;
  display: block;
  color: deeppink;
  transition: 0.4s ease;
}

.sidemenu-item a:hover {
  background: #920d23;
  color: #dd3f5b;
  opacity: 90%;
}

/* *-*-*-*-MEDIAQUERIES*-*-*-*-*- */
@media screen and (max-width: 500px) {
  .hero-paragraphe {
    font-size: 2.5rem;
  }

  .logo {
    width: 30%;
    margin: 0 auto;
  }
  #sidemenu {
    top: 0;
  }
  .sidemenu-item {
    font-size: 2.5rem;
  }
  .sidemenu-btn {
    display: block;
  }

  nav {
    flex-direction: column;
  }

  .sidemenu-wrapper {
    padding: 0;
    width: 300px;
  }

  .sidemenu-list {
    flex-direction: column;
  }
}

@media screen and (min-width: 500px) and (max-width: 760px) {
  .hero-paragraphe {
    margin: 0 auto;
    font-size: 1.5rem;
  }
  .drinks {
    display: none;
  }
  .cocktailsImg {
    width: 180px !important;
    border-radius: 20px;
  }

  nav {
    flex-direction: row;
  }
  .sidemenu-item {
    font-size: 1.8rem;
  }

  .sidemenu-list {
    flex-direction: row;
  }
  .SearchBar-button {
    font-size: 1.5rem;
  }
  .hero-paragraphe {
    width: 80%;
    margin: 0 auto;
    font-size: 1.8rem;
  }
}
</style>
