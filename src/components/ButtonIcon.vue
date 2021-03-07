<template>
  <div class="btn-wrapper">
    <router-link
      v-if="!external"
      :to="url"
      class="btn btn-icon"
      :class="position"
    >
      {{ content }}
      <i class="fas" :class="icon"></i>
    </router-link>
    <a
      v-if="external"
      :href="url"
      class="btn btn-icon"
      :class="position"
      target="_blank"
    >
      {{ content }}
      <i class="fas" :class="icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    position: String,
    url: String,
    icon: String,
    content: String,
    external: Boolean,
  },
};
</script>

<style>
.btn-icon i {
  margin-left: 10px;
  font-size: 0.8em;
}
</style>
