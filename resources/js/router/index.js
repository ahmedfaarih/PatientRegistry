import { createWebHistory, createRouter } from "vue-router";
import PatientsIndex from "../components/patients/Patientsindex";
import PatientsNameID from "../components/patients/PatientsNameID";
import PatientsCreate from "../components/patients/Patientscreate";
import PatientsEdit from "../components/patients/Patientsedit";

import IslandsCreate from "../components/islands/Islandscreate";
import AdressesCreate from "../components/adresses/Adressescreate";
import AdressesEdit from "../components/adresses/Adressedit";


const routes = [
    {
        path: "/dashboard",
        name: "patients.index",
        component: PatientsIndex,
    },

    {
        path: "/nameID",
        name: "patients.nameID",
        component: PatientsNameID,
    },
    {
        path: "/patients/create",
        name: "patients.create",
        component: PatientsCreate,
    },
    {
        path: "/adress/create",
        name: "adress.create",
        component: AdressesCreate,
    },
    {
        path: "/adress/edit",
        name: "adress.edit",
        component: AdressesEdit,
        props: true,
    },
    {
        path: "/patients/:id/edit",
        name: "patients.edit",
        component: PatientsEdit,
        props:true,
    },
    {
        path: "/islands/create",
        name: "islands.create",
        component: IslandsCreate,
    },


    // {
    //     path: "/about",
    //     name: "About",
    //     component: About,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default createRouter({
    history:createWebHistory(),
    routes
});
