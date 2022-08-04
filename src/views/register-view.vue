<template>
  <div class="flex flex-col">
    <title-big class="mt-[37px]">
      Inscription
    </title-big>
    <register-form v-model="formUserRegister" class="mt-[20px]" @submit-register-form="registerUser(formUserRegister)" />
    <router-link class="mt-[20px] text-center text-[14px] italic text-blue-500 underline" to="/login">
      Déjà inscris ? Connecte-toi !
    </router-link>
    <div v-if="error">
      <error-banner>{{ error }}</error-banner>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TitleBig from '@/components/title/title-big.vue';
import ErrorBanner from '@/components/banner/error-banner.vue';
import { reactive } from 'vue';
import RegisterForm from '@/components/form/register-form.vue';
import { useRegister } from '@/api/authentication/useRegister';

const { error, registerUser } = useRegister()
const formUserRegister = reactive({
  email: '',
  username: '',
  firstname: '',
  lastname: '',
  password: '',
  password_confirmation: '',
})
</script>
