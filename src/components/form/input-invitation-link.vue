<template>
  <div class="flex flex-col">
    <div>
      <label-generic>Lien d'invitation</label-generic>
    </div>
    <div class="w-full flex justify-between">
      <input-generic v-model="propsValue" class="w-[49%]" />
      <button-item class="py-[12px] w-[49%]">
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
</script>
