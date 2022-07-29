<template>
  <div class="flex flex-col items-center justify-center">
    <!--    <div :class="requireImg" class="h-[100px] w-[100px] bg-cover rounded-full bg-no-repeat bg-center" />-->
    <!--    <img src="@/assets/testImage.jpg" alt="Photo Profil">-->
    <div class="w-[100px] h-[100px] drop-shadow-classic rounded-full bg-white" />
    <div v-if="!isEditMode" class="flex mt-[5px]">
      <span class="font-normal text-[18px]">{{ identity.firstName }} {{ identity.lastName }}</span>
      <img
        class="ml-[10px]"
        src="@/assets/edit-icon.svg"
        alt="Edit"
        @click="isEditMode = true"
      >
    </div>
    <div v-else class="mt-[5px] flex flex-col">
      <input-with-label v-model="propsValue.firstName" label="Nom" />
      <input-with-label v-model="propsValue.lastName" label="Prénom" />
      <button-item class="py-[7px]" @click="isEditMode = false">
        Annuler
      </button-item>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputWithLabel from '@/components/form/input-with-label.vue';
import { useVModel } from '@/composables/UseVModel';
import ButtonItem from '@/components/form/button-item.vue';

const props = defineProps<{modelValue: {firstName: string; lastName: string}; identity: {firstName: string; lastName: string }}>()
const propsValue = useVModel(props, 'modelValue')
const isEditMode = ref(false)
</script>
