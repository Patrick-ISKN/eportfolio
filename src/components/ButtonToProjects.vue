<template>
<div>
  <router-link class="buttonstyle" to="/projects" tag="button">Découvrir mes projets</router-link>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
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

.buttonstyle:visited, .buttonstyle:active, .buttonstyle:focus{
  text-decoration:none;
  color:white;
}

</style>
