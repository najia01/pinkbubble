<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="../assets/logo.png" alt="Logo" class="footer-logo" />
    </div>
    <div class="footer-right">
      <a href="#"><img src="../assets/instagram.png" alt="Instagram" /></a>
      <a href="#"><img src="../assets/twitter.png" alt="Twitter" /></a>
      <a href="#"><img src="../assets/facebook.png" alt="Facebook" /></a>
    </div>
  </footer>
  <p class="copyright">PinkBubble&copy; 2023 By Najia</p>
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
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}

.footer-logo {
  width: 170px;
  height: 170px;
  margin-right: 10px;
}

.footer-right {
  display: flex;
  gap: 10px;
}

.footer-right a {
  text-decoration: none;
  color: white;
}

.footer-right img {
  width: 30px;
  height: 30px;
}

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
