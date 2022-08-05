<template>
  <div>
    <div v-if="isPreloading" class="mx-auto flex justify-center mt-[20px]">
      <loading-spinner />
    </div>
    <div v-if="!isPreloading && list">
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
          @click="router.push(`/${list.id}/edit`)"
        >
      </div>
      <div class="mt-[20px]">
        <products_list
          v-if="list.products.length > 0"
          :products="list.products"
          @check-product="toggleCheckProduct"
          @remove-product="removeProduct"
        />
        <p v-else class="font-light italic text-third-text-color text-[16px] text-center">
          Aucun produits
        </p>
      </div>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import TitleMedium from '@/components/title/title-medium.vue';
import { useGetOne } from '@/api/lists/useGetOne';
import ButtonItem from '@/components/form/button-item.vue';
import Products_list from '@/components/lists/products_list.vue';
import { useProducts } from '@/api/products/useProducts';
import LoadingSpinner from '@/components/loader/loading-spinner.vue';
import { useSocketStore } from '@/store/socket';
import { Product } from '@/types/products/Product';
import { onMounted, onUnmounted } from 'vue';

const route = useRoute()
const router = useRouter()
const { error, list, userList, isPreloading } = useGetOne(route.params.id.toString())
const { toggleCheckProduct, removeProduct } = useProducts(list)

const copyInvitationLink = () => {
  if (list.value)
    return navigator.clipboard.writeText(list.value.invitation_link)
  return
}
const socketStore = useSocketStore()
onMounted(() => {
  if (socketStore.socket) {
    socketStore.socket.on('update:product', (data: Product) => {
      const product = list.value?.products.find((p) => p.id === data.id)
      if (product) {
        product.checked = data.checked
      }
    })
    socketStore.socket.on('delete:product', (productId: number) => {
      if (list.value) {
        list.value.products = list.value.products.filter((p) => p.id !== productId)
      }
    })
    socketStore.socket.on('add:product', (product: Product) => {
      if (list.value) {
        list.value.products.push(product)
      }
    })
  }
})
onUnmounted(() => {
  if(socketStore.socket) {
    socketStore.socket.removeAllListeners('update:product')
    socketStore.socket.removeAllListeners('delete:product')
    socketStore.socket.removeAllListeners('add:product')
  }
})

</script>
