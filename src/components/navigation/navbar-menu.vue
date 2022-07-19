<template>
  <div class="fixed bottom-0 bg-primary-color w-full h-[55px] flex items-center">
    <link-item to="/">
      <img src="@/assets/menu-home.svg" alt="HOME">
    </link-item>
    <link-item to="/uikit">
      <img src="@/assets/menu-profile.svg" alt="PROFILE">
    </link-item>
    <link-item to="/">
      <img src="@/assets/menu-logout.svg" alt="LOGOUT">
    </link-item>
  </div>
</template>

<script lang="ts" setup>

import LinkItem from '@/components/navigation/link-item.vue';
</script>

<style scoped>

</style>
