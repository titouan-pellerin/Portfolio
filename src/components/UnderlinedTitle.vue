<template>
  <div class="title-wrapper">
 <component :is="size || params.size" class="underlined-title">
    {{ content || params.content }}
  </component>
  </div>
</template>

<script>
export default {
  name: 'UnderlinedTitle',
  props: {
    size: String,
    content: String,
    params: Object,
  }
}
</script>

<style>
  .underlined-title{
    position: relative;
    display: inline;
    box-shadow: inset 0 -0.5em var(--accent-color-70);
    line-height: 1em;
}



</style>
