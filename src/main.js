import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue'
import Product from './views/ProductDetails.vue'
import Schedule from './views/TheSchedule.vue'
import store from './store'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home',  component: Home, alias: '/' },
      { path: '/details', name: 'details', component: Product, props: true },
      { path: '/schedule', name: 'schedule', component: Schedule, },
    ],
    linkActiveClass: "active",
  });

  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.mount('#app');

