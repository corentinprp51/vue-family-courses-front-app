<template>
  <div>
    <title-medium>
      {{ listStore.list.title }}
    </title-medium>
    <div class="mt-[43px]">
      <add-product-form v-model="newProduct" @add-product-form="addProduct(newProduct, listId)" />
    </div>
    <error-banner v-if="error" class="mt-[10px]">
      {{ error }}
    </error-banner>
  </div>
</template>

<script lang="ts" setup>
import TitleMedium from '@/components/title/title-medium.vue';
import { useRoute } from 'vue-router';
import { useListStore } from '@/store/list';
import AddProductForm from '@/components/form/add-product-form.vue';
import { reactive } from 'vue';
import { useAddOne } from '@/api/products/useAddOne';
import ErrorBanner from '@/components/errors/error-banner.vue';

const route = useRoute()
const listId = route.params.id.toString()
const listStore = useListStore()
const newProduct = reactive({
  libelle: '',
  amount: 0,
  volume: ''
})
const { error, addProduct } = useAddOne()
</script>

<style scoped>

</style>
