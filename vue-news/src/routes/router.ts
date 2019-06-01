import Vue from 'vue';
import Router from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
import CreateListView from '@/views/CreateListView.js';
import store from '@/store/store.ts';
import bus from '@/utils/bus.ts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      // component: CreateListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('ListStore/fetchList', to.name)
          .then(() => {
              // bus.$emit('end:spinner');
              next();
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      // component: CreateListView('AskView'), // AskView,
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('ListStore/fetchList', to.name)
          .then(() => {
              // bus.$emit('end:spinner');
              next();
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: CreateListView('JobsView'), // JobsView,
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('ListStore/fetchList', to.name)
          .then(() => {
              // bus.$emit('end:spinner');
              next();
          });
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
