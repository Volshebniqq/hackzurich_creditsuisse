import Vue from "vue";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HighchartsVue from 'highcharts-vue';


library.add(faUsers);
library.add(faChartLine);
library.add(faHashtag);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(HighchartsVue);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
