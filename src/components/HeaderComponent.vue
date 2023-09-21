<template>
  <div class="header">
    <a href="#"
      ><img class="logo" src="../assets/logo.png" alt="logo pinkbubble"
    /></a>
    <img class="hero" src="../assets/hero.jpg" alt="logo pinkbubble" />
    <p class="hero-paragraphe">
      Bienvenue dans l'univers pétillant de Pink Bubble, où la créativité
      s'exprime à travers des cocktails sans alcool aussi délicieux que colorés
      !
    </p>
    <div id="sidemenu">
      <button
        class="sidemenu-btn"
        v-on:click="navOpen = !navOpen"
        v-bind:class="{ active: navOpen }"
      >
        <img id="menu" src="../assets/hamburger.png" alt="menu burger" />
      </button>

      <nav v-show="navOpen">
        <div class="sidemenu-wrapper">
          <ul class="sidemenu-list">
            <li class="sidemenu-item"><a href="">Home</a></li>
            <li class="sidemenu-item">
              <a href="">Search by ingredients</a>
            </li>
            <li class="sidemenu-item"><a href="">Search by category</a></li>
            <li class="sidemenu-item"><a href="">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  width: 100%;
  height: 800px;
  background-image: url("../assets/hero.jpg");
}
.hero-paragraphe {
  position: absolute;
  bottom: -400px;

  left: 0;
  right: 0;
  padding: 20px;
  color: white;
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
  color: white;
  transition: 0.4s ease;
}

.sidemenu-item a:hover {
  background: lightgrey;
  color: dimgrey;
}
p {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
  color: white;
}

/* *-*-*-*-MEDIAQUERIES*-*-*-*-*- */
@media screen and (max-width: 768px) {
  .hero {
    height: auto;
  }

  .hero-paragraphe {
    display: none;
  }

  .header {
    flex-direction: column;
  }

  .logo {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 1500px) {
  .hero-paragraphe {
    position: absolute;
    bottom: -125px;
    padding: 20px;
    color: white;
  }
}
</style>
