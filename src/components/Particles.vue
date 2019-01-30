<template>
  <div class="wrapper">
    <vue-particles
      color="#F49342"
      :particleOpacity="0.9"
      :particlesNumber="90"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#F49342"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
    >
  </vue-particles>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 5%;

}

</style>
