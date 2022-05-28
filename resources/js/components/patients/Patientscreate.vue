<template>
    <form>
        <div class="mb-3">
            <label for="" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Date of birth</label>
            <input type="date" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">National ID card number</label>
            <input type="text" class="form-control" id="example" aria-describedby="emailHelp">
        </div>

        <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Adress</option>
                <option  v-for="items in adress" :key="items.id" value="items.id">House => {{items.house_name }} | Atoll => {{items.island.atoll}} | Island => {{items.island.name}}</option>
            </select>
        </div>


        <button type="submit" class="btn border-primary">Submit</button>
    </form>
</template>


<script>

import {onMounted} from "vue";

import useAdress from "../../composables/adress";

export default{
    setup(){
        const {adress, getAdress}= useAdress();

        onMounted(getAdress);

        // const deletePatient = async (id) => {
        //     if (!window.confirm('Are you sure ?')){
        //         return
        //     }
        //     await destroyPatients(id);
        //     await getPatients();
        // }

        return {
            adress,

        }
    }
}

</script>
