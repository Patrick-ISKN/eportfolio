<template>
  <div id="top">
    <div class="formDiv" v-if="!isFormSubmitted">
      <h1 class="headForm" id="first">Envie de discuter ?</h1>
      <form>
        <b-alert variant="danger" show class="errorDiv" v-if="errors.length">
          <h3><b>Il y a {{errors.length}} erreur(s) dans votre formulaire :</b></h3>
          <ul>
            <li v-for="error in errors"><h5><font-awesome-icon class="arrowIcon" icon="arrow-right" /> {{ error }}</h5></li>
          </ul>
        </b-alert>

        <label>
          Votre nom <b>*</b>
          <input type="text" name="firstName" placeholder="Hicham El Guerrouj" v-model="user.username"/>
        </label>
        <label>
          Votre adresse email <b>*</b>
          <input type="email" name="email" placeholder="fasterthanlight@run.co" v-model="user.email"/>
        </label>
        <label>
          Votre message <b>*</b>
          <textarea class="textarea" placeholder="Hey Patrick, wanna run a website today ?" v-model="user.message"/>

        </label>
        <button type="submit" @click.prevent="checkForm"><font-awesome-icon icon="paper-plane" /> Envoyer</button>
      </form>
    </div>
    <div v-else>
      <h1 class="headForm" style="padding-bottom: 6%"><font-awesome-icon icon="thumbs-up" /> Merci pour votre message !</h1>
    </div>
    <div class="maps">
      <h1 class="headForm">Je suis ici !</h1>
      <iframe title="mapsContact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7586.278313227288!2d5.78989708514134!3d45.138120712989945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a601976efe77b%3A0x9ee9cdf9688e7888!2s204+Chemin+du+Villard%2C+38320+Herbeys!5e0!3m2!1sfr!2sfr!4v1542038635936" width="800" height="600" frameBorder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormSubmitted: false,
      user: {
        username: null,
        email: null,
        message: null,
      },
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if(!this.user.username) {
        this.backtoTop();
        this.errors.push('Entrez un nom');
      }
      if(!this.user.email) {
        this.backtoTop();
        this.errors.push("Entrez une adresse mail");
      } else if(!this.validEmail(this.user.email)) {
        this.backtoTop();
        this.errors.push("Votre adresse mail doit être valide");
      }
      if (!this.user.message) {
        this.backtoTop();
        this.errors.push('Votre message ne doit pas être vide');
      }
      if(!this.errors.length) {
        this.$http.post('https://mywebsitedtb.firebaseio.com/data.json', this.user)
        .then(response => {
          this.isFormSubmitted = true;
        }, error => {
          console.log(error);
        });
        return true;
      };
      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    backtoTop() {
      setTimeout(window.scrollTo(0, document.getElementById('top').offsetTop), 100);
    }
  },
}
</script>

<style scoped>

#first {
  padding: 10% 6% 3% !important;
}

.textarea {
  width: 50%;
}

.errorDiv {
  margin: 5% 15%;
  padding: 2%;
  text-align: center;
}

.errorDiv ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.errorDiv li {
  padding: 1% 0%;
}

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

form {
  text-align: center;
  padding: 1% 0;
}

label {
  display:block !important;
  padding: 1% 0%;
  margin-bottom: 0 !important;
  font-size:2em;
}

label input, label textarea {
  display:block !important;
  margin: 1% auto;
  font-size: 0.7em;
  padding: 1% 2%;
}

label textarea {
  margin: 1.3% auto;
}

button:hover {
  background-color:#C05717;
  text-decoration:none;
}

button {
  background-color: #F49342;
  text-transform: uppercase;
  border: none;
  color: white !important;
  padding: 15px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.7em !important;
  margin: 4px 2px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s;
  border-radius: 30px;
  font-weight:600;
}


@media screen and (max-width:480px) {

  .maps {
    display:none;
  }

  .arrowIcon {
    display: none;
  }

  .textarea {
    width: 80%;
  }

  input {
    width:70%;
    margin: 5% auto !important;
  }

  .headForm {
    font-size: 2.8em !important;
    padding: 3% 6%;
  }

  .errorDiv {
    padding: 5%;
  }
}

</style>
