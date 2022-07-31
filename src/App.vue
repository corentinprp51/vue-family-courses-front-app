<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavbarMenu from '@/components/navigation/navbar-menu.vue';
import BackMenu from '@/components/navigation/back-menu.vue';

const route = useRoute()
const transition: string = (route.meta.transition) as string || 'fade'

const routesForBackMenu = ['create_list', 'get_list', 'add_product_to_list']
const needBackMenu = () => {
  if (route && route.name) {
    return routesForBackMenu.includes(route.name.toString())
  }
  return false
}
</script>

<template>
  <div>
    <transition :name="transition" mode="out-in">
      <back-menu v-if="needBackMenu()" />
    </transition>
    <div class="px-[15px] pb-[15px] bg-main-background-color h-[calc(100vh_-_55px)] overflow-y-scroll" :class="needBackMenu() ? 'pt-[40px]' : ''">
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
