import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import MainPage from './components/Main';
import HotelSelected from './components/HotelSelected';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { path: '/selected-hotels', component: HotelSelected }
];

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
