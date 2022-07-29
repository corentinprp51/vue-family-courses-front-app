<template>
  <div>
    <label-generic>À acheter</label-generic>
    <div class="flex flex-col">
      <list-element
        v-for="product in products.filter((p => !p.checked))"
        :key="product.id"
        class="first:mt-0 mt-[5px]"
        :product="product"
        @check-product="emit('checkProduct', product)"
        @remove-product="emit('removeProduct', product.id)"
      />
    </div>
  </div>
  <div class="mt-[15px]">
    <label-generic>Acheté(s)</label-generic>
    <div class="flex flex-col">
      <list-element
        v-for="product in products.filter((p => p.checked))"
        :key="product.id"
        class="first:mt-0 mt-[5px]"
        :product="product"
        @check-product="emit('checkProduct', product)"
        @remove-product="emit('removeProduct', product.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from '@/types/products/Product';
import ListElement from '@/components/lists/list-element.vue';
import LabelGeneric from '@/components/form/label-generic.vue';

defineProps<{ products: Array<Product> }>()
const emit = defineEmits<{
  (e: 'removeProduct', id: number): void,
  (e: 'checkProduct', product: Product): void,
}>()

</script>
