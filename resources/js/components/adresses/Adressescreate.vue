<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="">Patient Registry</a></li>
            <li class="breadcrumb-item"><a href="#">Adresses</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add</li>
        </ol>
    </nav>
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>
    <form  @submit.prevent="saveAdress">
        <div class="mb-3">
            <label for="house_name" class="form-label">House Name</label>
            <input name="house_name" type="text" class="form-control" id="name"  v-model="form.house_name" >
        </div>
        <div class="mb-3">
            <label for="district" class="form-label">District</label>
            <input name="district" type="text" class="form-control" id="dob"  v-model="form.district">
        </div>

        <div class="mb-3">
            <label class="form-label">Select Island</label>
            <select class="form-select" aria-label="Default select example" v-model="form.island_id">
                <option  v-for="items in island" :value="items.id" >Atoll => {{items.atoll}} | Island => {{items.name}} </option>
            </select>
        </div>

        <button type="submit" class="btn border-primary">Submit</button>
    </form>
</template>


<script>

import useIslands from "../../composables/islands";
import useAdress from "../../composables/adress";
import {reactive}  from "vue";
import {onMounted} from "vue";

export default{
    setup(){

        const {adresses, getAdresses,storeAdress, errors}= useAdress();
        const { getIslands,island}= useIslands();
        onMounted(getIslands)

        const form = reactive({
            'name':'',
            'dob':'',
            'national_id':'',
            'adr_id':'',
        });

        const saveAdress = async ()=>{
            await storeAdress({...form})
        }


        return {
            form,
            errors,
            saveAdress,
            adresses,
            getIslands,
            island
        }
    }
}

</script>
