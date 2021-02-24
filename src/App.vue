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
  <router-view />
</template>
<script>
import SocialIcon from "@/components/SocialIcon.vue";

export default {
  components: {
    SocialIcon,
  },
};
</script>

<style>
:root {
  --accent-color: #439efe;
  --darker-accent-color: #3884d4;
}

html {
  font-family: "Poppins", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

.btn {
  background-color: var(--accent-color);
  padding: 10px 30px;
  border-radius: 50px;
  transition: background-color ease-in-out 0.2s;
}

.btn:hover {
  background-color: var(--darker-accent-color);
}

#nav {
  background-color: #000;
  padding: 10px 30px;
}

.nav-wrapper {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#nav a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-weight: 400;
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
}
</style>
