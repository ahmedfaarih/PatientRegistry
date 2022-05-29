<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Adress</a></li>
            <li class="breadcrumb-item active" aria-current="page">View Adress</li>
        </ol>
    </nav>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">House Name</th>
            <th scope="col">District</th>
            <th scope="col">Atoll</th>
            <th scope="col">Island Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="items in adress" :key="items.id">
            <td>{{items.house_name}}</td>
            <td>{{items.district}}</td>
            <td>{{items.island.atoll}}</td>
            <td>{{items.island.name}}</td>
        </tr>

        </tbody>
    </table>
</template>

<script>

import useAdress from "../../composables/adress";
import {onMounted} from "vue";

export default{
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props){
        const {adress, getAdress}= useAdress();

        onMounted(getAdress(props.id));

        return {
            adress,
            getAdress,
        }
    }
}
</script>
