import {createRouter} from 'vue-router'
import Homepage from './homepage/HomePage.vue';
import {SignInComponent} from './user';
import Cart from './cart/Cart.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/signin/',
    component: SignInComponent
  },

  {
    path: '/cart/',
    component: Cart
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}