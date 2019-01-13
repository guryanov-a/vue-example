import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const app = new Vue({
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
