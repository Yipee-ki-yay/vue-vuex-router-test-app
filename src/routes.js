import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import E404 from './components/E404';

const routes = [
    {
        path: '',
        redirect: {name: 'products'}
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '*',
        component: E404
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});