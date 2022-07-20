<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const transition: string = (route.meta.transition) as string || 'fade'
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- Use any custom transition and fallback to `fade` -->
    <transition :name="transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
