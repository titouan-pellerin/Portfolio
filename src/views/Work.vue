<template>
  <div class="work">
    <header class="style-dark">
      <div class="header-bg-wrapper" :style="headerBg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <UnderlinedTitle size="h1" :content="workArray.title" />
        <p class="header-caption">{{ workArray.caption }}</p>
        <div class="work-info">
          <p class="work-date">{{ getDate }}</p>
          <p class="categories">{{ workArray.categories.join(", ") }}</p>
        </div>
      </div>
      <a class="scroll-down" id="works" href="#works"
        ><i class="fas fa-arrow-down"></i
      ></a>
    </header>
    <main class="margin-bottom-1x">
      <section
        v-for="content in workArray.content"
        :key="content.type"
        class="margin-top-1x"
        :class="content.type"
      >
        <component
          v-if="!content.custom"
          :is="content.type"
          :params="content"
          >{{ content.text }}</component
        >

        <ButtonIcon
          v-if="content.custom == 'ButtonIcon'"
          :content="content.content"
          :icon="content.icon"
          :url="content.url"
          :external="content.external"
        >
        </ButtonIcon>
      </section>
    </main>
  </div>
</template>

<script>
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
import Gallery from "@/components/Gallery.vue";
import Embed from "@/components/Embed.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";

export default {
  name: "Work",
  props: {
    work: String,
  },
  components: {
    UnderlinedTitle,
    Gallery,
    Embed,
    ButtonIcon,
  },
  title: `Titouan Pellerin`,
  data: function () {
    return {
      workArray: Array,
      Date: Date,
    };
  },
  computed: {
    headerBg() {
      return `background-image: url("/works/${this.workArray.slug}.jpg")`;
    },
    getDate() {
      return (
        this.Date.toLocaleString("default", { month: "long" }) +
        " " +
        this.Date.getFullYear()
      );
    },
  },
  watch: {
    $route: "fetchWork",
  },
  methods: {
    fetchWork() {
      if (!this.work) {
        JSON.parse(localStorage.works).forEach((work) => {
          if (work.slug == this.$route.params.slug) {
            this.workArray = work;
          }
        });
      } else this.workArray = JSON.parse(this.work);
    },
  },
  created() {
    this.fetchWork();
    this.Date = new Date(this.workArray.date);
  },
};
</script>

<style scoped>
.work .header-content {
  padding: 0 5px;
}

.work header {
  position: relative;
  height: 100vh;
}

.header-layer {
  background: rgba(19, 19, 19, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-bg-wrapper {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  font-size: var(--font-size-40);
  text-align: center;
  margin: 0;
}

.header-caption,
.work-info {
  font-size: var(--font-size-20);
}

.header-caption{
  max-width: 1500px;
}

.work-info {
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  justify-content: center;
}

.work-date {
  text-transform: capitalize;
  margin-right: 20px;
}

.work-info p {
  margin: 10px;
}

header .title-wrapper {
  font-size: var(--font-size-40);
}

main .title-wrapper {
  font-size: var(--font-size-40);
}

.work main p {
  font-size: var(--font-size-15);
  max-width: 1500px;
  margin: auto;
  padding: 0 5px;
}

@media (max-width: 576px) {
  header .title-wrapper {
    font-size: var(--font-size-30);
  }
}
</style>