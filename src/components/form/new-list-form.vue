<template>
  <form class="flex flex-col" @submit.prevent="emit('submitListForm')">
    <div>
      <input-with-label v-model="propsValue.title" type="text" label="Libellé" />
    </div>
    <div class="mt-[10px]">
      <input-invitation-link v-model="propsValue.invitation_link" @generate-link="emit('generateLink', $event)" />
    </div>
    <button-item type="submit" class="mt-[20px] py-[7px]">
      <span v-if="isEdit">Modifier</span>
      <span v-else>Créer</span>
    </button-item>
  </form>
</template>

<script lang="ts" setup>
import InputWithLabel from '@/components/form/input-with-label.vue';
import ButtonItem from '@/components/form/button-item.vue';
import { useVModel } from '@/composables/UseVModel';
import { ListHomePage } from '@/types/lists/ListHomePage';
import InputInvitationLink from '@/components/form/input-invitation-link.vue';

const props = withDefaults(defineProps<{modelValue: ListHomePage; isEdit?: boolean}>(), {
  isEdit: false
})
const propsValue = useVModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'submitListForm'): void,
  (e: 'generateLink', link: string): void,
}>()
</script>
