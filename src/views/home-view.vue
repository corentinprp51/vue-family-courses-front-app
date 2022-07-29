<template>
  <div>
    <title-big>Vos listes</title-big>
    <div class="mt-[37px] grid grid-cols-2">
      <card-home v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TitleBig from '@/components/title/title-big.vue';
import { useGetByUsers } from '@/api/lists/useGetByUsers';
import CardHome from '@/components/cards/card-home.vue';

const { lists } = useGetByUsers()
</script>
