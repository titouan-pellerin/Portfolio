<template>
  <div id="nav">
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
      <router-link to="/">Accueil</router-link>
      <router-link to="/works">Créations</router-link>
      <router-link class="menu-logo" to="/"
        ><img alt="Logo Titouan" src="./assets/logo.svg"
      /></router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/contact">Contact</router-link>
      <a class="btn visufo-cta" href="https://visufo.fr" target="_blank"
        >Visufo</a
      >
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
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },
};
</script>

<style>
:root {
  --accent-color: #439efe;
  --accent-color-70: #439dfeb4;
  --darker-accent-color: #3884d4;
  --font-size-20: 20px;
  --font-size-40: 40px;
  --font-size-80: 80px;
  --font-size-100: 100px;
}

html {
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
  width: calc(100% - 15px);
  height: calc(100% - 15px);
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
}

.btn:hover {
  background-color: var(--darker-accent-color);
}

#nav {
  padding: 10px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  background-color: transparent;
  transition: background-color ease-in-out 0.4s;
}

.window-scrolled #nav {
  background-color: #131313;
}

.nav-wrapper {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: ease-in-out 0.4s;
}

#nav a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.2s;
}

#nav a:not(.social-link) {
  margin: 0 20px;
}

#nav a.router-link-exact-active {
  color: #439efe;
}

#nav a:not(.btn):hover {
  color: #439efe;
}

.menu-logo img {
  width: 100px;
  transition: width ease-in-out 0.4s;
}
.window-scrolled .menu-logo img {
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

.category {
  padding: 5px 12px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.473);
}

.category:not(:last-child) {
  margin-right: 5px;
}

.margin-bottom-1x {
  margin-bottom: 36px;
}
.margin-bottom-2x {
  margin-bottom: 72px;
}

.margin-top-1x{
  margin-top: 36px;
}

.margin-top-2x{
  margin-top: 72px;
}

.padding-top-1x{
  padding-top: 36px;
}

.box-shadow {
  box-shadow: 0px 30px 60px -30px rgb(0 0 0 / 45%);
}

.main-footer {
  background-color: #131313;
  padding: 20px 0;
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
  transition: opacity ease-in-out 0.3s;
}

.window-scrolled .scroll-top {
  opacity: 1;
}

.scroll-down {
  font-size: 30px;
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

</style>
