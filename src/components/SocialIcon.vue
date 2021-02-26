<template>
  <a class="social-link" :href="link" target="_blank"><i class="fab" :class="icon"></i></a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    icon: String,
    link: String
  }
}
</script>

<style>
  .social-link{
    color: #fff;
    transition: color ease-in-out .2s;
  }

  .social-link:not(:last-child){
    margin-right: 20px;
  }

  .social-link:hover{
    color: var(--accent-color);
  }

  




</style>
