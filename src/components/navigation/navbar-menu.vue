<template>
  <div class="fixed bottom-0 bg-primary-color w-full h-[70px] flex items-start">
    <link-item to="/">
      <img src="@/assets/menu-home.svg" alt="HOME">
    </link-item>
    <link-item to="/profile">
      <img src="@/assets/menu-profile.svg" alt="PROFILE">
    </link-item>
    <div class="w-1/3 flex justify-center items-center hover:bg-primary-color-darker" @click="logout">
      <img src="@/assets/menu-logout.svg" alt="LOGOUT">
    </div>
  </div>
</template>

<script lang="ts" setup>
import LinkItem from '@/components/navigation/link-item.vue';
import router from '@/router';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const logout = async () => {
  localStorage.removeItem('token')
  userStore.setUser(null)
  userStore.setToken(null)
  await router.push('/login')
}
</script>
