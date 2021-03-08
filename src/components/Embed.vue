<template>
  <UnderlinedTitle class="embed-title" size="h2" :content="params.title" />
  <div class="embed-container margin-top-1x">
    <iframe
      
      height="100%"
      :src="params.url"
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
  name: "Embed",
  props: {
    params: Object,
  },
  components: {
    UnderlinedTitle
  }
};
</script>

<style>
.embed-title {
  font-size: var(--font-size-40);
}

.embed-container{
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  height: 600px;
  padding: 0 5px;
}

.embed-container iframe{
  width: 100%;
  border-radius: 10px;
}
@media (max-width: 576px) {

  .embed-container{
    height: 300px;
  }

}

</style>
