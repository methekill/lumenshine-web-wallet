// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueClipboard from 'vue-clipboard2';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

import store from '@/store/store';
import router from '@/router';
import GeneralService from '@/services/general';
import App from '@/App';
import config from './config';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueClipboard);

Vue.use(VueAwesomeSwiper);

async function logBuildDates () {
  /* global __BUILD_DATE__ */
  const backendVersion = await GeneralService.getServerInfo();
  console.log(`Web client v${config.APP_VERSION} - Build date: ${__BUILD_DATE__}`);
  console.log(`Backend v${backendVersion.Version} - Build date: ${backendVersion.BuildDate}`);
}

logBuildDates();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  router,
  template: '<App/>'
});
