import instance from '@/api';
import { Ref, ref } from 'vue';

export const useGetByUsers = () => {
    const lists = ref(null)
    const isPreloading = ref(false)
    const error: Ref<string> = ref('')
    const getLists = async () => {
        error.value = ''
        isPreloading.value = true
        await instance.get('lists')
            .then((response) => {
                lists.value = response.data
                return response.data
            })
            .catch(() => {
                error.value = 'Une erreur est survenue'
            })
            .finally(() => {
                isPreloading.value = false;
            })
    }
    getLists()
    return {
        getLists,
        isPreloading,
        lists,
        error
    }
}
