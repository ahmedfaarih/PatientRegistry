import { createWebHistory, createRouter } from "vue-router";
import PatientsIndex from "../components/Patientsindex";
import PatientsCreate from "../components/PatientsCreate";
import PatientsAdress from "../components/PatientsAdress";

const routes = [
    {
        path: "/dashboard",
        name: "patients.index",
        component: PatientsIndex,
    },
    {
        path: "/patients/create",
        name: "patients.create",
        component: PatientsCreate,
    },
    {
        path: "/patients/show",
        name: "patients.show",
        component: PatientsAdress,
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
