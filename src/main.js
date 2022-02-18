import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue'
import Product from './views/ProductDetails.vue'
import Schedule from './views/TheSchedule.vue'
import Cart from './views/TheCart.vue'
import Tickets from './views/AllTickets.vue'
import Ticket from './views/TheTicket.vue'
import Reservation from './views/ReservationPage.vue'
import News from './views/NewsPage.vue'
import store from './store'
import Confirmation from './views/Confirmation.vue'
import Search from './views/SearchResults.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home',  component: Home, alias: '/' },
      { path: '/details', name: 'details', component: Product, props: true },
      { path: '/schedule', name: 'schedule', component: Schedule, props: true },
      { path: '/cart', name: 'cart', component: Cart, props: true},
      { path: '/tickets', name: 'tickets', component: Tickets, props: true},
      { path: '/ticket', name: 'ticket', component: Ticket, props: true },
      { path: '/reservation', name: 'reservation', component: Reservation, props: true },
      { path: '/news', name: 'news', component: News, props: true },
      { path: '/search', name: 'search', component: Search, props: true },
      { path: '/confirmation', name: 'confirmation', component: Confirmation, props: true },
    ],
    linkActiveClass: "active",
  });


  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.mount('#app');

