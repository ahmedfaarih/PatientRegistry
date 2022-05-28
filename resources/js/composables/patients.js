import {ref} from 'vue';
import axios from "axios";
export default function usePatients(){
    const patients =ref([]);

    const getPatients = async ()=>{
        let response = await axios.get('/api/patients');
        patients.value = response.data.data;
    }

    const destroyPatients = async (id)=>{
      await axios.delete('/api/patients/' + id);
    }

    return {
        patients,
        getPatients,
        destroyPatients,
    }

}
