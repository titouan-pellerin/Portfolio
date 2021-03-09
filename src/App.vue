<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="socials-menu">
        <SocialIcon
          icon="fa-github"
          link="https://github.com/titouan-pellerin"
        ></SocialIcon>
        <SocialIcon
          icon="fa-facebook-f"
          link="https://www.facebook.com/titouan.pellerin"
        ></SocialIcon>
        <SocialIcon
          icon="fa-linkedin-in"
          link="https://www.linkedin.com/in/titouan-pellerin-24352b1a1/"
        ></SocialIcon>
      </div>
      <router-link @click.prevent="menuLink('/')" to="/">Accueil</router-link>
      <router-link @click.prevent="menuLink('/works')" to="/works">Créations</router-link>
      <router-link @click.prevent="menuLink('/')" class="menu-logo" to="/"
        ><img alt="Logo Titouan" src="./assets/logo.svg"
      /></router-link>
      <router-link @click.prevent="menuLink('/#about')" to="/#about" class="about-menu">À propos</router-link>
      <router-link @click.prevent="menuLink('/contact')" to="/contact">Contact</router-link>
      <a class="btn visufo-cta" href="https://visufo.fr" target="_blank"
        >Visufo</a
      >
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
    </div>
  </div>
  <router-view></router-view>
  <footer class="main-footer style-dark">
    <div class="socials-footer">
      <SocialIcon
        icon="fa-github"
        link="https://github.com/titouan-pellerin"
      ></SocialIcon>
      <SocialIcon
        icon="fa-facebook-f"
        link="https://www.facebook.com/titouan.pellerin"
      ></SocialIcon>
      <SocialIcon
        icon="fa-linkedin-in"
        link="https://www.linkedin.com/in/titouan-pellerin-24352b1a1/"
      ></SocialIcon>
    </div>
    <p>
      © {{ new Date().getFullYear() }} Titouan PELLERIN. | Tous droits réservés.
    </p>
    <p>
      Mentions légales | Politique de confidentialité | Préférences de
      confidentialité
    </p>
  </footer>
  <a href="#" class="scroll-top style-dark"><i class="fas fa-angle-up"></i></a>
</template>
<script>
import SocialIcon from "@/components/SocialIcon.vue";

export default {
  components: {
    SocialIcon,
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        document
          .getElementsByTagName("body")[0]
          .classList.add("window-scrolled");
      else
        document
          .getElementsByTagName("body")[0]
          .classList.remove("window-scrolled");
    },
    mobileNav() {
      let nav = document.querySelector(".nav");
      let menuBtn = document.querySelector(".menu-btn");
      menuBtn.addEventListener("change", (e) => {
        if (e.target.checked) nav.classList.add("expanded");
        else nav.classList.remove("expanded");
      });
    },
    menuLink(to) {
      this.$router.push(to);
      document.querySelector(".menu-btn").checked = false;
      document.querySelector(".nav").classList.remove("expanded");
    },
  },
  mounted() {
    var t="Design & Code by www.titouanpellerin.info";
    if(this.isEdge||this.isExplorer)
      console.log(t);
    else{
      var e=["height: 40px","margin: 20px 0",'font-family: "Helvetica Neue", Helvetica, Arial',"font-weight: 700"].join(";");
      console.log("%c ".concat(t),e);
    }
    window.addEventListener("scroll", this.scrollFunction);
    this.mobileNav();
  }
};
</script>

<style>
:root {
  --accent-color: #439efe;
  --accent-color-70: #439dfeb4;
  --darker-accent-color: #3884d4;
  --font-size-15: 1.5rem;
  --font-size-20: 2rem;
  --font-size-30: 3rem;
  --font-size-40: 4rem;
  --font-size-60: 6rem;
  --font-size-80: 8rem;
  --font-size-100: 10rem;
  --font-size-120: 12rem;
}

html {
  font-size: 62.5%;
  font-family: "Poppins", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "EB Garamond", "serif";
}

::selection {
  background: #439dfe6b;
  color: #fff;
}

.style-light {
  color: #000;
}

.style-dark {
  color: #fff;
}

a {
  text-decoration: none;
  color: var(--accent-color);
}

.style-dark a:not(.btn) {
  color: #fff;
}

.style-light a:not(.btn) {
  color: #000;
}
.link {
  position: relative;
}
.link::after {
  content: "";
  background: var(--accent-color-70);
  position: absolute;
  left: 20px;
  bottom: 0;
  width: calc(100% - 1em);
  height: calc(100% - 0.8em);
  z-index: -1;
  transition: 0.3s cubic-bezier(0.25, 0.1, 0, 2.05);
}

.bg-visufo::after {
  background: #ea7550;
}

.link:hover::after {
  left: 0;
  width: 100%;
  height: 100%;
}

