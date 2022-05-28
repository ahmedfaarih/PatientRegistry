<template>
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
            <td><button class="btn btn-info m-1 " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View </button>


                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Adress details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h6>District : {{items.adr.district}}</h6>
                                <h6>House : {{items.adr.house_name}}</h6>
                                <h6>Atoll : {{items.adr.island.atoll}}</h6>
                                <h6>Island : {{items.adr.island.name}}</h6>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary bg-primary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
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
