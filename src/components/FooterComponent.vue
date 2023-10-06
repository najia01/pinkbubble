<template>
  <img
    class="hero"
    src="../assets/img/hero6.png
  "
    alt="image cocktail"
  />
  <footer class="footer row-limit-size">
    <div class="footer-left">
      <img src="../assets/img/logo.png" alt="Logo" class="footer-logo" />
    </div>
    <p class="copyright">PinkBubble&copy; 2023 By Najia</p>
    <div class="footer-right">
      <ul class="social-icons">
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fab fa-instagram icon"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=fr" target="_blank">
            <i class="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fab fa-facebook-f icon"></i>
          </a>
        </li>
      </ul>
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
.row-limit-size {
  width: 1300px;
}
.hero {
  height: 400px;
}
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
  font-size: 1.3rem;
  background: linear-gradient(90deg, crimson, #fff, crimson);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 8s infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }

  100% {
    background-position: 500%;
  }
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons li a {
  width: 40px;
  height: 40px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 1rem;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

.social-icons li a .icon {
  position: relative;
  transition: 0.5s;
  z-index: 3;
  color: #fff;
}
.social-icons li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transition: 0.5s;
  z-index: 2;
}

.social-icons li a:hover:before {
  top: 0;
}

.social-icons li:nth-child(1) a .icon {
  color: #d92b6f;
}

.social-icons li:nth-child(2) a .icon {
  color: #55acee;
}

.social-icons li:nth-child(3) a .icon {
  color: #0077b5;
}

.social-icons li a:hover .icon {
  transform: rotateY(360deg);
}

/* *-*-*-*--*--*-MEDIA QUERIES *-*-*-*-*-*-*-**- */
@media screen and (max-width: 768px) {
  .hero {
    display: none;
  }
  .footer {
    margin-top: 100px;
  }
  .footer-left {
    margin-top: 100px;
  }
  .footer-logo {
    margin: 0 auto;
  }
  .copyright {
    font-size: 1.5rem;
  }
}
</style>
