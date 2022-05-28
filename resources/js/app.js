require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import router from './router/index';
import PatientsIndex from './components/Patientsindex';

const app = createApp({
    /* root component options */
    components:{
        PatientsIndex
    }
}).use(router).mount('#app');