.btn {
  background-color: var(--accent-color);
  padding: 12px 30px;
  border-radius: 10em;
  transition: background-color ease-in-out 0.2s;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  font-size: 1.6rem;
}

.btn:hover {
  background-color: var(--darker-accent-color);
}

.nav {
  padding: 10px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  background-color: transparent;
  transition: all ease-in-out 0.4s;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}

.window-scrolled .nav:not(.expanded) {
  background-color: #131313;
}

.nav-wrapper {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: ease-in-out 0.4s;
  width: 100%;
}

.nav a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.2s;
}

.nav a:not(.social-link) {
  margin: 0 20px;
}

.nav a.router-link-exact-active:not(.about-menu) {
  color: var(--accent-color);
}

.nav a:not(.btn):hover {
  color: var(--accent-color);
}

.menu-logo img {
  width: 100px;
  transition: width ease-in-out 0.4s;
}
.window-scrolled .nav .menu-logo img {
  width: 50px;
}
.socials-menu,
.visufo-cta {
  position: absolute;
}

.socials-menu {
  left: 0;
}

.visufo-cta {
  right: 0;
  background-color: #ea7550;
}

.visufo-cta:hover {
  background-color: #dd6843;
}

.nav .menu-icon {
  cursor: pointer;
  float: right;
  padding: 25px 20px;
  position: relative;
  user-select: none;
  display: none;
}

.nav .menu-icon .navicon {
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 20px;
}

.nav .menu-icon .navicon:before,
.nav .menu-icon .navicon:after {
  background: #fff;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.nav .menu-icon .navicon:before {
  top: 5px;
}

.nav .menu-icon .navicon:after {
  top: -5px;
}

.nav .menu-btn {
  display: none;
}

.nav .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.nav .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.nav .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

.category {
  padding: 5px 12px;
  margin: 3px;
  font-weight: 600;
  font-size: var(--font-size-15);
  text-transform: uppercase;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.473);
}

.margin-bottom-1x {
  margin-bottom: 36px;
}
.margin-bottom-2x {
  margin-bottom: 72px;
}

.margin-top-1x {
  margin-top: 36px;
}

.margin-top-2x {
  margin-top: 72px;
}

.padding-top-1x {
  padding-top: 36px;
}

.box-shadow {
  box-shadow: 0px 20px 50px -30px rgb(0 0 0 / 45%);
}

.main-footer {
  background-color: #131313;
  padding: 20px 0;
  font-size: 1.3rem;
}

.socials-footer {
  font-size: var(--font-size-20);
}

.scroll-top {
  opacity: 0;
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  transition: ease-in-out 0.3s;
}

.scroll-top:hover {
  background-color: var(--darker-accent-color);
}

.window-scrolled .scroll-top {
  opacity: 1;
}

.scroll-down {
  font-size: var(--font-size-30);
  position: absolute;
  bottom: 10px;
}

.scroll-down i {
  animation: bounce 2s infinite;
  color: var(--accent-color);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.kenburns-bg {
  animation: kenburns 15s ease alternate forwards;
}

@keyframes kenburns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

@keyframes zoom-in {
  0% {
    transform: scale(0.5);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.zoom-in {
  animation: zoom-in 0.6s;
  opacity: 1;
}

@media (max-width: 576px) {
  
  html{
    font-size: 50% !important;
  }
}

@media (max-width: 768px) {
   html[lang='']{
    font-size: 55% ;
  }
}

@media (max-width: 992px) {

   html{
    font-size: 60%;
  }

  .nav {
    height: 70px;
    padding: 10px;
    font-size: var(--font-size-20);
  
  }

  .nav .menu-logo img {
    width: 50px;
  }

  .nav .nav-wrapper {
    width: 100%;
    height: 50px;
  }

  .nav .nav-wrapper > a:not(.menu-logo):not(.visufo-cta) {
    margin: 5px 0;
  }

  .nav .socials-menu,
  .nav .nav-wrapper .visufo-cta {
    position: initial;
    margin: 40px 0;
  }

  .nav a:not(.menu-logo):not(.menu-icon) {
    visibility: hidden;
    opacity: 0;
  }

  .nav.expanded a:not(.menu-logo):not(.menu-icon) {
    visibility: visible;
    opacity: 1;
  }

  .nav .nav-wrapper {
    flex-direction: column;
  }

  .nav .nav-wrapper .menu-logo {
    position: absolute;
    left: 0;
    margin: 0;
    top: 0;
  }

  .nav .menu-icon {
    position: absolute;
    right: 0;
    margin: 0;
    top: 0;
  }

  .expanded {
    height: 100vh;
    width: 100%;
    background-color: #131313;
  }

  .expanded .nav-wrapper {
    visibility: visible;
    opacity: 1;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .nav .menu-icon {
    display: block;
    visibility: visible;
    opacity: 1;
  }
}

@media (max-width: 1200px) {
   
}

@media (min-width: 1201px) {
}
</style>
