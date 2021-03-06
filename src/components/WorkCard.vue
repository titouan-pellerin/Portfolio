<template>
  <transition>
    <router-link
      :to="{
        name: 'Work',
        params: {
          work: JSON.stringify(work),
          slug: work.slug
        }
      }"
      class="work-card"
    >
      <ImageItem
        :source="'/works/' + work.slug + '.jpg'"
        :alt="'Photo d\'illustration ' + work.title"
      />
      <div class="work-overlay">
        <h2>{{ work.title }}</h2>
        <p class="work-categories">
          <span
            v-for="category in work.categories"
            :key="category"
            class="category"
            >{{ category }}</span
          >
        </p>
      </div>
    </router-link>
  </transition>
</template>

<script>
import ImageItem from '@/components/ImageItem';

export default {
  name: "WorkCard",
  props: {
    work: Object
  },
  components: {
    ImageItem
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
  font-size: var(--font-size-40);
  margin: 0;
}

@media (max-width: 576px) {
  .work-card {
    min-width: 100%;
  }
}
</style>
