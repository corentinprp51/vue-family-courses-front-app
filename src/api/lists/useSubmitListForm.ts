import instance from '@/api';
import { Ref, ref } from 'vue';
import { ListHomePage } from '@/types/lists/ListHomePage';
import router from '@/router';

export const useSubmitListForm = () => {
    const list = ref(null)
    const error: Ref<string> = ref('')
    const submitListForm = async (newList: Partial<ListHomePage>) => {
        error.value = '';
        if(newList && newList.invitation_link && newList.invitation_link.length <= 10) {
            await instance.post('lists/new', newList)
                .then((response) => {
                    list.value = response.data
                    router.push('/')
                    return response.data
                })
                .catch(() => {
                    error.value = 'Une erreur est survenue'
                })
        } else {
            error.value = `Le lien d'invitation ne doit pas excéder 10 caractères`
        }
    }
    return {
        submitListForm,
        list,
        error
    }
}
