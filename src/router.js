import Vue from "vue";
import Router from 'vue-router';
import Clients from '@/views/Clients';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Clients
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    }
  ]
});
