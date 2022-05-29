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

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Atoll Name</th>
            <th scope="col">Island</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="items in island" :key="items.id">
            <th scope="row">{{items.id}}</th>
            <td>{{items.atoll}}</td>
            <td>{{items.name}}</td>
        </tr>

        </tbody>
    </table>
</template>


<script>



import useIslands from "../../composables/islands";
import {reactive}  from "vue";
import {onMounted} from "vue";


export default{
    setup(){
        const {errors,storeIslands,island,getIslands}= useIslands();

       const form = reactive({
            'atoll_name':'',
            'name':'',
        });

        onMounted(getIslands);

       const saveIsland = async ()=>{
           await storeIslands({...form})
        }

        return {
            form,
            errors,
            saveIsland,
            island,
        }
    }
}

</script>
