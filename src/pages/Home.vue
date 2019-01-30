<template>
  <div>
    <div class="first">
      <sticky></sticky>
      <home-video></home-video>
      <div class="firstContent">
        <b-container fluid>
          <b-row>
            <b-col md="8" class="pushRight">
              <h1>Patrick Cottaz</h1>
              <h2>Développeur front-end junior</h2>
              <br/>
              <h4>Jeune athlète Javascript ambitieux.</h4>
              <h4>Découvrez mes projets, et les technos que je développe.</h4>
              <about style="paddingTop:5%"></about>
            </b-col>
            <b-col class="firstIcon" md="4">
              <h2><img style="width:50%" :src="svgGraphics.about" alt="" /></h2>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div class="second">
      <particles class="particles"></particles>
      <b-container fluid>
        <b-row>
          <b-col class="textSecond pushRight" md="8">
            <h1>Perfectionnement.</h1>
            <br/>
            <h4>Le mot d'ordre de mes travaux. Toujours chercher à se dépasser.</h4>
            <h4>Découvrir de nouvelles interfaces, de nouvelles techniques,</h4>
            <h4>pour développer des rendus encore plus tendances et ergonomiques.</h4>
            <projects style="paddingTop:5%"></projects>
          </b-col>
          <b-col class="secondIcon" md="4">
            <h2>
              <img style="width:90%" :src="svgGraphics.projects" alt="" />
            </h2>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="third">
      <b-container fluid>
        <b-row>
          <b-col class="textSecond pushRight thirdIcon" md="4">
            <img style="width:120%" :src="svgGraphics.technos" alt="" />
          </b-col>
          <b-col md="8" class="pushLeft">
            <h1>Toujours en quête d'apprentissage.</h1>
            <br/>
            <h4>Apprivoiser de nouveaux frameworks, des nouveaux langages,</h4>
            <h4>développer mon éventail de connaissances dans le développement front,</h4>
            <h4>voilà toute ma motivation pour atteindre mes objectifs.</h4>
            <technos style="paddingTop:5%"></technos>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ButtonStickyToContact from '../components/ButtonStickyToContact.vue';
import ButtonToAbout from '../components/ButtonToAbout.vue';
import ButtonToProjects from '../components/ButtonToProjects.vue';
import ButtonToTechnos from '../components/ButtonToTechnos.vue';
import HomeVideo from '../components/HomeVideo.vue';
import Particles from '../components/Particles.vue';

import STARTINGBLOCK from '../assets/startingblock.svg';
import PERFECTIONNEMENT from '../assets/perfectionnement.svg';
import APPRENTISSAGE from '../assets/apprentissage.svg';

export default {
  data() {
    return {
      svgGraphics: {
        about : STARTINGBLOCK,
        projects : PERFECTIONNEMENT,
        technos : APPRENTISSAGE,
      }
    };
  },
  components: {
    sticky: ButtonStickyToContact,
    about: ButtonToAbout,
    projects: ButtonToProjects,
    technos: ButtonToTechnos,
    homeVideo: HomeVideo,
    particles: Particles,
  },
}
</script>

<style scoped>

.homeIcons {
  width: 50%;
}

.pushLeft {
  padding-right: 7%;
}

.pushRight {
  padding-left: 7%;
}

.first {
  position:relative;
  width: 100%;
}

.firstContent {
  width: 100%;
  height: 100%;
  position: absolute;
  padding-bottom:15%;
  padding-top:15%;
  top: 0;
  left: 0;
}

.first h2, .first h1, .third h1, .third h3{
  font-weight:800;
  color:white;
}

.first h4, .third h4{
  color: white;
  font-weight: 300;
}

.second{
  padding-top:20%;
  padding-bottom:20%;
  width:100%;
  position:relative;
}

.second h1{
  font-family: 'Montserrat', sans-serif;
  font-weight:800;
  color:black;
}

.second h4{
  color: black;
  font-weight: 300;
}

.textSecond{
  text-align:left;
}

.third {
  padding-top:20%;
  padding-bottom:20%;
  background-image: linear-gradient(76deg,#523800, black);
  text-align: right;
}

.third h4 {
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
}

@media screen and (max-width: 768px) {
  .firstContent {
    padding-top: 6%;
  }
}

@media screen and (max-width: 480px) {
  .particles {
    display:none;
  }

  .first {
    background-image: linear-gradient(76deg, #523800, black);
  }

  #backgroundVideo {
    display:none;
  }

  .first, .second, .third {
    text-align: center;
  }

  .firstContent {
    width: inherit;
    height: inherit;
    position: inherit;
  }

  .firstIcon {
    padding: 3% 0%;
    text-align: center;
  }

  .secondIcon {
    padding: 5% 0%;
    margin: 0 auto;
    text-align: center;
    width: 70%;
  }

  .thirdIcon {
    width: 80%;
    text-align: center;
    padding-bottom: 5%;
  }

  .textSecond {
    text-align: center;
  }

  h1 {
    font-size: 1.8em;
  }

}
</style>
