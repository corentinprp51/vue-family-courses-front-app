<template>
  <div class="w-full bg-primary-color h-[40px] fixed top-0 flex items-center">
    <img
      src="@/assets/menu-back.svg"
      class="ml-[10px]"
      alt="<"
      @click="navigateBack()"
    >
  </div>
</template>

<script lang="ts" setup>

import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const navigateBack = (): void => {
  const urlArray = route.path.split('/')
  urlArray.pop()
  if (urlArray.length === 0 || !urlArray[0]) {
    router.push('/')
  } else {
    router.push(urlArray.join('/'))
  }
}
</script>
