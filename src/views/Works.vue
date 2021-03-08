<template>
  <div class="works">
    <header class="style-dark">
      <div class="header-bg-wrapper kenburns-bg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <h1 class="header-title">Créations</h1>
        <UnderlinedTitle
          class="header-subtitle"
          size="h3"
          content="Retrouvez mes différentes créations"
        />
      </div>
    </header>
    <section class="works-section margin-bottom-1x">
      <ul class="work-filter style-dark">
        <li class="cat-filter selected" @click="filterWorks" data-cat="all">
          <a href="#">Tout</a>
        </li>
        <li
          v-for="category in categories"
          :key="category"
          @click="filterWorks"
          class="cat-filter"
          :data-cat="category"
        >
          <a href="#">{{ category }}</a>
        </li>
      </ul>
      <div class="works-container padding-top-1x">
        <WorkCard
          v-for="work in works"
          :key="work.title"
          :work="work"
          :data-cat="work.categories"
          class="zoom-in"
        ></WorkCard>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
import WorkCard from "@/components/WorkCard.vue";

export default {
  name: "Home",
  components: {
    UnderlinedTitle,
    WorkCard,
  },
  title: "Créations - Titouan Pellerin",
  data: function () {
    return {
      works: "",
      categories: "",
    };
  },
  methods: {
    getCategories() {
      let categories = new Array();
      this.works.forEach((work) => {
        work.categories.forEach((category) => {
          if (!categories.includes(category)) categories.push(category);
        });
      });
      this.categories = categories;
    },
    filterWorks(e) {
      e.preventDefault();
      let works = document.getElementsByClassName("work-card");
      let currentFilter = e.currentTarget;
      let currentCat = currentFilter.dataset.cat;
      document
        .querySelector(".selected.cat-filter")
        .classList.remove("selected");
      currentFilter.classList.add("selected");
      works.forEach((work) => {
        work.classList.remove("work-hide");
        if (
          !work.dataset.cat.split(",").includes(currentCat) &&
          currentCat != "all"
        ) {
          work.classList.add("work-hide");
        }
      });
    },
  },
  beforeMount() {
    this.works = JSON.parse(localStorage.works);
    this.getCategories();
  },
};
</script>

<style scoped>
.works header {
  position: relative;
  height: 80vh;
  overflow: hidden;
}

.header-layer {
  background: rgba(19, 19, 19, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-bg-wrapper {
  background: center / cover no-repeat url("../assets/images/works-header.jpg");
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
  color: var(--accent-color);
  text-align: center;
  margin: 0;
}

.header-subtitle {
  font-size: var(--font-size-40);
}
.works-section {
  position: relative;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
}
.works-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
}

.work-filter {
  list-style: none;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  top: -60px;
  width: 100%;
  font-size: var(--font-size-15);
  padding-inline-start: 0;
  flex-wrap: wrap;
}

.cat-filter {
  margin: 10px;
}
.cat-filter a {
  transition: color ease-in-out 0.3s;
}
.cat-filter:hover a {
  color: var(--accent-color);
}

.selected.cat-filter a {
  color: var(--accent-color);
  transition: color ease-in-out 0.3s;
}

.work-hide {
  display: none;
}


@media (max-width: 576px) {

  .work-filter{
    position: initial;
  }

  .work-filter a{
    color: #000;
  }

}

</style>