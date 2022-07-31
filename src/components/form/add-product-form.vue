<template>
  <form class="flex flex-col" @submit.prevent="emit('addProductForm')">
    <div>
      <input-with-label v-model="propsValue.libelle" type="text" label="Libellé" />
    </div>
    <div class="mt-[10px]">
      <input-with-label v-model="propsValue.amount" type="number" label="Quantité" />
    </div>
    <div class="mt-[10px]">
      <input-with-label v-model="propsValue.volume" type="text" label="Volume" />
    </div>
    <button-item type="submit" class="mt-[27px] py-[7px]">
      Ajouter
    </button-item>
  </form>
</template>

<script lang="ts" setup>

import InputWithLabel from '@/components/form/input-with-label.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { useVModel } from '@/composables/UseVModel';
import { Product } from '@/types/products/Product';

const props = defineProps<{modelValue: Product}>()
const propsValue = useVModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'addProductForm'): void,
}>()
</script>
