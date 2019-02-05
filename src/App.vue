<template>
  <div>
    <transition-group name="fade" mode="out-in">
      <app-menu key="header"></app-menu>
      <router-view key="router"></router-view>
      <app-footer key="footer"></app-footer>
    </transition-group>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    appMenu: Menu,
    appFooter: Footer,
  },
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: url('./assets/test.png'), auto;
}

a:hover, button:hover, label:hover, input:hover, textarea:hover, form button:hover {
  cursor: url('./assets/test.png'), auto;
}

h1, h2 {
  font-family: 'Montserrat', sans-serif;
}

h4 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

::selection {
  background: #ffb170;
}

@media screen and (max-width: 480px) {
  body, html {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    /* overflow: auto;
    -webkit-overflow-scrolling: touch; */
  }
}

</style>
