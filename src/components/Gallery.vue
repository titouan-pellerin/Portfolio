<template>
  <img v-for="image in images" :key="image.url" :src="image.url">
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    images : Array
  }
}
</script>

<style>

</style>
