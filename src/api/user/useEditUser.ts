import instance from '@/api';
import { Ref, ref } from 'vue';
import { useUserStore } from '@/store/user';
import { UserRegister } from '@/types/users/UserRegister';
import FlashMessagesService from '@/services/FlashMessagesService';
import { User } from "@/types/users/User";

export const useEditUser = () => {
    const userStore = useUserStore()
    const user = userStore.user as User
    const error: Ref<string> = ref('')
    const filterEditedFields = (userEditForm: UserRegister) => {
        const userToSend: Partial<UserRegister> = { ...userEditForm }
        if (userStore.user) {
            if (userStore.user.email === userEditForm.email) {
                delete userToSend.email
            }
            if (userStore.user.username === userEditForm.username) {
                delete userToSend.username
            }
        }
        return userToSend
    }
    const editUser = async (userEditForm: UserRegister) => {
        error.value = '';
        if(userEditForm.email && userEditForm.password && userEditForm.password_confirmation && userEditForm.username) {
            if (userEditForm.password === userEditForm.password_confirmation) {
                const userToSend = filterEditedFields(userEditForm)
                await instance.put('user/edit', userToSend)
                    .then((response) => {
                        userStore.setUser(response.data)
                        FlashMessagesService.getInstance().success('Vos données ont bien été mises à jours')
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
        editUser,
        error,
        user
    }
}
