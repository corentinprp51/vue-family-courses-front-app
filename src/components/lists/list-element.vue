<template>
  <div class="flex justify-between p-[5px] rounded-[10px] bg-white drop-shadow-classic items-center">
    <div class="flex w-full" @click="setChecked(product)">
      <div class="rounded-full border border-primary-color w-[20px] h-[20px]" :class="product.checked ? 'bg-primary-color' : ''" />
      <span class="ml-[10px] font-light text-[14px]" :class="product.checked ? 'font-extralight italic line-through' : 'font-light'">{{ product.libelle }}</span>
    </div>
    <div>
      <img src="@/assets/trash_icon.svg" alt="REMOVE" @click="removeProduct(product.id)">
    </div>
  </div>
</template>

<script lang="ts" setup>

import { Product } from '@/types/products/Product';
defineProps<{ product: Product }>()

const emit = defineEmits<{
  (e: 'removeProduct', id: number): void,
  (e: 'checkProduct', product: Product): void,
}>()

const setChecked = (product: Product) => {
  emit('checkProduct', product)
}
const removeProduct = (id: number) => {
  emit('removeProduct', id)
}

</script>
