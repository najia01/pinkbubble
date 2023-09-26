<template>
  <HeaderComponent />
  <div class="about">
    <h1 class="titleIntro">Bienvenue chez Pink Bubble</h1>
    <span class="spIntro"
      >Votre destination gourmande pour des moments rafraîchissants et festifs
      sans alcool !</span
    >
    <p class="presentation">
      Notre site est dédié à l'art de créer des cocktails sans alcool délicieux
      et sophistiqués, parfaits pour toutes les occasions. Que vous soyez à la
      recherche d'une boisson pétillante pour une soirée entre amis, d'un
      rafraîchissement estival pour vous détendre au bord de la piscine, ou
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
      mixologie sans alcool avec Pink Bubble. Santé et à votre santé !
    </p>
  </div>
  <div class="pictureAbout">
    <img src="../assets/fraises.png" alt="cocktail a la fraise " />
    <img src="../assets/gonzalo.png" alt="cocktail aux fruits " />
    <img src="../assets/isabella.png" alt="cocktail aux agrumes " />
    <img src="../assets/orangee.png" alt="cocktail citron " />
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
.titleIntro {
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: #fff;
}
.presentation {
  text-align: justify;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  padding: 50px;
  line-height: 1.5;
}
.spIntro {
  font-size: 1.5rem;
  font-style: italic;
  color: #a32308;
}
</style>
