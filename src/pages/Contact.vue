<template>
  <div>
    <contact></contact>
    <div class="maps">
      <h1 class="headForm">Je suis ici !</h1>
      <iframe title="mapsContact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7586.278313227288!2d5.78989708514134!3d45.138120712989945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a601976efe77b%3A0x9ee9cdf9688e7888!2s204+Chemin+du+Villard%2C+38320+Herbeys!5e0!3m2!1sfr!2sfr!4v1542038635936" width="800" height="600" frameBorder="0"></iframe>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    contact: ContactForm,
  },
}
</script>

<style scoped>
.maps {
  background-color:#f3f3f3;
}

iframe {
  width:100%;
  padding-top: 3%;
}

.headForm {
  text-align: center;
  padding-top: 6%;
  font-size: 4em !important;
  font-weight: bold !important;
}

@media screen and (max-width:480px) {
  .maps {
    display:none;
  }

  .headForm {
    font-size: 2.8em !important;
    padding: 3% 6%;
  }

}
</style>
