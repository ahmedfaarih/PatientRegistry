import { createWebHistory, createRouter } from "vue-router";
import PatientsIndex from "../components/patients/Patientsindex";
import PatientsCreate from "../components/patients/Patientscreate";
import PatientsEdit from "../components/patients/Patientsedit";
import PatientsShow from "../components/patients/Patientsshow";
import IslandsCreate from "../components/islands/Islandscreate";
import AdressesCreate from "../components/adresses/Adressescreate";


const routes = [
    {
        path: "/dashboard",
        name: "patients.index",
        component: PatientsIndex,
    },
    {
        path: "/patients/:id/show",
        name: "patients.show",
        component: PatientsShow,
        props: true,
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
