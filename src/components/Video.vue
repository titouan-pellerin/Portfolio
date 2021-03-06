<template>
  <UnderlinedTitle class="video-title" size="h2" :content="title" />
  <div class="video-container margin-top-1x">
    <iframe
      
      height="100%"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="box-shadow"
    ></iframe>
  </div>
</template>

<script>
import UnderlinedTitle from '@/components/UnderlinedTitle.vue';

export default {
  name: "Video",
  props: {
    url: String,
    title: String,
  },
  components: {
    UnderlinedTitle
  }
};
</script>

<style>
.video-title {
  font-size: var(--font-size-40);
}

.video-container{
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  height: 600px;

}

.video-container iframe{
  width: 100%;
  border-radius: 10px;
}



</style>
