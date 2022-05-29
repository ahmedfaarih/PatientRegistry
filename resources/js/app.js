require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import router from './router/index';
import PatientsIndex from './components/patients/Patientsindex';
import PatientsCreate from './components/patients/Patientscreate';
import Patientsshow from "./components/patients/Patientsshow";
import IslandsCreate from './components/islands/Islandscreate';


const app = createApp({
    /* root component options */
    components:{
        PatientsIndex,
        PatientsCreate,
        IslandsCreate,
        Patientsshow,

    }
}).use(router).mount('#app');

