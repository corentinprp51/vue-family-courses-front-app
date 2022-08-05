<template>
  <div class="mt-[37px]">
    <title-big>Profil</title-big>
    <div class="flex flex-col items-center">
      <div class="mt-[14px] w-[100px] h-[100px] bg-white rounded-full" />
      <div class="mt-[5px]">
        <span>{{ user.firstname }} {{ user.lastname }}</span>
      </div>
      <div class="mt-[10px] w-full">
        <edit-user-form v-model="userEditForm" @submit-edit-form="editUser(userEditForm)" />
      </div>
      <error-banner v-if="error" class="mt-[10px] w-full">
        {{ error }}
      </error-banner>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TitleBig from '@/components/title/title-big.vue';
import EditUserForm from '@/components/form/edit-user-form.vue';
import { reactive } from 'vue';
import { useEditUser } from '@/api/user/useEditUser';
import ErrorBanner from '@/components/banner/error-banner.vue';
import { UserRegister } from '@/types/users/UserRegister';

const { user, error, editUser } = useEditUser()
const userEditForm: UserRegister = reactive({
  ...user,
  password: '',
  password_confirmation: ''
}) as UserRegister
</script>
