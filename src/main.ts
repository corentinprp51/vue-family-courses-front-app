import { ComponentPublicInstance, createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router';
import { setUserStore } from '@/api/authentication/setUserStore';
import { createPinia } from 'pinia';

const app = createApp(App).use(createPinia())
let vm: ComponentPublicInstance

setUserStore().finally(() => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    if (!vm) {
        vm = app.use(router).mount('#app')
    }
})
// createApp(App).use(router).mount('#app')
