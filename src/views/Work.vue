<template>
  <div class="work">
    <header class="style-dark">
      <div class="header-bg-wrapper" :style="headerBg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <UnderlinedTitle
          class="header-title"
          size="h1"
          :content="title"
        />
        <p class="header-caption">{{caption}}</p>
        <div class="work-info">
          <p class="work-date">{{getDate}}</p>
          <p class="work-categories">{{categories.join(', ')}}</p>
        </div>
      </div>
      <a class="scroll-down" id="works" href="#works"
          ><i class="fas fa-arrow-down"></i
        ></a>
    </header>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";

export default {
  name: "Home",
  props: {
    title: String,
    slug: String,
    categories: Array,
    image: String,
    caption: String,
    date: String
  },
  components: {
    UnderlinedTitle
  },
  data: function(){
    return {
      Date : new Date(this.date)
    }
  },
  computed: {
    headerBg() {
      return `background-image: url("/works/${this.slug}.jpg")`
    },
    getDate() {
      return this.Date.toLocaleString("default", { month: "long" }) + ' ' + this.Date.getFullYear()
    }
  },
    
}
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

.header-caption, .work-info {
  font-size: var(--font-size-20);
}

.work-info{
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
}

.work-date{
  text-transform: capitalize;
  margin-right: 20px;
}
</style>