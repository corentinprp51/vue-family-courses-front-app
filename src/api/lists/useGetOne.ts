import instance from '@/api';
import { Ref, ref } from 'vue';
import { ListHomePage } from '@/types/lists/ListHomePage';
import { useUserStore } from '@/store/user';
import { UserFromList } from '@/types/users/UserFromList';
import { User } from '@/types/users/User';

export const useGetOne = (listId: string) => {
    const list: Ref<null | ListHomePage> = ref(null)
    const error: Ref<string> = ref('')
    const userList: Ref<null | UserFromList> = ref(null)
    const userStore = useUserStore()
    const getList = async (listId: string) => {
        error.value = '';
        await instance.get(`lists/${listId}`)
            .then((response) => {
                list.value = response.data
                if (list.value && list.value.users) {
                    const userFromList = list.value.users.find((u) => u.id === (userStore.user as User).id)
                    if (userFromList) {
                        userList.value = userFromList
                    }
                }
                return response.data
            })
            .catch(() => {
                error.value = 'Une erreur est survenue'
            })
    }
    getList(listId)
    return {
        getList,
        userList,
        list,
        error
    }
}
