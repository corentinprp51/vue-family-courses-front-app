<template>
  <div class="mt-[10px]">
    <title-medium>Rejoindre une liste</title-medium>
    <form class="mt-[20px]" @submit.prevent="joinList(joinLink)">
      <input-with-label v-model="joinLink" label="Lien d'invitation" />
      <button-item class="w-full py-[12px] mt-[10px]" type="submit">
        Rejoindre
      </button-item>
    </form>
    <error-banner v-if="error">
      {{ error }}
    </error-banner>
  </div>
</template>

<script lang="ts" setup>
import TitleMedium from '@/components/title/title-medium.vue';
import InputWithLabel from '@/components/form/input-with-label.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { ref } from 'vue';
import ErrorBanner from '@/components/errors/error-banner.vue';
import { useJoinList } from '@/api/lists/useJoinList';

const joinLink = ref('')
const { joinList, error } = useJoinList()
</script>
