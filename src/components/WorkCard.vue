<template>
  <a :href="'works/' + slug" class="work-card">
    <img
      :src="require('@/assets/images/' + image)"
      :alt="'Photo d\'illustration ' + title"
    />
    <div class="work-overlay">
      <h2>{{ title }}</h2>
      <p class="work-categories">
        <span v-for="category in categories" :key="category.title" class="category">{{ category.title }}</span>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    title: String,
    slug: String,
    categories: Array,
    image: String,
  }
  
};
</script>

<style>
.work-card {
  width: 33%;
  height: 350px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: #fff;
}

.work-overlay {
  position: absolute;
  height: 100%;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
}

.work-card img {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  left: -50%;
  right: -50%;
  transform: scale(1);
  transition: transform ease-in-out 0.3s;
}

.work-overlay {
  background-color: rgba(19, 19, 19, 0.7);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity ease-in-out 0.3s;
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
