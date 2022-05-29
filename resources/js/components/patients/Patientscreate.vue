<template>
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>
    <form  @submit.prevent="savePatient">
        <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input name="name" type="text" class="form-control" id="name"  v-model="form.name" >
        </div>
        <div class="mb-3">
            <label for="dob" class="form-label">Date of birth</label>
            <input name="dob" type="date" class="form-control" id="dob"  v-model="form.dob">
        </div>
        <div class="mb-3">
            <label for="national_id" class="form-label">National ID card number</label>
            <input name="national_id" type="text" class="form-control" id="national_id"  v-model="form.national_id" >
        </div>

        <div class="mb-3">
            <select class="form-select" aria-label="Default select example" v-model="form.adr_id">
                <option selected>Select Adress</option>
                <option  v-for="items in adresses" :value="items.id" >House => {{items.house_name }} | Atoll => {{items.island.atoll}} | Island => {{items.island.name}} </option>
            </select>
        </div>

        <button type="submit" class="btn border-primary">Submit</button>
    </form>
</template>


<script>

import usePatients from "../../composables/patients";
import useAdress from "../../composables/adress";
import {reactive}  from "vue";
import {onMounted} from "vue";

export default{
    setup(){
        const {errors,storePatients}= usePatients();
        const {adresses, getAdresses}= useAdress();

        onMounted(getAdresses);
        const form = reactive({
            'name':'',
            'dob':'',
            'national_id':'',
            'adr_id':'',
        });

        const savePatient = async ()=>{
            await storePatients({...form})
        }


        return {
            form,
            errors,
            savePatient,
            adresses,

        }
    }
}

</script>
