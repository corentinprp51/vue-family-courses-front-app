<template>
  <div class="pt-[37px]">
    <title-big>Vos listes</title-big>
    <div v-if="lists && lists.length > 0" class="mt-[37px] grid grid-cols-1 gap-y-[10px]">
      <card-home v-for="list in lists" :key="list.id" :list="list" />
    </div>
    <button-item class="py-[12px] w-full mt-[30px]" @click="router.push('/create')">
      Créer une nouvelle liste
    </button-item>
  </div>
</template>

<script lang="ts" setup>
import TitleBig from '@/components/title/title-big.vue';
import { useGetByUsers } from '@/api/lists/useGetByUsers';
import CardHome from '@/components/cards/card-home.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { useRouter } from 'vue-router';

const { lists } = useGetByUsers()
const router = useRouter()
</script>
