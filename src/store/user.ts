import {defineStore, StoreDefinition} from "pinia";
import { User } from '@/types/users/User';

type State = {
    user: null | User;
    token: null | string;
}
export const useUserStore: StoreDefinition<"user", State>
    = defineStore('user', {
    state: () => {
        return {
            user: null,
            token: null
        } as State
    },
    actions: {
        setUser(user: User) {
            this.user = user;
        },
        setToken(token: string) {
            this.token = token;
        }
    }
});
