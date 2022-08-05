<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavbarMenu from '@/components/navigation/navbar-menu.vue';
import BackMenu from '@/components/navigation/back-menu.vue';
import { io } from 'socket.io-client';
import { useSocketStore } from '@/store/socket';
import FlashMessageHandler from '@/components/banner/flash-messages/flash-message-handler.vue';

const route = useRoute()
const transition: string = (route.meta.transition) as string || 'fade'

const routesForBackMenu = ['create_list', 'get_list', 'add_product_to_list', 'join_list', 'edit_list']
const needBackMenu = () => {
  if (route && route.name) {
    return routesForBackMenu.includes(route.name.toString())
  }
  return false
}
const getDivClasses = () => {
  const classes = []
  if (needBackMenu()) classes.push('pt-[40px]')
  if (route.name) {
    if (!route.name.toString().includes('login') && !route.name.toString().includes('register')) {
      classes.push('pb-[90px]')
    }
    return classes
  }
}
const socketStore = useSocketStore()
const socket = io(import.meta.env.VITE_BASE_URL_SOCKET)
socketStore.setSocket(socket)
</script>

<template>
  <div class="min-w-screen max-w-screen overflow-hidden">
    <!-- Flash Message Handler -->
    <flash-message-handler />
    <transition :name="transition" mode="out-in">
      <back-menu v-if="needBackMenu()" />
    </transition>
    <div class="px-[15px] h-screen bg-main-background-color overflow-y-scroll" :class="getDivClasses()">
      <router-view v-slot="{ Component }">
        <!-- Use any custom transition and fallback to `fade` -->
        <transition :name="transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <navbar-menu v-if="route.name !== 'login' && route.name !== 'register'" />
  </div>
</template>

<style scoped lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
