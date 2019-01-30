<template>
  <div>

    <div class="desktop menu" id="desktopMenu">
      <router-link class="logo" to="/" tag="li" exact><a><img :src="logo.image" alt="" /></a></router-link>
      <router-link v-for="link in links" :to="link.routeName" :key="link.id" tag="li" active-class="activestyle">{{link.name}}</router-link>
    </div>

    <div class="mobile">
      <ul class="menu overlay" id="myNav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <div class="content" @click="closeNav">
          <router-link class="logo" to="/" tag="li" exact><a><img :src="logo.image" alt="" /></a></router-link>
          <router-link v-for="link in links" :to="link.routeName" :key="link.id" tag="li">{{link.name}}</router-link>
        </div>
      </ul>
      <div class="burger"><span @click="openNav">&#9776;</span></div>
    </div>

  </div>
</template>

<script>
import LOGO from '../assets/logo.svg';
export default {
  data() {
    return {
      links: [
        {
          name: 'Contact',
          routeName: '/contact'
        },
        {
          name: 'Technos',
          routeName: '/technos'
        },
        {
          name: 'Projets',
          routeName: '/projects'
        },
        {
          name: 'A Propos',
          routeName: '/about'
        },
      ],
      isClicked: false,
      logo: {
        image: LOGO,
      }
    }
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
      this.isClicked = true;
    },
  }
}
</script>

<style scoped>
.mobile {
  display:none;
}

.menu {
  width:100%;
  padding: 0;
  margin: 0;
}

.menu::after {
  content: '';
  clear: both;
  display: block;
}

.menu {
  list-style-type: none;
  overflow: hidden;
  background-color: #111;
  margin-top:0;
  margin-bottom:0;
}

.menu li {
  float:right;
  font-size:1.5em;
  display: block;
  color: white;
  text-align: center;
  padding: 20px 40px;
  text-decoration: none;
  transition: color 0.4s;
  font-family: 'Montserrat', sans-serif;
  font-weight:bold;
}

.menu li:hover {
  color: #F49342;
  text-decoration:none;
}

.menu li:focus{
  color:white;
  text-decoration:none;
}

.menu li:active{
  color:white;
  text-decoration:none;
}

.menu .logo{
  float:left;
}

.logo img{
  width:30%;
}

.menu .activestyle{
  border-bottom: 5px solid #F49342;
  background-color: #333333;
}

.burger, .closebtn {
  display:none;
}

#desktopMenu {
  position: fixed;
  z-index: 5;
}

@media screen and (max-width:480px) {
  .content {
    width:75%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1023px){

  .mobile {
    display:block;
  }

  .desktop {
    display:none;
  }

  .burger {
    display:block;
    font-size:4em;
    color:black;
    padding-right: 2%;
    text-align: right;
  }

  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .menu .logo{
    float:none;
  }

  .overlay .content {
    position: relative;
    top: 25%;
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-top: 30px;
    padding: 10% 0;
  }

  .overlay .content li {
    float: none;
    display: block;
    padding: 4% 0;
    font-size: 36px;
  }

  .closebtn {
    display: block;
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    color: #818181;
  }

}
</style>
