<template>
  <div class="flex flex-col">
    <label-generic class="font-light italic text-third-text-color text-[12px]">
      {{ label }}
    </label-generic>
    <input-generic v-model="propsValue" />
  </div>
</template>

<script lang="ts" setup>

import { useVModel } from '@/composables/UseVModel';
import InputGeneric from '@/components/form/input-generic.vue';
import LabelGeneric from '@/components/form/label-generic.vue';

const props = defineProps<{modelValue: string; label: string}>()
const propsValue = useVModel(props, 'modelValue')
</script>
