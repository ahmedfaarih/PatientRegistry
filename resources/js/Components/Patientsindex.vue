<template>
    <button type="button" class="btn btn-success m-3"><router-link :to="{name:'patients.create'}">Add Patient </router-link></button>
       <table class="table table-sm">

        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">ID card Number</th>
            <th scope="col">Adress</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="items in patients" :key="items.id">
            <th scope="row">{{items.id}}</th>
            <td>{{items.name}}</td>
            <td>{{items.dob}}</td>
            <td>{{items.national_id}}</td>
            <td><button class="btn btn-info m-1"><router-link :to="{name:'patients.show'}">View </router-link></button>
            <button @click="deletePatient(items.id)" class="m-1 btn btn-danger">Delete</button></td>
        </tr>

        </tbody>
    </table>
</template>

<script>
import usePatients from "../composables/patients";
import {onMounted} from "vue";

export default{
    setup(){
        const {patients, getPatients, destroyPatients}= usePatients();

        onMounted(getPatients);

        const deletePatient = async (id) => {
            if (!window.confirm('Are you sure ?')){
                return
            }
            await destroyPatients(id);
            await getPatients();
        }

        return {
            patients,
            deletePatient
        }
    }
}
</script>

<style>
button{
    text-decoration: white;
}
a{
    text-decoration: none;
}
</style>
