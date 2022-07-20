<template>
  <div>
    <h1>UIKit</h1>
    <div>
      <h2 class="text-6xl font-bold text-center">
        Titles
      </h2>
      <title-big>Vos listes</title-big>
      <title-medium>Courses familiales</title-medium>
      <h2 class="text-6xl font-bold text-center">
        Menu
      </h2>
      <navbar-menu />
      <back-menu />
      <div class="mx-[15px]">
        <button-item class="w-full">
          Ajouter un article
        </button-item>
        <div class="mt-2">
          <input-with-label
            v-model="inputModel"
            label="Adresse mail"
            type="email"
            placeholder="Ceci est un placeholder"
          />
          {{ inputModel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import TitleBig from '@/components/title/title-big.vue';
import TitleMedium from '@/components/title/title-medium.vue'
import NavbarMenu from '@/components/navigation/navbar-menu.vue';
import BackMenu from '@/components/navigation/back-menu.vue';
import ButtonItem from '@/components/form/button-item.vue';
import InputWithLabel from '@/components/form/input-with-label.vue';
import { ref } from 'vue';

const inputModel = ref('')
</script>

<style scoped>

</style>
