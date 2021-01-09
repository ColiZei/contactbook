import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/contact/:id',
    name: 'ContactDetail',
    props: true,
    component: Contact
  },
  {
    path: '/new/',
    name: 'NewContact',
    component: () => import('../views/New')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
