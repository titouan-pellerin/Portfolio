<template>
  <div class="home">
    <header class="style-dark">
      <div class="header-bg-wrapper"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <UnderlinedTitle
          class="header-title"
          size="h1"
          content="Titouan Pellerin"
        />
        <p class="header-caption">
          Étudiant en deuxième année de DUT Métiers du Multimédia et de
          l'Internet et à la recherche d'une alternance pour l'année
          prochaine.<br />
          Membre de Visufo
        </p>
        <ButtonIcon
          content="Mon CV"
          icon="fa-external-link-alt"
          url=""
          class="header-button"
        ></ButtonIcon>
        <div class="socials">
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
      </div>
    </header>
    <div class="works">
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
      <WorkCard
        title="Amocas Dashboard"
        image="amocas-dashboard.jpg"
        :categories="categories"
      ></WorkCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UnderlinedTitle from '@/components/UnderlinedTitle.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import SocialIcon from '@/components/SocialIcon.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'Home',
  components: {
    UnderlinedTitle,
    ButtonIcon,
    SocialIcon,
    WorkCard
  },
  data: function() {
    return {
      categories: [
        {title: "Développement"},
        {title: "Test"}
      ]
    }
  }
}
</script>

<style scoped>
.home header {
  position: relative;
  height: 100vh;
}

.header-layer {
  background-color: #131313;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -1;
}

.header-bg-wrapper {
  background: center / cover no-repeat url("../assets/images/header.jpg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.header-title {
  font-size: var(--font-size-80);
  text-align: center;
}

.header-caption {
  font-size: var(--font-size-20);
  width: 50%;
}

.header-button {
  margin-bottom: 20px;
}

.works {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.work-card{
  margin: 10px;
  box-sizing: border-box;
}
</style>
