<template>
  <UnderlinedTitle class="gallery-title" size="h2" :content="params.title" />
  <div class="grid-container margin-top-1x">
    <div class="gallery-grid">
      <a
        v-for="n in params.size"
        :key="n"
        class="gallery-item box-shadow"
        @click="
          toggleModal();
          currentSlide(n);
        "
      >
        <div class="item-overlay style-dark">
          <h3></h3>
          <i class="fas fa-plus"></i>
        </div>
        <ImageItem :source="`/works/${$route.params.slug}/${params.gallerySlug}-${n}.jpg`" />
      </a>
    </div>
  </div>

  <div :id="params.gallerySlug" class="gallery-modal">
    <a class="close-modal" @click="toggleModal()">×</a>
    <div class="modal-content">
      <div class="slide" v-for="n in params.size" :key="n">
        <ImageItem
          class="slide-img"
          :source="`/works/${$route.params.slug}/${params.gallerySlug}-${n}.jpg`"
        />
      </div>
    </div>
    <a class="prev" @click="plusSlides(-100)">&#10094;</a>
    <a class="next" @click="plusSlides(100)">&#10095;</a>
  </div>
</template>

<script scoped>
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";
import ImageItem from "@/components/ImageItem.vue";

export default {
  name: "Gallery",
  props: {
    params: Object,
    gallerySlug: String,
    title: String,
    size: Number
  },
  components: {
    UnderlinedTitle,
    ImageItem
  },
  methods: {
    toggleModal() {
      document
        .querySelector(`#${this.params.gallerySlug}.gallery-modal`)
        .classList.toggle("open");
    },
    currentSlide(index) {
      let modalContent = document.querySelector(
        `#${this.params.gallerySlug} .modal-content`
      );
      modalContent.style.transform = `translateX(-${index - 1}00%)`;
      modalContent.dataset.transform = `${index - 1}00`;
    },
    plusSlides(direction) {
      let modalContent = document.querySelector(
        `#${this.params.gallerySlug} .modal-content`
      );
      let currentTransform = parseInt(modalContent.dataset.transform);
      let newTransform = parseInt(currentTransform) + parseInt(direction);
      let size = document.querySelectorAll(`#${this.params.gallerySlug} .slide`).length;
      if (
        (currentTransform >= 0 &&
          currentTransform < (size - 1) * 100 &&
          direction == 100) ||
        (currentTransform > 0 &&
          currentTransform <= (size - 1) * 100 &&
          direction == -100)
      ) {
        modalContent.style.transform = `translateX(-${newTransform}%)`;
        modalContent.dataset.transform = `${newTransform}`;
      }
    },
    keyNav(e) {
      if (
        document
          .querySelector(`#${this.params.gallerySlug}.gallery-modal`)
          .classList.contains("open") &&
        !e.repeat
      ) {
        e.preventDefault();
        switch (e.key) {
          case "ArrowLeft" || "ArrowDown":
            this.plusSlides(-100);
            break;
          case "ArrowRight" || "ArrowUp":
            this.plusSlides(100);
            break;
          case "Escape":
            this.toggleModal();
        }
      }
    },
  },
  mounted() {
    console.log(this.$route.params.slug);
    document.addEventListener("keydown", this.keyNav);
  },
};
</script>

<style>
.gallery-title {
  font-size: var(--font-size-40);
}

.grid-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
}

.gallery-grid {
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  justify-content: center;
}

.gallery-item {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 300px;
  min-width: 150px;
  margin: 8px;
  cursor: pointer;

}

.gallery-item img {
  min-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform ease-in-out 0.3s;
}

.item-overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  top: 0;
  bottom: 0;
  font-size: var(--font-size-20);
  background-color: rgba(19, 19, 19, 0.5);
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
  z-index: 1;
}

.item-overlay h3 {
  margin: 0;
  font-size: var(--font-size-30);
}

.item-overlay i {
  color: #fff;
}

.gallery-item:hover .item-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(19, 19, 19, 0.9);
  z-index: 101;
  display: flex;
  align-items: center;
  display: none;
}

.gallery-modal.open {
  display: flex;
}

.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform ease-in-out 0.3s;
  padding: 100px 0;
  box-sizing: border-box;
}

.close-modal,
.prev,
.next {
  position: absolute;
  font-size: var(--font-size-30);
  color: #fff;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  z-index: 1;
}

.close-modal {
  right: 20px;
  top: 20px;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.prev:hover {
  left: 15px;
}

.next:hover {
  right: 15px;
}

.slide {
  height: 100%;
  flex: 0 0 100%;
}

.slide-img {
  height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
