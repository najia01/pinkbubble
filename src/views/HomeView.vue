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
                       
        <form action="" method="POST">
          <input type="text" name="search" class="SearchBar-input" placeholder="Votre recherche ici....."/>
          <button type="submit" class="SearchBar-button">Search</button>
        </form>

      </div>
    </div>

    <!-- Pictures  -->
    <div class="middle-pictures">
      <img class="middle-drinks" src="../assets/citronnade.jpg" alt="blue-lagoon"/>
      <img class="middle-drinks" src="../assets/fumee.jpg " alt="blue-lagoon"/>
      
    </div>

    <!-- POPULAIRES -->
    <h1>Cocktails les plus populaires</h1>
    
  </div>
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
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
  color: #a32308;
}

.citation {
  font-size: 1.3rem;
  font-family: "OpenSans-Bold", sans-serif;
  font-style: italic;
  text-align: center;
  color: #a32308;
  padding: 30px;
  line-height: 2;
}

.citation .name {
  font-size: 1.5rem;
  font-family: "OpenSans-Bold", sans-serif;
  text-transform: capitalize;
  color: #a32308;
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

/* pictures middle */
.middle-pictures {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 100px;
}

.middle-drinks {
  width: 400px;
  /* height: 350px; */
  border-radius: 20px;
}

/* popular */

</style>
