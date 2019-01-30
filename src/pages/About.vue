<template>
  <div id="topAbout">
    <div class="desktop">
      <div class="intro" v-if="!isClicked">
        <div class="warmUp">
          <h1 class="headForm" id="first">En guise d'échauffement, vous pouvez télécharger mon CV</h1>
          <button class="buttonstyle"><font-awesome-icon icon="coffee" /> Obtenir mon CV</button>
        </div>
        <div class="startingBlock">
          <h1 class="headForm">Fin prêt ? Cliquez sur le bouton pour lancer la course...</h1>
          <button class="buttonstyle" @click="getDash"><font-awesome-icon icon="running" /> A vos marques, prêts ?</button>
        </div>
      </div>
      <div class="mainContent intro" v-else>
        <h1 class="headForm" id="revealed">Scrollez ! <font-awesome-icon class="scrollIt" icon="arrow-down" /></h1>
        <div class="empty-space" id="emptySpace"></div>
        <svg-test></svg-test>
      </div>
    </div>
    <div class="mobile">
      <h1 class="headForm">Scrollez pour connaître mon parcours ! <font-awesome-icon icon="arrow-down" /></h1>
      <svg-mobile class="svgMobile"></svg-mobile>
      <div id="mobileCv">
        <button class="buttonstyle"><font-awesome-icon icon="coffee" /> Obtenir mon CV</button>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTest from '../components/SvgTest.vue';
import SvgMobile from '../components/SvgMobile.vue';
import JQuery from 'jquery';
let $ = JQuery;

export default {
  data() {
    return {
      isClicked: false,
    }
  },
  components: {
    svgTest: SvgTest,
    svgMobile: SvgMobile
  },
  methods: {
    getDash() {
      this.isClicked = true;
      this.backtoTop();

      $(document).ready(function() {

        $(".path").css("stroke-dashoffset", "1298");
        $(".path").css("stroke-dasharray", "1302.38671875");

        var dashOffset = $(".path").css("stroke-dashoffset");
        $(window).scroll(function () {

          var percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*100);
          var newUnit = parseInt(dashOffset, 10);

          var parsedPercentage = parseInt(percentageComplete, 10);

          var offsetUnit = percentageComplete * (newUnit / 100);

          $(".path").css("stroke-dashoffset", newUnit - offsetUnit);

        });
      });
    },
    backtoTop() {
      window.scrollTo(0, document.getElementById('topAbout').offsetTop);
    }
  }
}
</script>

<style scoped>
#revealed {
    padding-top:10% !important;
}

#first {
  padding: 5% 6% 3% !important;
}

.warmUp {
  background-color:#f3f3f3;
  padding: 5% 0%;
}

.startingBlock {
  padding: 5% 0%;
}

.scrollIt {
  animation: toBottom 0.5s infinite;
  position :relative;
}

@keyframes toBottom {
  0% {
    top: 0px;
  }

  50% {
    top: 20px;
  }

  100% {
    top: 0px;
  }
}

.empty-space {
  width: 100%;
  height: 3000px;
  position: relative;
}

.headForm {
  text-align: center;
  font-size: 4em;
  font-weight: bold;
  padding: 3% 6%;
}

.mainContent {
  text-align: center;
  margin: 0 5%;
}

.intro {
  text-align: center;
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

.mobile {
  display:none;
}

.buttonstyle:hover {
  background-color:#C05717;
  text-decoration:none;
  cursor: url('../assets/test.png'), auto;
}

@media screen and (max-width: 480px) {
  .svgMobile {
    padding:0 5%;
  }
}

@media screen and (max-width: 768px) {
  .svgMobile {
    width: 100%;
    margin: 5% 0;
  }

  #mobileCv {
    text-align: center;
    margin: 3% 0;
  }
}

@media screen and (max-width: 1023px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .headForm {
    font-size: 2.8em;
  }

}
</style>
