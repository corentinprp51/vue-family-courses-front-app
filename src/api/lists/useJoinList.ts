import instance from '@/api';
import { ref } from 'vue';
import router from '@/router';

export const useJoinList = () => {
    const error = ref('')
    const joinList = async (invitationLink: string) => {
        error.value = ''
        await instance.post(`/lists/join/${invitationLink}`)
            .then((response) => {
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
