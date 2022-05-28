require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import router from './router/index';
import PatientsIndex from './components/Patientsindex';
import PatientsCreate from './components/Patientscreate';


const app = createApp({
    /* root component options */
    components:{
        PatientsIndex,
        PatientsCreate,

    }
}).use(router).mount('#app');

