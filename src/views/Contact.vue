<template>
  <div class="contact">
    <header class="style-dark">
      <div class="header-bg-wrapper kenburns-bg"></div>
      <div class="header-layer"></div>
      <div class="header-content">
        <h1 class="header-title">Contact</h1>
        <UnderlinedTitle
          class="header-subtitle"
          size="h3"
          content="Un projet à me proposer ? Une question ?"
        />
        <a class="scroll-down" id="scroll" href="#scroll"
          ><i class="fas fa-arrow-down"></i
        ></a>
      </div>
    </header>
    <section class="form-section margin-bottom-1x margin-top-1x">
      <form class="contact-form" method="get">
        <div class="form-row">
          <div class="form-col">
            <label for="fullname">Nom et prénom</label>
            <input required id="fullname" type="text" v-model="fullname">
          </div>
          <div class="form-col">
            <label for="email">Adresse e-mail</label>
            <input required id="email" type="email" v-model="email">
          </div>
        </div>
        <label for="message">Message</label>
        <textarea rows="8" required id="message"></textarea>
      </form>
    </section>
  </div>
</template>

<script>
import UnderlinedTitle from "@/components/UnderlinedTitle.vue";

export default {
  name: "Contact",
    components: {
      UnderlinedTitle,
      
  }
}
</script>

<style scoped>
.contact header {
  position: relative;
  height: 80vh;
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
  background: center / cover no-repeat url("../assets/images/contact-header.jpg");
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
  font-size: var(--font-size-40);
}

.contact-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
}

.form-row{
  display: flex;
  justify-content: center;
  width: 100%;
}

.form-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.contact-form label{
  font-family: "EB Garamond", "serif";
  font-size: var(--font-size-20);
  font-weight: 600;
}

.contact-form input, 
.contact-form textarea{
  font-size: var(--font-size-20);
  border-radius: 5px;
}

.contact-form input:first-child{
  margin-right: 10px;
}

.contact-form input:last-child{
  margin-left: 10px;
}

.contact-form textarea{
  resize: vertical;
  width: 100%;
}
</style>