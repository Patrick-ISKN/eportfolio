<template>
  <div>
    <div class="intro">
      <h1 class="headForm" id="first">Mes créations web</h1>
    </div>
    <div class="mainContent">
      <h2 class="content">Au cours de mes aventures web, il m'est arrivé de faire plusieurs projets multimédia, tels que de la production audiovisuelle, graphique, ou encore de la rédaction web. Découvrez ici mes créations.</h2>
      <h3 class="content" style="padding-top: 3%"><font-awesome-icon class="handPointer" icon="hand-pointer" /> Cliquez sur un projet pour connaître ses caractéristiques.</h3>
      <div class="projects">
        <project></project>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsModals from '../components/ProjectsModals.vue';
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    project: ProjectsModals,
  },
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

.headForm, .content {
  font-family: inherit;
}

.intro {
  padding: 3% 0%;
}

.mainContent {
  text-align: center;
  margin: 0 5%;
}

.handPointer {
  display:none;
}

@media screen and (max-width: 480px) {

  .headForm {
    font-size: 2.8em !important;
  }

  .content {
    font-size: 1.75em;
  }

  .handPointer {
    display: inline;
  }

}
</style>
