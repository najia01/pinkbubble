<template>
  <div class="header">
    <a href="#"
      ><img class="logo" src="../assets/logo.png" alt="logo pinkbubble"
    /></a>
    <img class="hero" src="../assets/hero3.jpeg" alt="image cocktail" />
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
        <img id="menu" src="../assets/hamburger.png" alt="menu burger" />
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
import { searchByLetter } from "@/services/ApiCocktailDb.js";

export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {
      searchResults: [],
      navOpen: false,
    };
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  width: 100%;
  height: auto;
  background-color: deeppink;
}
.hero-paragraphe {
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  color: deeppink;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* -webkit-text-stroke: 1px black; */
}

.header a {
  position: relative;
  background-color: #181317;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo {
  width: 220px;
  margin: 0 auto;
}
nav a.router-link-exact-active {
  color: deeppink;
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

.sidemenu-wrapper {
  padding-top: 50px;
}

.sidemenu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidemenu-item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
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
p {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
  color: white;
}

/* *-*-*-*-MEDIAQUERIES*-*-*-*-*- */
@media screen and (max-width: 760px) {
  .header {
    display: flex;
    flex-direction: column;
  }

  .hero {
    width: 100%;
    height: auto;
  }

  .hero-paragraphe {
    text-align: center;
    font-size: 1rem;
  }

  .logo {
    width: 70%;
    margin: 0 auto;
  }
  #sidemenu {
    top: 0;
  }
  .sidemenu-item {
    font-size: 0.8rem;
  }
  .sidemenu-btn {
    display: block;
  }

  nav {
    flex-direction: column;
  }

  .sidemenu-wrapper {
    padding: 0;
  }

  .sidemenu-list {
    flex-direction: column;
  }
}

@media screen and (min-width: 761px) and (max-width: 1024px) {
  .header {
    display: flex;
    justify-content: space-between;
  }

  .hero {
    width: 100%;
    height: auto;
  }

  .hero-paragraphe {
    width: 70%;
  }

  .logo {
    width: 30%;
  }

  nav {
    flex-direction: row;
  }

  .sidemenu-list {
    flex-direction: row;
  }
}
</style>
