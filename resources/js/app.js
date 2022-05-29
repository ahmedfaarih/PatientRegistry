import Adressescreate from "./components/adresses/Adressescreate";

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
import AdressesCreate from './components/adresses/Adressescreate';


const app = createApp({
    /* root component options */
    components:{
        PatientsIndex,
        PatientsCreate,
        IslandsCreate,
        Patientsshow,
        AdressesCreate,

    }
}).use(router).mount('#app');

