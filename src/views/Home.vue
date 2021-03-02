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
          2021/2022.<br />
          Membre de
          <a class="link bg-visufo" href="https://visufo.fr/" target="_blank"
            >Visufo</a
          >
        </p>
        <ButtonIcon
          content="Mon CV"
          icon="fa-external-link-alt"
          url=""
          class="header-button"
        ></ButtonIcon>
        <div class="header-socials">
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
        <a class="scroll-down" id="scroll" href="#scroll"
          ><i class="fas fa-arrow-down"></i
        ></a>
      </div>
    </header>
    <section class="margin-bottom-2x">
      <div class="works-container">
        <div class="works">
          <WorkCard
            v-for="work in works.slice(0,6)"
            :key="work.title"
            :title="work.title"
            :categories="work.categories"
            :slug="work.slug"
            :date="work.date"
            :caption="work.caption"
            :data-id="work.id"
          ></WorkCard>
        </div>
      </div>
      <ButtonIcon
        content="Toutes mes créations"
        icon="fa-arrow-right"
        url="/works"
        class="works-btn"
      ></ButtonIcon>
    </section>
    <section class="about-section style-light margin-bottom-1x">
      <UnderlinedTitle class="header-title" size="h1" content="Qui suis-je ?" />
      <p>
        Passionné par l'informatique et l'audiovisuel, j'aime tout ce qui à
        trait au multimédia. Je suis actuellement en deuxième année de DUT
        Métiers du Multimédia et de l'Internet à Laval et apprenti infographiste
        aux Écoles militaires de Saint-Cyr Coëtquidan.
      </p>
      <div class="skills-wrapper">
        <div class="left-skills">
          <IconBox
            icon="fas fa-camera"
            title="Photographie"
            content="Passionné par l'image, j'utilise la photo pour capturer l'instant lors de concerts ou de voyages."
            alignment="right"
          ></IconBox>
          <IconBox
            icon="fas fa-video"
            title="Vidéo"
            content="Vidéaste depuis deux ans pour Visufo où je m'occupe du Motion Design et des prises de vue en parallèle."
            alignment="right"
          ></IconBox>
        </div>
        <img
          class="skills-portrait box-shadow"
          src="../assets/images/titouan.jpg"
          alt="Portrait de Titouan Pellerin"
        />
        <div class="right-skills">
          <IconBox
            icon="fas fa-code"
            title="Développement"
            content="Je développe des sites internet en utilisant les différents langages/frameworks (HTML,CSS, Javascript, PHP, NodeJS, VueJS...)."
            alignment="left"
          ></IconBox>
          <IconBox
            icon="fab fa-wordpress"
            title="WordPress"
            content="Je créé des sites et développe des plugins/thèmes sur WordPress."
            alignment="left"
          ></IconBox>
        </div>
      </div>
      <ButtonIcon
        content="Mon CV"
        icon="fa-external-link-alt"
        url=""
        class="skills-button"
      ></ButtonIcon>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";
import SocialIcon from "@/components/SocialIcon.vue";
import WorkCard from "@/components/WorkCard.vue";
import IconBox from "@/components/IconBox.vue";

export default {
  name: "Home",
  components: {
    UnderlinedTitle,
    ButtonIcon,
    SocialIcon,
    WorkCard,
    IconBox,
  },
  data: function () {
    return {
      categories: [{ title: "Développement" }, { title: "Test" }],
      works: ''
    };
  },
  methods: {
    fetchWork() {
      fetch("/works/works.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort(function (a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
          });
          this.works = data;
          localStorage.works = JSON.stringify(data);
        });
    },
  },
  created() {
    this.fetchWork();
  },
};
</script>

<style scoped>
.home header {
  position: relative;
  height: 80vh;
}

.header-layer {
  background: linear-gradient(rgba(19, 19, 19, 0.7), #141618);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  max-width: 1000px;
}

.header-socials {
  font-size: var(--font-size-20);
}

.header-button {
  margin-bottom: 20px;
}


.works-container {
  background: linear-gradient(#141618 80%, transparent 20%);
}

.works {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  align-items: flex-end;
  margin: auto;
  max-width: 2000px;
}

.work-card {
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  flex: 1 0 25%;
}

.work-card:nth-of-type(2) {
  flex-basis: 40%;
  height: 500px;
  flex-grow: 2;
}

.work-card:nth-of-type(5) {
  height: 500px;
}

.work-card:nth-of-type(4),
.work-card:nth-of-type(6) {
  align-self: flex-start;
}

.works-btn,
.skills-button {
  display: inline-block;
  text-align: center;
}

.about-section {
  text-align: center;
}

.about-section p {
  max-width: 1000px;
  display: inline-block;
  font-size: var(--font-size-20);
}

.skills-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills-portrait {
  margin: 50px;
  border-radius: 10px;
  max-width: 350px;
}
</style>
