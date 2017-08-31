// Absolute Imports
import vueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueAnalytics from 'vue-analytics';
import VueScrollReveal from 'vue-scroll-reveal';
import Icon from 'vue-awesome/components/Icon';
import 'jquery/dist/jquery.min';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'vue-awesome/icons';

// Relative Imports
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Dependendies Setup
Vue.use(vueResource);
Vue.use(BootstrapVue);
Vue.use(VueScrollReveal);
Vue.use(Vuelidate);
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
});
Vue.component('icon', Icon);
Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
