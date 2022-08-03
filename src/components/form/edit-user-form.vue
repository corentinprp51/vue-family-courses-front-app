<template>
  <form class="flex flex-col" @submit.prevent="emit('submitEditForm')">
    <div>
      <input-with-label
        v-model="propsValue.firstname"
        type="text"
        label="Nom"
      />
    </div>
    <div class="mt-[10px]">
      <input-with-label
        v-model="propsValue.lastname"
        type="text"
        label="Prénom"
      />
    </div>
    <div class="mt-[10px]">
      <input-with-label
        v-model="propsValue.username"
        type="text"
        label="Nom d'utilisateur"
        required
      />
    </div>
    <div class="mt-[10px]">
      <input-with-label
        v-model="propsValue.email"
        type="email"
        label="Adresse mail"
        required
      />
    </div>
    <div class="mt-[10px]">
      <input-with-label
        v-model="propsValue.password"
        type="password"
        label="Mot de passe"
        required
      />
    </div>
    <div class="mt-[10px]">
      <input-with-label
        v-model="propsValue.password_confirmation"
        type="password"
        label="Confirmation mot de passe"
        required
      />
    </div>
    <button-item type="submit" class="mt-[15px] py-[7px]">
      Modifier
    </button-item>
  </form>
</template>

<script lang="ts" setup>

import InputWithLabel from '@/components/form/input-with-label.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { useVModel } from '@/composables/UseVModel';
import { UserRegister } from '@/types/users/UserRegister';

const props = defineProps<{modelValue: UserRegister}>()
const propsValue = useVModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'submitEditForm'): void,
}>()
</script>
