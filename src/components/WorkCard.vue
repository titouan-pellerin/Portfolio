<template>
  <transition name="fade">
    <router-link :to="{name: 'Work', params: { title: title, slug: slug, categories:categories, image:image, caption:caption, date:date}}" class="work-card">
      <img
        :src="'/works/' + slug + '.jpg'"
        :alt="'Photo d\'illustration ' + title"
      />
      <div class="work-overlay">
        <h2>{{ title }}</h2>
        <p class="work-categories">
          <span v-for="category in categories" :key="category" class="category">{{
            category
          }}</span>
        </p>
      </div>
    </router-link>
  </transition>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    title: String,
    slug: String,
    categories: Array,
    image: String,
    caption: String,
    date: String
  }
};
</script>

<style>
.work-card {
  height: 350px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  flex: 1 0 25%;
  min-width: 350px;
}

.work-card img {
  position: absolute;
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  top: 0;
  bottom: 0;
  margin: auto;
  left: -50%;
  right: -50%;
  transform: scale(1);
  transition: transform ease-in-out 0.3s;
}

.work-overlay {
  background-color: rgba(19, 19, 19, 0.5);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity ease-in-out 0.3s;
  padding: 10px;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.work-card:hover .work-overlay {
  opacity: 0;
}

.work-card:hover img {
  transform: scale(1.1);
}

.work-card h2 {
  font-size: 40px;
  margin: 0;
}
</style>
