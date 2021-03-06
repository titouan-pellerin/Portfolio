<template>
  <img v-lazyload class="image__item" :data-url="source" />
</template>

<script>
import LazyLoadDirective from "../directives/LazyLoadDirective";

export default {
  
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  directives: {
    lazyload: LazyLoadDirective
  }
};
</script>