<template>
  <div>
    <div class="projects">
      <img
      class="thumbProject"
      :src="project.thumbnail"
      alt=""
      v-bind="project"
      @click="openNav"
      :key="project.id"
      v-for="project in projects"
      >
    </div>
    <div class="overlay" id="projectCarac" @click="closeNav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <h2>{{focusedProject.title}}</h2>
      <p class="projectImg" v-html="focusedProject.fullImage"></p>
      <h4>{{focusedProject.caption}}</h4>
    </div>
  </div>
</template>

<script>
import ISKNTHUMB from '../assets/isknwebs.png';
import ENCELADETHUMB from '../assets/enceladeweb.png';
import PHONETHUMB from '../assets/phonecallsthumb.png';
import NOIRTHUMB from '../assets/noirthumb.png';
import PHONEAFFICHETHUMB from '../assets/affichephone.jpg';
import RODRIGUE from '../assets/museerodrigue.png';
import PHONEAFFICHEBIG from '../assets/bigaffiche.jpg';

export default {
  methods: {
    openNav(e) {
      document.getElementById("projectCarac").style.width = "100%";
      let focusedProject = document.getElementsByClassName('thumbProject');
      for (let i = 0; i < focusedProject.length; i++) {
        switch(e.currentTarget) {
          case focusedProject[i]:
          this.focusedProject.title = this.projects[i].title;
          this.focusedProject.caption = this.projects[i].caption;
          this.focusedProject.fullImage = this.projects[i].fullImage;
          break;
        }
      }
    },
    closeNav() {
      document.getElementById("projectCarac").style.width = "0%";
    },
  },
  data() {
    return {
      focusedProject : {
        title: '',
        caption: '',
        fullImage: '',
        thumbnail: '',
      },
      projects: [
        {
          id: 1,
          title: 'Entretien du site web d\'iskn.co',
          thumbnail: ISKNTHUMB,
          fullImage: '<a href="https://iskn.co" target="_blank"><img class="focusSite" src="' + ISKNTHUMB + '" alt="" style="width:50%"/></a>',
          caption: 'Manipulation d\'interface Wordpress, maintenance de plugins et scripts JS, PHP, apprentissage du framework ReactJS',
          type: 'web'
        },
        {
          id: 2,
          title: 'Rédaction d\'articles de presse web sur les plateformes du groupe Encelade Media Group',
          thumbnail: ENCELADETHUMB,
          fullImage: '<a href="https://www.encelademediagroup.com/" target="_blank"><img class="focusSite" src="' + ENCELADETHUMB + '" alt="" style="width:50%"/></a>',
          caption: 'Manipulation d\'interface Wordpress, légères manipualtions d\'intégrations HTML5, CSS3, rédaction d\'écrits destinés au web',
          type: 'web',
        },
        {
          id: 3,
          title: 'Phonecalls, court-métrage étudiant',
          thumbnail: PHONETHUMB,
          fullImage: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YlCel6uBrp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          caption: 'Assigné au poste de scénariste, chef plateau, réalisateur et monteur vidéo. Utilisation de matériel audiovisuel, logiciels de montage vidéo et audio',

        },
        {
          id: 4,
          title: 'Affiche cinéma de Phonecalls',
          thumbnail: PHONEAFFICHETHUMB,
          fullImage: '<img src="' + PHONEAFFICHEBIG + '" alt="" style="width:28%"/>',
          caption: 'Conception de la charte graphique de l\'affiche, en collaboration avec les différents collègues du groupe',
          type: 'graphic',
        },
        {
          id: 5,
          title: 'Noir Liquide, court-métrage étudiant',
          thumbnail: NOIRTHUMB,
          fullImage: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lCB45tyQqME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          caption: 'Assigné au poste de chef plateau, réalisateur et monteur vidéo. Utilisation de matériel audiovisuel, logiciels de montage vidéo et audio',
          type: 'video',
        },
        {
          id: 6,
          title: 'Musée Rodrigue, court-métrage étudiant',
          thumbnail: RODRIGUE,
          fullImage: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rl-EoDlUCos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          caption: 'Assigné au poste de chef plateau, réalisateur et monteur vidéo. Utilisation de matériel audiovisuel, logiciels de montage vidéo et audio',
          type: 'video',
        },
      ],
    };
  },
}
</script>

<style scoped>

.closebtn {
  display: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
  color:white;
  padding: 5% 0%;
  cursor: url('../assets/times.png'), auto;
}

.overlay .projectImg {
  padding: 3% 0%;
}

.projects {
  display: inline-block;
  padding: 5% 0%;
}

.thumbProject {
  width: 33%;
  padding: 3% 3%;
  transition: 0.3s;
}

.thumbProject:hover {
  transform: scale(1.15);
}

@media screen and (max-width: 480px) {
  .thumbProject {
    display:block;
    width:100%;
  }

  .closebtn {
    display: block;
    color: white;
    font-size:3em;
  }

}

</style>
