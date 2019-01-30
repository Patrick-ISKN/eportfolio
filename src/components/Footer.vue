<template>
<div class="footer">
  <h4>Fait avec <font-awesome-icon icon="heart" class="love-icon"/>, en mangeant des <font-awesome-icon icon="cookie-bite" class="cookie-icon"/>, tout en <font-awesome-icon icon="running" class="run-icon"/>, et en écoutant de la <font-awesome-icon icon="music" class="music-icon"/></h4>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  background-color: black;
  padding: 1% 0;
  text-align: center;
  color: #bfbfbf;
}

.love-icon {
  color:red;
}

.cookie-icon {
  color: #a55b1a;
}

.run-icon {
  color: #01a301;
}

.music-icon{
  color: #5648f2;
}

@media screen and (max-width: 480px) {
  .footer h4 {
    margin: 5%;
  }
}

</style>
