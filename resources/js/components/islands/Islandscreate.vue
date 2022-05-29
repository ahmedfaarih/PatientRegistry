<template>
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="">Patient Registry</a></li>
            <li class="breadcrumb-item"><a href="#">Islands</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add</li>
        </ol>
    </nav>
    <form @submit.prevent="saveIsland">
        <div class="mb-3">
            <label for="atoll" class="form-label">Atoll Name</label>
            <input name="atoll" type="text" class="form-control" id="atoll" v-model="form.atoll">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Island Name</label>
            <input id="name" type="text" class="form-control"  v-model="form.name">
        </div>
        <button type="submit" class="btn border-primary">Submit</button>
    </form>
</template>


<script>



import useIslands from "../../composables/islands";
import {reactive}  from "vue";


export default{
    setup(){
        const {errors,storeIslands}= useIslands();

       const form = reactive({
            'atoll_name':'',
            'name':'',
        });

       const saveIsland = async ()=>{
           await storeIslands({...form})
        }



        return {
            form,
            errors,
            saveIsland,
        }
    }
}

</script>
