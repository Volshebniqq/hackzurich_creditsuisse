import Vue from "vue";
import Router from 'vue-router';
import Clients from '@/views/Clients';
import Trends from '@/views/Trends';

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
      },
      {
        path: '/trends',
        name: 'trends',
        component: Trends
      }
  ]
});
