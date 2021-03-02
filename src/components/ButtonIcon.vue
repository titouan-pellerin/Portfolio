<template>
  <router-link :to="url" class="btn btn-icon" :class="position">
    {{ content }}
    <i class="fas" :class="icon"></i>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    position: String,
    url: String,
    icon: String,
    content: String
  }
}
</script>

<style>

  .btn-icon{
    display: flex;
    align-items: center;
  }

  .btn-icon i{
    margin-left: 10px;
    font-size: 0.8em;
  }
</style>
