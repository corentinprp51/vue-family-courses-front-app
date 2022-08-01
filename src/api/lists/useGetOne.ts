import instance from '@/api';
import { Ref, ref } from 'vue';
import { ListHomePage } from '@/types/lists/ListHomePage';
import { useUserStore } from '@/store/user';
import { UserFromList } from '@/types/users/UserFromList';
import { User } from '@/types/users/User';
import { useListStore } from '@/store/list';
import router from '@/router';

export const useGetOne = (listId: string) => {
    const list: Ref<null | ListHomePage> = ref(null)
    const isPreloading: Ref<boolean> = ref(false)
    const error: Ref<string> = ref('')
    const userList: Ref<null | UserFromList> = ref(null)
    const userStore = useUserStore()
    const listStore = useListStore()
    const getList = async (listId: string) => {
        error.value = '';
        isPreloading.value = true
        await instance.get(`lists/${listId}`)
            .then((response) => {
                list.value = response.data
                if (list.value && list.value.users) {
                    const userFromList = list.value.users.find((u) => u.id === (userStore.user as User).id)
                    if (userFromList) {
                        userList.value = userFromList
                        listStore.setList(list.value)
                    } else {
                        router.push('/')
                    }
                }
                return response.data
            })
            .catch(() => {
                router.push('/')
            })
            .finally(() => {
                isPreloading.value = false
            })
    }
    getList(listId)
    return {
        getList,
        userList,
        isPreloading,
        list,
        error
    }
}

export const fetchList = async (listId: string) => {
    return await instance.get(`lists/${listId}`).then((res) => res.data).catch(() => 'Une erreur est survenue')
}
