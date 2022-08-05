import { markRaw, ref, Ref } from 'vue';
import SuccessFlashMessage from '@/components/banner/flash-messages/success-flash-message.vue'
import ErrorFlashMessage from '@/components/banner/flash-messages/error-flash-message.vue'

export default class FlashMessagesService {
    private static instance: FlashMessagesService
    message: Ref<Array<{component: any; message: string}>> = ref([])
    TIMEOUT = 4000

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static getInstance(): FlashMessagesService {
        if (!FlashMessagesService.instance) {
            FlashMessagesService.instance = new FlashMessagesService()
        }
        return FlashMessagesService.instance
    }

    public success(msg = 'Succès'): void {
        const component = markRaw<any>(SuccessFlashMessage)
        this.message.value.push({
            component,
            message: msg
        })
        setTimeout(() => {
            this.message.value.shift()
        }, this.TIMEOUT)
    }

    public error(msg = 'Erreur'): void {
        const component = markRaw<any>(ErrorFlashMessage)
        this.message.value.push({
            component,
            message: msg
        })
        setTimeout(() => {
            this.message.value.shift()
        }, this.TIMEOUT)
    }

}
