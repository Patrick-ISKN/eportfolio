<template>
  <div>
    <carousel
    :perPage="5"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="2500"
    :autoplayHoverPause="false"
    :navigationEnabled="false"
    loop
    class="carousel">
    <slide v-for="image in images" class="slick-slide">
      <img :src="image.source" alt="" />
      <h2 class="sliderLegend">{{image.caption}}</h2>
    </slide>
    </carousel>
  </div>
</template>

<script>
import HTML5 from '../assets/html-logo.png';
import CSS3 from '../assets/css-logo.png';
import JS from '../assets/js-logo.jpg';
import REACT from '../assets/react-logo.png';
import VUEJS from '../assets/vue-logo.png';
import JSONPNG from '../assets/json-logo.png';
import WORDPRESS from '../assets/wordpress-logo.png';
import PHP from '../assets/php-logo.png';
import MYSQL from '../assets/sql-logo.jpg';

import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          source: HTML5,
          caption: "HTML 5"
        },
        {
          id: 2,
          source: CSS3,
          caption: "CSS 3"
        },
        {
          id: 3,
          source: JS,
          caption: "JS Natif, ES6"
        },
        {
          id: 4,
          source: REACT,
          caption: "ReactJS"
        },
        {
          id: 5,
          source: VUEJS,
          caption: "VueJS"
        },
        {
          id: 6,
          source: JSONPNG,
          caption: "JSON"
        },
        {
          id: 7,
          source: WORDPRESS,
          caption: "Wordpress"
        },
        {
          id: 8,
          source: PHP,
          caption: "PHP"
        },
        {
          id: 9,
          source: MYSQL,
          caption: "MySQL, PHPMyAdmin"
        },
      ],
    };
  }
}
</script>

<style scoped>
.carousel {
  padding-top: 5%;
}

.sliderLegend {
  text-align: center;
  padding-top: 15%;
  opacity: 0;
  transition: 0.8s;
}

.slick-slide img {
  width: 50% !important;
  margin: 0 auto !important;
  user-select: none !important; /* Standard syntax */

}

.slick-slide img:hover~.sliderLegend{
  display:block;
  opacity: 1;
}

@media screen and (max-width:480px) {

  .slick-slide img {
    width: 70% !important;
  }

  .carousel {
    padding-bottom: 10%;
  }

  .sliderLegend {
    display: none;
  }

  .slick-slide img:hover~.sliderLegend{
    display: none;
  }
}
</style>
