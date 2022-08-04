<template>
  <div class="flex flex-col">
    <title-big class="mt-[37px]">
      Connexion
    </title-big>
    <login-form v-model="formUserLogin" class="mt-[20px]" @submit-login-form="login(formUserLogin)" />
    <router-link class="mt-[20px] text-center text-[14px] italic text-blue-500 underline" to="/register">
      Pas encore inscris ? N'attends plus
    </router-link>
    <div v-if="error">
      <error-banner>{{ error }}</error-banner>
    </div>
  </div>
</template>

<script lang="ts" setup>

import TitleBig from '@/components/title/title-big.vue';
import LoginForm from '@/components/form/login-form.vue';
import { reactive } from 'vue';
import { useLogin } from '@/api/authentication/useLogin';
import ErrorBanner from '@/components/banner/error-banner.vue';

const { error, login } = useLogin()

const formUserLogin = reactive({
  email: '',
  password: '',
})
</script>

<style scoped>

</style>
