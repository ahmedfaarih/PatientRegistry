<template>


    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
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
            </div>
            <div class="col-md-6">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="">Patient Registry</a></li>
                    <li class="breadcrumb-item"><a href="#">Adresses</a></li>
                </ol>
            </nav>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Atoll</th>
                        <th scope="col">Island</th>
                        <th scope="col">House Name</th>
                        <th scope="col">District</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="items in adresses" :key="items.id">
                        <th scope="row">{{items.id}}</th>
                        <td>{{items.island.atoll}}</td>
                        <td>{{items.island.name}}</td>
                        <td class="bold">{{items.house_name}}</td>
                        <td>{{items.district}}</td>
                        <td>
                            <button class="btn btn-warning m-1 " type="button" ><router-link :to="{name:'adress.edit', params:{id:items.id}}">Edit</router-link></button>
                            <button @click="deleteAdress(items.id)" class=" btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>


<script>

import useIslands from "../../composables/islands";
import useAdress from "../../composables/adress";
import {reactive}  from "vue";
import {onMounted} from "vue";

export default{
    setup(){

        const {adresses, getAdresses,storeAdress, errors,destroyAdress}= useAdress();
        const { getIslands,island}= useIslands();
        onMounted(getIslands)
        onMounted(getAdresses)

        const form = reactive({
            'name':'',
            'dob':'',
            'national_id':'',
            'adr_id':'',
        });

        const deleteAdress = async (id) => {
            if (!window.confirm('Are you sure ?')){
                return
            }
            await destroyAdress(id);
            await getAdresses();
        }

        const saveAdress = async ()=>{
            await storeAdress({...form})
        }


        return {
            form,
            errors,
            saveAdress,
            adresses,
            getIslands,
            island,
            deleteAdress
        }
    }
}

</script>
