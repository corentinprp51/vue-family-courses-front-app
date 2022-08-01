import {defineStore, StoreDefinition} from "pinia";
import { Socket } from 'socket.io-client';

type State = {
    socket: null | Socket;
}
export const useSocketStore: StoreDefinition<"socket", State>
    = defineStore('socket', {
    state: () => {
        return {
            socket: null,
        } as State
    },
    actions: {
        setSocket(socket: Socket) {
            this.socket = socket;
        },
    }
});
