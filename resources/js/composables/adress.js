import {ref} from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";
export default function useAdress(){

    const adresses =ref([]);
    const adress =ref([]);
    const errors = ref('');
    const router = useRouter();

    const getAdresses = async ()=>{
        let response = await axios.get('/api/adrs');
        adresses.value = response.data.data;
    }

    const getAdress = async (id)=>{
        let response = await axios.get('/api/adrs/'+id);
        adress.value = response.data.data;
    }

    const storeAdress = async (data)=>{
        errors.value=''
        try {
            await axios.post('/api/adrs/', data);
            await router.push({name:'patients.index'})
        }catch (e) {
            if(e.response.status===422){
                errors.value = e.response.data.errors
            }
        }

    }

    const updateAdress = async (id)=>{
        errors.value=''
        try {
            await axios.put('/api/adrs/' +id,patient.value);
            await router.push({name:'patients.index'})
        }catch (e) {
            if(e.response.status===422){
                errors.value = e.response.data.errors
            }
        }

    }

    const destroyAdress = async (id)=>{
        await axios.delete('/api/adrs/' + id);
    }

    return {
        adresses,
        adress,
        getAdresses,
        getAdress,
        storeAdress,
        updateAdress,
        destroyAdress

    }

}
