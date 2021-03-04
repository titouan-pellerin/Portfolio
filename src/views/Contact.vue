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
      <UnderlinedTitle
          class="header-subtitle"
          size="h3"
          content="N'hésitez pas à me contacter"
        />
        <p>Vous pouvez aussi me contacter directement par e-mail : <a href="mailto:contact@titouanpellerin.info">contact@titouanpellerin.info</a> ou encore par téléphone au <a href="tel://+33781841863">07 81 84 18 63</a>.</p>
      <form class="contact-form" method="post" action="">
        <div class="form-row">
          <div class="form-col">
            <label class="required" for="fullname">Nom et prénom</label>
            <input
              name="fullname"
              required
              id="fullname"
              type="text"
              v-model="fullname"
            />
          </div>
          <div class="form-col">
            <label class="required" for="email">Adresse e-mail</label>
            <input
              name="email"
              required
              id="email"
              type="email"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-col">
            <label class="required" for="message">Message</label>
            <textarea
              name="message"
              rows="8"
              required
              id="message"
              v-model="message"
            ></textarea>
          </div>
          
        </div>
        
        <input type="submit" class="btn" value="Envoyer" />
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
  },
  data: function () {
    return {
      fullname: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      let form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new URLSearchParams();
        for (const pair of new FormData(form)) {
          data.append(pair[0], pair[1]);
        }
        let fetchData = {
          method: "POST",
          body: data,
          headers: new Headers(),
        };
        console.log(data);
        fetch("http://mail.titouanpellerin.info/", fetchData);
      });
    },
  },
  mounted() {
    this.submitForm();
  },
};
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
  font-size: var(--font-size-80);
  color: var(--accent-color);
  text-align: center;
  margin: 0;
}

.header-subtitle {
  font-size: var(--font-size-40);
}

.form-section p{
  font-size: var(--font-size-15);
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  padding: 0 10px;
}

.form-row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;

}

.form-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 10px;
}

.contact-form label {
  font-family: "EB Garamond", "serif";
  font-size: var(--font-size-20);
  font-weight: 600;
  opacity: .7;
  margin-bottom: 5px;
}

.contact-form input:not([type=submit]),
.contact-form textarea {
  font-size: var(--font-size-20);
  border-radius: 5px;
  background-color: #EDEDEF;
  border: none;
  padding: 10px;
  text-align: center;
  font-family: 'Poppins', 'sans-serif';
}


.contact-form textarea {
  resize: vertical;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

label.required::after{
  content: '*';
  color: red;
}

input[type=submit]{
  cursor: pointer;
}

@media (max-width: 576px) {
  .form-row{
    flex-direction: column;
  }


  .form-col{
    margin: 0;
  }
}

</style>