<template>
  <div class="not-found">
    <header class="style-dark">
      <div class="header-bg-wrapper kenburns-bg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <h1 class="header-title">404</h1>
        <UnderlinedTitle
          class="header-subtitle"
          size="h3"
          content="Page non trouvée"
        />
        <ButtonIcon
        content="Page d'accueil"
        icon="fa-arrow-right"
        url="/"
      ></ButtonIcon>
      </div>
    </header>
  </div>
</template>

<script>
import UnderlinedTitle from '@/components/UnderlinedTitle.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'

export default {
  name: "PathNotFound",
  components: {
    UnderlinedTitle,
    ButtonIcon
  }
};
</script>

<style scoped>

.not-found header {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.header-layer {
  background: rgba(19, 19, 19, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-bg-wrapper {
  background: center / cover no-repeat
    url("../assets/images/contact-header.jpg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.header-title {
  font-size: var(--font-size-120);
  color: var(--accent-color);
  text-align: center;
  margin: 0;
}

.header-subtitle {
  font-size: var(--font-size-60);
}

.not-found .btn{
  margin-top: 20px;
}

</style>