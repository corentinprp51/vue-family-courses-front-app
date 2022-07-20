<template>
  <div class="flex flex-col">
    <label class="font-light italic text-third-text-color text-[12px]">{{ label }}</label>
    <input v-bind="$attrs" v-model="propsValue" class="font-normal text-[14px] text-left text-black rounded-[10px] py-[12px] bg-white drop-shadow-classic pl-[7px] focus:outline-none border-[2px] border-white focus:border-primary-color">
  </div>
</template>

<script lang="ts" setup>

import { useVModel } from '@/composables/UseVModel';

const props = defineProps<{modelValue: string; label: string}>()
const propsValue = useVModel(props, 'modelValue')
</script>
