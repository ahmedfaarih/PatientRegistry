import {ref} from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";

export default function useIslands(){
    const island =ref([]);
    const router = useRouter();
    const errors = ref('');

    /*const getIslands = async ()=>{
        let response = await axios.get('/api/islands');
        island.value = response.data.data;
    }*/
    const storeIslands = async (data)=>{
        await axios.post('/api/islands/', data);
        await router.push({name:'patients.index'})
    }

    /*const destroyPatients = async (id)=>{
        await axios.delete('/api/patients/' + id);
    }*/

    return {
        island,
        errors,
       /* getIslands,*/
        storeIslands,

    }

}
