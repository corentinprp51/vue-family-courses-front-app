<template>
  <div v-if="list">
    <title-medium>{{ list.title }}</title-medium>
    <div class="flex items-center justify-center mt-[20px]">
      <button-item class="py-[7px] w-[70%]" @click="router.push(`/${list.id}/add`)">
        Ajouter un article
      </button-item>
      <img
        src="@/assets/invitationLinkIcon.svg"
        class="ml-[9px]"
        alt="Inviter des amis"
        @click="copyInvitationLink"
      >
      <img
        v-if="userList.role === 'owner'"
        src="@/assets/editListIcon.svg"
        class="ml-[9px]"
        alt="Modifier la liste"
      >
    </div>
    <div class="mt-[20px]">
      <products_list :products="list.products" @check-product="toggleCheckProduct" @remove-product="removeProduct" />
    </div>
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import TitleMedium from '@/components/title/title-medium.vue';
import { useGetOne } from '@/api/lists/useGetOne';
import ButtonItem from '@/components/form/button-item.vue';
import Products_list from '@/components/lists/products_list.vue';
import { useProducts } from '@/api/products/useProducts';

const route = useRoute()
const router = useRouter()
const { error, list, userList } = useGetOne(route.params.id.toString())
const { toggleCheckProduct, removeProduct } = useProducts(list)

const copyInvitationLink = () => {
  if (list.value)
    return navigator.clipboard.writeText(list.value.invitation_link)
  return
}
</script>
