<template>
  <form class="flex flex-col" @submit.prevent="emit('submitLoginForm')">
    <div>
      <input-with-label v-model="propsValue.email" type="email" label="Adresse mail" />
    </div>
    <div class="mt-[10px]">
      <input-with-label v-model="propsValue.password" type="password" label="Mot de passe" />
    </div>
    <button-item type="submit" class="mt-[15px] py-[7px]">
      Connexion
    </button-item>
  </form>
</template>

<script lang="ts" setup>

import InputWithLabel from '@/components/form/input-with-label.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { useVModel } from '@/composables/UseVModel';
import { UserLogin } from '@/types/users/UserLogin';

const props = defineProps<{modelValue: UserLogin}>()
const propsValue = useVModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'submitLoginForm'): void,
}>()
</script>
