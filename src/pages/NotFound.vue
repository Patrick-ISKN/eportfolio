<template>
  <div>
    <div class="intro">
      <h1 class="headForm">Oops, page non trouvée</h1>
      <img class="icon" :src="icons.error" alt="" />
      <router-link class="buttonstyle" to="/" tag="button" exact>Retourner sur la page d'accueil</router-link>
    </div>
  </div>
</template>

<script>
import ERROR404 from '../assets/error404.svg';
export default {
  data() {
    return {
      icons: {
        error: ERROR404
      }
    }
  },
}
</script>

<style scoped>
.icon {
  display: block;
  width: 20%;
  margin: 0 auto;
  padding-bottom: 3%;
}

.headForm {
  text-align: center;
  font-size: 4em;
  font-weight: bold !important;
  padding: 5% 6% 3% !important;
}

.buttonstyle {
  background-color: #F49342;
  text-transform: uppercase;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s;
  border-radius: 30px;
  font-weight:600;
}

.buttonstyle:hover {
  background-color:#C05717;
  text-decoration:none;
  cursor: url('../assets/test.png'), auto;
}

.intro {
  padding: 3% 0%;
  text-align: center;
}

@media screen and (max-width:480px) {
  .headForm {
    font-size:2.8em;
  }

  .icon {
    width:inherit;
    padding: 8% 0%;
  }

  .buttonstyle {
    width: 80%;
  }
}
</style>
