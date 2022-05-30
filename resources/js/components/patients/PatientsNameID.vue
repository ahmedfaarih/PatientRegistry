<template>
    <h1>Patient Name: {{name}} </h1>
    <h1>Patient ID: {{id}} </h1>
</template>

<script>


import {onMounted} from "vue";

export default{
    setup(){
        const name = 'Ahmed Faarih';
        const id = 'A328602';

        return {
            name,
            id,
        }
    }
}
</script>
