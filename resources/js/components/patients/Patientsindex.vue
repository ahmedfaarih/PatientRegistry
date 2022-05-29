<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="">Patient Registry</a></li>
            <li class="breadcrumb-item"><a href="#">Home</a></li>

        </ol>
    </nav>
    <button type="button" class="btn border border-success m-3"><router-link :to="{name:'patients.create'}">Add Patient </router-link></button>
    <button type="button" class="btn border border-success m-3">Add an Adress</button>
    <button type="button" class="btn border border-success m-3"><router-link :to="{name:'islands.create'}">Add an Island </router-link></button>
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

            <td>
                <button class="btn btn-info m-1 " type="button" > <router-link :to="  {name:'patients.show', params:{id:items.id}}">View</router-link></button>
                <button class="btn btn-warning m-1 " type="button" ><router-link :to="{name:'patients.edit', params:{id:items.id}}">Edit</router-link></button>
            <button @click="deletePatient(items.id)" class="m-1 btn btn-danger">Delete</button></td>
        </tr>

        </tbody>
    </table>




</template>

<script>

import usePatients from "../../composables/patients";
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

</style>
