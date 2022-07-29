import instance from '@/api';
import { useUserStore } from '@/store/user';

export const setUserStore = async () => {
    const userStore = useUserStore()
    await instance.get('user').then((response) => {
        userStore.setUser(response.data)
    })
}
