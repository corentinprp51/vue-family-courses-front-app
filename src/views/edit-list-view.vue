<template>
  <div class="mt-[10px]">
    <title-medium>Éditer la liste</title-medium>
    <new-list-form
      v-model="newList"
      class="mt-[30px]"
      is-edit
      @generate-link="setInvitationLink"
      @submit-list-form="submitListForm(newList, true)"
    />
    <error-banner v-if="error">
      {{ error }}
    </error-banner>
  </div>
</template>

<script lang="ts" setup>
import TitleMedium from '@/components/title/title-medium.vue';
import NewListForm from '@/components/form/new-list-form.vue';
import { reactive } from 'vue';
import { useSubmitListForm } from '@/api/lists/useSubmitListForm';
import ErrorBanner from '@/components/banner/error-banner.vue';
import { useListStore } from '@/store/list';

const { error, submitListForm } = useSubmitListForm()
const listStore = useListStore()
const newList = reactive({
  ...listStore.list
})
const setInvitationLink = (invitationLink: string) => {
  newList.invitation_link = invitationLink
}
</script>
