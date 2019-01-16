import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Whatever from '../pages/Whatever.vue';
import Article from '../pages/Article.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/whatever', name: 'whatever', component: Whatever },
  { path: '/articles/:id', name: 'article', component: Article },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
