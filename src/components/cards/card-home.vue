<template>
  <div class="flex flex-col bg-white drop-shadow-classic rounded-[10px]">
    <div class="flex items-center justify-between mx-[10px]">
      <div class="w-[50px] h-[50px] rounded-full bg-white drop-shadow-classic" />
      <div class="flex flex-col">
        <span class="font-normal text-[12px]">{{ list.title }}</span>
        <span class="font-semibold text-[10px]">{{ getListOwner(list.users) }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-[5px] bg-light-gray-bg mx-[10px] rounded-[10px] drop-shadow-classic mb-[15px]">
      <ul class="flex flex-col items-center py-2">
        <li v-for="product in list.products" :key="product.id" class="text-[10px] font-medium italic mb-[3px] last:mb-0">
          {{ product.libelle }}
        </li>
      </ul>
    </div>
    <div class="flex justify-between mx-[10px] items-center">
      <span class="font-extralight italic text-[7px]">Dernière mise à jour : {{ getLocalDate }}</span>
      <!-- TODO - Rajouter les collaborateurs dans les listes d'accueil API -->
      <!--      <div class="flex relative">-->
      <!--        <div class="w-[40px] h-[40px] rounded-full bg-primary-color drop-shadow-classic absolute right-[20px]" />-->
      <!--        <div class="w-[40px] h-[40px] rounded-full bg-primary-color drop-shadow-classic absolute right-[10px]" />-->
      <!--        <div class="w-[40px] h-[40px] rounded-full bg-primary-color drop-shadow-classic absolute right-0" />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ListHomePage } from '@/types/lists/ListHomePage';
import { computed } from 'vue';
import { User } from '@/types/User';

const props = defineProps< { list: ListHomePage } >()
const getLocalDate = computed(() => {
  return new Date(props.list.created_at).toLocaleDateString()
})
const getListOwner = (users: Array<User>) => {
  const user = users.find((user) => user.role === 'owner')
  if (user) {
    return user.username
  }
  return 'Personne...'
}
</script>

<style scoped>

</style>
