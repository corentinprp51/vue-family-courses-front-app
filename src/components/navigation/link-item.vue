<template>
  <router-link class="w-1/3 h-full flex justify-center items-center hover:bg-primary-color-darker" :to="to">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>

defineProps<{ to: string }>()
</script>

<style scoped>
.router-link-active {
  @apply bg-primary-color-darker
}
</style>
