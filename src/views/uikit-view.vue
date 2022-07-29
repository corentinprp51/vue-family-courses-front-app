<template>
  <div class="uikit">
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
      <div class="mt-2 mx-[15px]">
        <card-profile v-model="identity" :identity="identity" />
        <div class="grid grid-cols-2 gap-[10px]">
          <card-home :list="fakeList" />
          <card-home :list="fakeList" />
        </div>
      </div>
      <div class="mt-4">
        <list-element :product="fakeList.products[0]" class="mx-[15px]" />
      </div>
      <div class="mt-4">
        <products_list :products="fakeList.products" @check-product="toggleCheckProduct" @remove-product="removeProduct" />
      </div>
      <navbar-menu />
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
import { Ref, ref } from 'vue';
import InputInvitationLink from '@/components/form/input-invitation-link.vue';
import InputGeneric from '@/components/form/input-generic.vue';
import CardProfile from '@/components/cards/card-profile.vue';
import CardHome from '@/components/cards/card-home.vue';
import { ListHomePage } from '@/types/lists/ListHomePage';
import ListElement from '@/components/lists/list-element.vue';
import Products_list from '@/components/lists/products_list.vue';
import { Product } from '@/types/products/Product';

const inputModel = ref('')
const identity = ref({
  firstName: 'Corentin',
  lastName: 'Parpette'
})

const fakeList = ref({
  title: 'Courses Familles',
  created_at: "2022-06-24T13:44:28.000+02:00",
  products: [
    {
      id: 0,
      libelle: 'Oeufs',
      checked: false,
    },
    {
      id: 1,
      libelle: 'Farine',
      checked: false,
    },
    {
      id: 2,
      libelle: 'Pain',
      checked: false,
    },
    {
      id: 3,
      libelle: 'Nutella',
      checked: false,
    },
    {
      id: 4,
      libelle: 'Mais',
      checked: false,
    }
  ],
  users: [
    {
      id: 1,
      email: "test@example.com",
      username: "corentin",
      firstname: null,
      lastname: null,
      remember_me_token: null,
      created_at: "2022-06-22T15:32:08.000+02:00",
      updated_at: "2022-06-22T15:32:08.000+02:00",
      role: "owner"
    },
  ],
}) as unknown as Ref<ListHomePage>
const toggleCheckProduct = (product: Product) => {
  product.checked = !product.checked
}
const removeProduct = (productId: number) => {
  fakeList.value.products = fakeList.value.products.filter(p => p.id !== productId)
}
</script>

<style scoped>
.uikit {
  height: calc(100vh - 55px);
  padding-bottom: 15px;
  overflow-y: scroll;
}
</style>
