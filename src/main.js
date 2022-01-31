import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue'
import Product from './views/ProductDetails.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home', component: Home },
      { path: '/details', component: Product },
    ],
    linkActiveClass: "active",
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');

