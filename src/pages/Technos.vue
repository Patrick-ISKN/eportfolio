<template>
  <div>
    <div class="allSkills">
      <h1 class="headForm" id="first">Les technos que je développe</h1>
      <div>
        <carousel-technos style="text-align:center"></carousel-technos>
      </div>
    </div>
    <div class="chartsSkills">
      <h1 class="headForm">Mes compétences techniques</h1>
      <div class="chartTechnos">
        <chart-technos class="chart"></chart-technos>
      </div>
    </div>
    <div class="technosTopics">
      <h1 class="headForm" id="topicTitle">Quelles technos m'intéressent ?</h1>
      <div class="twoDivs">
        <b-container fluid>
          <b-row>
            <b-col md="4">
              <ul class="topicList">
                <li class="language" @click="onClickChangeContent" v-for="image in images"><img :src="image.source" alt=""/></li>
              </ul>
            </b-col>
            <b-col md="8" class="topicBox">
              <h3>{{content}}</h3>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTechnos from '../components/ChartTechnos.vue';
import CarouselTechnos from '../components/CarouselTechnos.vue';
import JS from '../assets/js-logo.jpg';
import REACT from '../assets/react-logo.png';
import VUEJS from '../assets/vue-logo.png';

export default {
  data() {
    return {
      contentArray : [
        'Comment ne pas aimer Javascript ? Passionné par les caractéristiques et les possibilités que nous offre Javascript, il est bien normal que ce dernier obtienne toute mon attention. Les projets front-end m\'intéressent grandemment, car l\'on découvre de nouvelles facettes de Javascript lors du développement de chacun d\'eux. Un langage en constante expansion, avec de plus en plus de soin apporté à l\'expérience utilisateur, quoi de mieux pour développer la plateforme de vos rêves ?',
        'J\'ai découvert VueJS il y a peu. Et grande fut ma surprise. Ce framework puissant, synonyme de rapidité est pour moi une opportunité de transformation radicale du web. Finies les latences client-serveur, tout se passe avec Javascript côté client. VueJS est ambitieux, et nombreux sont les développeurs front-end conquis par le charme et l\'époustouflante vitesse de Vue. D\'ailleurs, ce site aussi est fondé sur Vue...',
        'Tout comme Vue, ReactJS symbolise l\'avenir du web. Avec sa facilité d\'apprentissage et de mise en pratique, React devient clairement et sans contestation l\'un des frameworks JS les plus utilisés aujourd\'hui. Avec ses nombreuses librairies et possibilités de modification de code, React obtient également mon attention pour l\'élaboration de projets front-end.',
      ],
      content: 'Cliquez sur un logo de langage pour connaître mes ambitions',
      images : [
        {
          source: JS
        },
        {
          source: VUEJS
        },
        {
          source: REACT
        },
      ],
    };
  },
  components: {
    chartTechnos: ChartTechnos,
    carouselTechnos: CarouselTechnos,
  },
  methods: {
    onClickChangeContent(e) {
      let languages = document.getElementsByClassName('language');
      for (let i = 0; i < languages.length; i++) {
        switch(e.currentTarget) {
          case languages[i]:
          this.content = this.contentArray[i];
          break;
          default:
          this.content = this.content;
        }
      }
      window.scrollTo(0, document.getElementById('topicTitle').offsetTop);
    },
  }
}
</script>

<style scoped>
#first {
  padding: 7% 6% 3% !important;
}

.headForm {
  text-align: center;
  font-size: 4em !important;
  font-weight: bold !important;
  padding: 3% 0%;
}

.allSkills, .chartsSkills {
  padding: 3% 0%;
}

.twoDivs {
  margin: 3% 0%;
}

.topicList img {
  width: 25%;
  padding-top: 10%;
  padding-bottom: 10%;
  transition: 0.3s;
}

.topicList img:hover {
  transform: scale(1.25);
}

.topicBox h3 {
  text-align:justify;
  margin: 12% 10% 0% 10%;
}

.chartTechnos {
  width: 45%;
  margin: 0 auto !important;
  padding: 2% 0%;
}

.chartsSkills {
  background-color: #f3f3f3;
}

.topicList {
  list-style-type: none;
  text-align:center;
}

@media screen and (min-width: 480px) and (max-width: 1024px) {
  .topicBox h3 {
    margin-top: 0;
  }
}

@media screen and (max-width: 480px) {

  .headForm {
    font-size: 2.8em !important;
    padding: 3% 6%;
  }

  .topicBox h3 {
    text-align:center;
    margin: 2% 2%;
  }

  .topicList {
    padding: 0;
  }

}

</style>
