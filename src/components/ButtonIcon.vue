<template>
  <router-link v-if="!target" :to="url" class="btn btn-icon" :class="position">
    {{ content }}
    <i class="fas" :class="icon"></i>
  </router-link>
  <a v-if="target" :to="url" class="btn btn-icon" :class="position" target="_blank">
    {{ content }}
    <i class="fas" :class="icon"></i>
  </a>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    position: String,
    url: String,
    icon: String,
    content: String,
    target: Boolean
    
  }
}
</script>

<style>

  

  .btn-icon i{
    margin-left: 10px;
    font-size: 0.8em;
  }
</style>
