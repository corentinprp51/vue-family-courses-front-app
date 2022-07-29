<template>
  <div class="flex flex-col">
    <title-big class="mt-[37px]">
      Connexion
    </title-big>
    <login-form v-model="formUserLogin" class="mt-[20px]" @submit-login-form="login(formUserLogin)" />
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
import ErrorBanner from '@/components/errors/error-banner.vue';

const { error, login } = useLogin()

const formUserLogin = reactive({
  email: '',
  password: '',
})
</script>

<style scoped>

</style>
