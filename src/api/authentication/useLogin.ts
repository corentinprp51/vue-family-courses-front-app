import { UserLogin } from '@/types/users/UserLogin';
import instance from '@/api';
import { Ref, ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/store/user';
import FlashMessagesService from '@/services/FlashMessagesService';

export const useLogin = () => {
    const user = ref(null)
    const userStore = useUserStore()
    const token = ref('')
    const error: Ref<string> = ref('')
    const login = async (userLoginForm: UserLogin) => {
        error.value = '';
        if(userLoginForm.email && userLoginForm.password) {
            await instance.post('login', userLoginForm)
                .then((response) => {
                    token.value = response.data.token.token
                    localStorage.setItem('token', token.value)
                    user.value = response.data.user
                    userStore.setUser(user.value)
                    userStore.setToken(token.value)
                    FlashMessagesService.getInstance().success('Vous désormais connecté')
                    router.push('/')
                    return response.data
                })
                .catch((err) => {
                    if (err.status === 422) {
                        error.value = 'Veuillez saisir une adresse mail et un mot de passe conformes'
                    } else {
                        error.value = 'Identifiants incorrects'
                    }
                })
        } else {
            error.value = 'Veuillez saisir une adresse mail et un mot de passe conformes'
        }
    }
    return {
        login,
        error
    }
}
