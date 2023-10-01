<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="../assets/logo.png" alt="Logo" class="footer-logo" />
    </div>
    <p class="copyright">PinkBubble&copy; 2023 By Najia</p>
    <div class="footer-right">
      <a href="#"
        ><img class="socialMedia" src="../assets/instagram.png" alt="Instagram"
      /></a>
      <a href="#"
        ><img class="socialMedia" src="../assets/twitter.png" alt="Twitter"
      /></a>
      <a href="#"
        ><img class="socialMedia" src="../assets/facebook.png" alt="Facebook"
      /></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  align-content: center;
  background-color: black;
}

.footer-logo {
  width: 170px;
  height: 170px;
}

.footer-right {
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  margin-right: 40px;
}

.footer-right a {
  text-decoration: none;
  color: white;
}
.copyright {
  font-size: 1.2rem;
  color: deeppink;
  background-color: black;
}

.socialMedia {
  width: 30px;
  height: 30px;
  border-radius: inherit;
}

/* *-*-*-*--*--*-MEDIA QUERIES *-*-*-*-*-*-*-**- */
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto;
  }
}
</style>
