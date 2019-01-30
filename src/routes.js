import Home from './pages/Home.vue';

const About = resolve => {
  require.ensure(['./pages/About.vue'], () => {
    resolve(require('./pages/About.vue'));
  });
};

const Contact = resolve => {
  require.ensure(['./pages/Contact.vue'], () => {
    resolve(require('./pages/Contact.vue'));
  });
};

const Projects = resolve => {
  require.ensure(['./pages/Projects.vue'], () => {
    resolve(require('./pages/Projects.vue'));
  });
};

const Technos = resolve => {
  require.ensure(['./pages/Technos.vue'], () => {
    resolve(require('./pages/Technos.vue'));
  });
};

const NotFound = resolve => {
  require.ensure(['./pages/NotFound.vue'], () => {
    resolve(require('./pages/NotFound.vue'));
  });
};

export const routes = [
  {path: '', component: Home, name:'home'},
  {path: '/about', component: About, name:'about'},
  {path: '/contact', component: Contact, name:'contact'},
  {path: '/projects', component: Projects, name:'projects'},
  {path: '/technos', component: Technos, name:'technos'},
  {path: '*', component: NotFound, name:'notfound' }
];
