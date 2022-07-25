<template>
  <div v-if="!isDeleted" class="flex justify-between p-[5px] rounded-[10px] bg-white drop-shadow-classic items-center" @click="setChecked(product.id)">
    <div class="flex">
      <div class="rounded-full border border-primary-color w-[20px] h-[20px]" :class="isChecked ? 'bg-primary-color' : ''" />
      <span class="ml-[10px] font-light text-[14px]" :class="isChecked ? 'font-extralight italic line-through' : 'font-light'">{{ product.libelle }}</span>
    </div>
    <div>
      <img src="@/assets/trash_icon.svg" alt="REMOVE" @click="removeProduct(product.id)">
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { Product } from '@/types/products/Product';
const props = defineProps<{ product: Product }>()

const emit = defineEmits<{
  (e: 'removeProduct', id: number): void,
  (e: 'checkProduct', product: {id: number, checked: boolean}): void,
}>()

const isChecked = ref(props.product.checked)
const isDeleted = ref(false)
const setChecked = (id: number) => {
  isChecked.value = !isChecked.value
  emit('checkProduct', { id, checked: isChecked.value })
}
const removeProduct = (id: number) => {
  isDeleted.value = true
  emit('removeProduct', id)
}

</script>
