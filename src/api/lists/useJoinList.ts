import instance from '@/api';
import { ref } from 'vue';
import router from '@/router';
import FlashMessagesService from '@/services/FlashMessagesService';

export const useJoinList = () => {
    const error = ref('')
    const joinList = async (invitationLink: string) => {
        error.value = ''
        await instance.post(`/lists/join/${invitationLink}`)
            .then((response) => {
                FlashMessagesService.getInstance().success(`Vous venez de rejoindre cette liste en tant que membre`)
                router.push(`/${response.data.list_id}`)
            })
            .catch((err) => {
                if (err.status === 404) {
                    error.value = `Lien d'invitation invalide`
                } else {
                    error.value = `Vous êtes déjà membre de cette liste`
                }
            })
    }
    return {
        joinList,
        error
    }
}
