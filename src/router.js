import Vue from "vue";
import Router from 'vue-router';
import Clients from '@/views/Clients';
import MostlyHappening from '@/views/MostlyHappening'

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
      path: '/mostly-happening',
      name: 'mostlyhappening',
      component: MostlyHappening
    }
  ]
});
