import instance from '@/api';
import { Ref, ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/store/user';
import { UserRegister } from '@/types/users/UserRegister';
import FlashMessagesService from '@/services/FlashMessagesService';

export const useRegister = () => {
    const user = ref(null)
    const userStore = useUserStore()
    const token = ref('')
    const error: Ref<string> = ref('')
    const registerUser = async (userRegisterForm: UserRegister) => {
        error.value = '';
        if(userRegisterForm.email && userRegisterForm.password && userRegisterForm.password_confirmation && userRegisterForm.username) {
            if (userRegisterForm.password === userRegisterForm.password_confirmation) {
                await instance.post('register', userRegisterForm)
                    .then((response) => {
                        token.value = response.data.token.token
                        localStorage.setItem('token', token.value)
                        user.value = response.data.user
                        userStore.setUser(user.value)
                        userStore.setToken(token.value)
                        FlashMessagesService.getInstance().success('Vous vous êtes inscris avec succès !')
                        router.push('/')
                        return response.data
                    })
                    .catch((err) => {
                        if (err.status === 422) {
                            error.value = err.message
                        } else {
                            error.value = 'Une erreur est survenue'
                        }
                    })
            } else {
                error.value = 'Les mots de passe ne sont pas identiques'
            }
        } else {
            error.value = 'Veuillez saisir tous les champs obligatoires'
        }
    }
    return {
        registerUser,
        error
    }
}
