import {defineStore, StoreDefinition} from "pinia";
import { ListHomePage } from '@/types/lists/ListHomePage';

type State = {
    list: null | ListHomePage;
}
export const useListStore: StoreDefinition<"list", State>
    = defineStore('list', {
    state: () => {
        return {
            list: null,
        } as State
    },
    actions: {
        setList(list: ListHomePage) {
            this.list = list;
        },
    }
});
