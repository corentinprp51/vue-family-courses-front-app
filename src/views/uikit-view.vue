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
        <button-item class="w-full py-[7px]">
          Ajouter un article
        </button-item>
        <div class="mt-2">
          <input-generic v-model="inputModel" />
          <input-with-label
            v-model="inputModel"
            label="Adresse mail"
            type="email"
            placeholder="Ceci est un placeholder"
          />
          {{ inputModel }}
        </div>
        <div class="mt-2">
          <input-invitation-link v-model="inputModel" />
        </div>
      </div>
      <div class="mt-2">
        <card-profile v-model="identity" :identity="identity" />
        <card-home />
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
import InputInvitationLink from '@/components/form/input-invitation-link.vue';
import InputGeneric from '@/components/form/input-generic.vue';
import CardProfile from '@/components/cards/card-profile.vue';
import CardHome from '@/components/cards/card-home.vue';

const inputModel = ref('')
const identity = ref({
  firstName: 'Corentin',
  lastName: 'Parpette'
})
</script>

<style scoped>

</style>
