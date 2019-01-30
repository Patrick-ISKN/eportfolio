import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCookieBite, faRunning, faMusic, faCoffee, faHandPeace, faHandPointer, faPaperPlane, faCode, faArrowDown, faArrowRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueParticles from 'vue-particles';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueParticles);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

library.add(faHeart, faCookieBite, faRunning, faMusic, faCoffee, faHandPeace, faHandPointer, faPaperPlane, faCode, faArrowDown, faThumbsUp, faArrowRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
