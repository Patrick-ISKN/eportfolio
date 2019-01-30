<template>
  <div class="video">
    <video id="backgroundVideo" loop autoplay>
      <source :src="source" type="video/webm" />
      Désolé votre navigateur ne supporte pas la balise vidéo, retournez vous entraîner sur la piste !
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: "https://www.videvo.net/videvo_files/converted/2015_10/preview/Running_02_Videvo.mov74103.webm"
      // PEUT ETRE UTILISER https://streamable.com/ POUR SOURCE VIDEO
    };
  }
}
</script>

<style scoped>
.video {
  position: relative;
}
#backgroundVideo {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 480px) {
  #backgroundVideo {
    display:none;
  }
}

</style>
