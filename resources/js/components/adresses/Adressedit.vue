<template>
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
            <input name="house_name" type="text" class="form-control" id="house_name"  v-model="adress.house_name" >
        </div>
        <div class="mb-3">
            <label for="district" class="form-label">District</label>
            <input name="district" type="text" class="form-control" id="district"  v-model="adress.district">
        </div>



        <div class="mb-3">
            <label class="form-label">Select Island</label>
            <select class="form-select" aria-label="Default select example" v-model="adress.island_id">
                <option  v-for="items in island" :value="items.id" >Atoll => {{items.atoll}} | Island => {{items.name}} </option>
            </select>
        </div>

        <button type="submit" class="btn border-primary">Submit</button>
    </form>

</template>

<script>

import useAdress from "../../composables/adress";
import useIslands from "../../composables/islands";
import {onMounted} from "vue";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props){

        const {adress,adresses, getAdresses,getAdress,errors,updateAdress}= useAdress();
        const {getIslands,island}= useIslands();

        const saveAdress = async ()=>{
            await updateAdress(props.id);
        }


        onMounted(getAdress(props.id))
        onMounted(getAdresses);
        onMounted(getIslands);

        return{
            errors,
            adresses,
            adress,
            getIslands,
            island,
            saveAdress,
            updateAdress
        }
    }

}
</script>


