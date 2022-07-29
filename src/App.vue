<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavbarMenu from '@/components/navigation/navbar-menu.vue';

const route = useRoute()
const transition: string = (route.meta.transition) as string || 'fade'
</script>

<template>
  <div>
    <div class="px-[15px] bg-main-background-color min-h-screen">
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
