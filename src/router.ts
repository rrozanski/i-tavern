import Vue from 'vue';
import Router from 'vue-router';
import AdventureView from '@/views/AdventureView.vue';
import TavernView from '@/views/TavernView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tavern',
      component: TavernView
    },
    {
      path: '/adventure',
      name: 'adventure',
      component: AdventureView
    }
  ],
});
