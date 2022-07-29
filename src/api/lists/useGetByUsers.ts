import instance from '@/api';
import { Ref, ref } from 'vue';

export const useGetByUsers = () => {
    const lists = ref(null)
    const error: Ref<string> = ref('')
    const getLists = async () => {
        error.value = '';
        await instance.get('lists')
            .then((response) => {
                lists.value = response.data
                return response.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getLists()
    return {
        getLists,
        lists,
        error
    }
}
