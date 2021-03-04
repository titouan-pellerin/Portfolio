<template>
  <div class="work">
    <header class="style-dark">
      <div class="header-bg-wrapper" :style="headerBg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <UnderlinedTitle
          class="header-title"
          size="h1"
          :content="workArray.title"
        />
        <p class="header-caption">{{ workArray.caption }}</p>
        <div class="work-info">
          <p class="work-date">{{ getDate }}</p>
          <p class="work-categories">{{ workArray.categories.join(", ") }}</p>
        </div>
      </div>
      <a class="scroll-down" id="works" href="#works"
        ><i class="fas fa-arrow-down"></i
      ></a>
    </header>
    <Gallery
      v-if="workArray.gallery"
      :images="workArray.gallery.images"
    ></Gallery>
  </div>
</template>

<script>
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Home",
  props: {
    work: {},
  },
  components: {
    UnderlinedTitle,
    Gallery,
  },
  data: function () {
    let workArray = JSON.parse(this.work);
    return {
      workArray: workArray,
      Date: new Date(workArray.date),
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
};
</script>

<style scoped>
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
  padding: 0 20%;
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

.work-info {
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
}

.work-date {
  text-transform: capitalize;
  margin-right: 20px;
}
</style>