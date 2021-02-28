<template>
  <a class="social-link" :href="link" target="_blank"
    ><i class="fab" :class="icon"></i
  ></a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: String,
    link: String,
  },
};
</script>

<style>
.social-link {
  color: #fff;
}

.social-link:not(:last-child) {
  margin-right: 20px;
}

.social-link i {
  transition: color ease-in-out 0.2s;
}
.social-link:hover i {
  color: var(--accent-color);
}
</style>
