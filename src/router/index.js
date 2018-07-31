import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/store';

import authRoutes from './authRoutes';
import dashboardRoutes from './dashboardRoutes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/pages/Home').default
    },
    ...authRoutes,
    ...dashboardRoutes,
    {
      path: '*',
      component: require('@/pages/NotFound').default,
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authNeeded)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.authToken) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
