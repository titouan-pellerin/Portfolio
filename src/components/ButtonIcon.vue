<template>
  <a :href="url" class="btn btn-icon" :class="position">
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
    content: String
  }
}
</script>

<style>

  .btn-icon i{
    margin-left: 5px;
  }
</style>
