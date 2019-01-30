<template>
<div>
  <router-link class="stickyContact buttonstyled" to="/contact" tag="button"><font-awesome-icon icon="hand-peace"/> Contactez-moi !</router-link>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.stickyContact {
  position: fixed;
  bottom: 20px;
  right: 40px;
  z-index:3;
}

.buttonstyled {
  background-color: #111;
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
  border: 2px solid #C05717;
}

.buttonstyled:hover {
  background-color:#C05717;
  text-decoration:none;
  cursor: url('../assets/test.png'), auto;
}

.buttonstyled:visited, .buttonstyled:active, .buttonstyled:focus{
  text-decoration:none;
  color:white;
}

@media screen and (max-width: 480px) {

  .stickyContact {
    display:none;
  }

}
</style>
