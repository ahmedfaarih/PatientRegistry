import {ref} from 'vue';
import axios from "axios";
export default function useAdress(){
    const adress =ref([]);

    const getAdress = async ()=>{
        let response = await axios.get('/api/adrs');
        adress.value = response.data.data;
    }

    /*const destroyPatients = async (id)=>{
        await axios.delete('/api/patients/' + id);
    }*/

    return {
        adress,
        getAdress,

    }

}
