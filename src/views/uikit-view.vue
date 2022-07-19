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
    </div>
  </div>
</template>

<script lang="ts" setup>

import TitleBig from '@/components/title/title-big.vue';
import TitleMedium from '@/components/title/title-medium.vue'
import NavbarMenu from '@/components/navigation/navbar-menu.vue';
import BackMenu from '@/components/navigation/back-menu.vue';
</script>

<style scoped>

</style>
