import {ref} from 'vue';
import axios from "axios";
export default function useAdress(){
    const adresses =ref([]);
    const adress =ref([]);

    const getAdresses = async ()=>{
        let response = await axios.get('/api/adrs');
        adresses.value = response.data.data;
    }

    const getAdress = async (id)=>{
        let response = await axios.get('/api/adrs/'+id);
        adress.value = response.data.data;
    }

    /*const destroyPatients = async (id)=>{
        await axios.delete('/api/patients/' + id);
    }*/

    return {
        adresses,
        adress,
        getAdresses,
        getAdress

    }

}
