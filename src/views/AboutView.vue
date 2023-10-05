<template>
  <HeaderComponent />
  <div class="about row-limit-size">
    <h1 class="titleIntro">Pink Bubble</h1>
    <span class="spIntro"
      >Votre destination gourmande pour des moments rafraîchissants et festifs
      sans alcool !</span
    >
    <p class="presentation">
      Notre site est aussi dédié à l'art de créer des cocktails sans alcool
      délicieux et sophistiqués, parfaits pour toutes les occasions. Que vous
      soyez à la recherche d'une boisson pétillante pour une soirée entre amis,
      d'un rafraîchissement estival pour vous détendre au bord de la piscine, ou
      d'une alternative élégante pour célébrer un événement spécial, Pink Bubble
      a la recette qu'il vous faut. Nos experts mixologues ont soigneusement
      élaboré une collection de cocktails sans alcool alliant saveurs exquises,
      créativité et présentation élégante. Chacune de nos recettes est
      accompagnée de instructions détaillées, d'astuces de préparation et
      d'informations sur les ingrédients, vous permettant de devenir un barman
      virtuose dans le confort de votre foyer. Que vous soyez un amateur de
      cocktails sans alcool chevronné ou que vous découvriez cet univers pour la
      première fois, Pink Bubble est là pour vous inspirer et vous guider dans
      la création de boissons irrésistibles qui plairont à tous les palais.
      Rejoignez-nous dans cette aventure gustative et découvrez l'art de la
      mixologie avec ou sans alcool avec Pink Bubble.<br />
      Santé et à votre santé !
    </p>

    <div class="pictureAbout">
      <img
        class="imgAbout"
        src="../assets/img/mousse.png"
        alt="cocktail a la fraise "
      />
      <img
        class="imgAbout"
        src="../assets/img/gonzalo.png"
        alt="cocktail aux fruits "
      />

      <img
        class="imgAbout"
        src="../assets/img/orangee.png"
        alt="cocktail citron "
      />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "AboutView",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style>
.row-limit-size {
  width: 1300px;
  margin: 0 auto;
}

.titleIntro {
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: deeppink;
}
.presentation {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  padding: 50px;
  line-height: 1.5;
  color: #da395b;
}
.spIntro {
  font-size: 1.5rem;
  font-style: italic;
  color: pink;
}

/* media queries  */
@media screen and (max-width: 1400px) {
  .titleIntro {
    font-size: 2.5rem;
  }
  .presentation {
    font-size: 1.6rem;
  }
  .spIntro {
    font-size: 1.8rem;
  }

  .pictureAbout {
    display: none;
  }
}
</style>
