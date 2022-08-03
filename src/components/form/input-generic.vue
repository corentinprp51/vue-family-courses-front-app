<template>
  <input v-bind="$attrs" v-model="propsValue" class="font-normal text-[14px] text-left text-black rounded-[10px] py-[12px] bg-white drop-shadow-classic pl-[7px] focus:outline-none border-[2px] border-white focus:border-primary-color">
</template>

<script lang="ts" setup>
import { useVModel } from '@/composables/UseVModel';

const props = defineProps<{ modelValue: string | number | null }>()
const propsValue = useVModel(props, 'modelValue')
</script>
