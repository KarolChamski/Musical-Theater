import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue'
import Product from './views/ProductDetails.vue'
import Schedule from './views/TheSchedule.vue'
import Cart from './views/TheCart.vue'
import Tickets from './views/AllTickets.vue'
import Ticket from './views/TheTicket.vue'
import store from './store'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home',  component: Home, alias: '/' },
      { path: '/details', name: 'details', component: Product, props: true },
      { path: '/schedule', name: 'schedule', component: Schedule, },
      { path: '/cart', name: 'cart', component: Cart, },
      { path: '/tickets', name: 'tickets', component: Tickets, },
      { path: '/ticket', name: 'ticket', component: Ticket, },
    ],
    linkActiveClass: "active",
  });

  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.mount('#app');

