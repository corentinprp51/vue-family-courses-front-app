<template>
  <div class="flex flex-col">
    <div>
      <label-generic>Lien d'invitation</label-generic>
    </div>
    <div class="w-full flex justify-between">
      <input-generic v-model="propsValue" maxlength="10" class="w-[49%]" />
      <button-item class="py-[12px] w-[49%]" @click.prevent="generateLink">
        Générer
      </button-item>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ButtonItem from '@/components/form/button-item.vue';

import { useVModel } from '@/composables/UseVModel';
import LabelGeneric from '@/components/form/label-generic.vue';
import InputGeneric from '@/components/form/input-generic.vue';

const props = defineProps<{modelValue: string}>()
const propsValue = useVModel(props, 'modelValue')

const emit = defineEmits<{
  (e: 'generateLink', link: string): void,
}>()
const generateUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}
const generateLink = () => {
  const invitationLink = generateUniqueId() + generateUniqueId() + generateUniqueId().substring(0,2)
  emit('generateLink', invitationLink)
}
</script>
