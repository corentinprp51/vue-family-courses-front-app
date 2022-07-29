<template>
  <div class="mt-[10px]">
    <title-medium>Nouvelle liste de courses</title-medium>
    <new-list-form
      v-model="newList"
      class="mt-[30px]"
      @generate-link="setInvitationLink"
      @submit-list-form="submitListForm(newList)"
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
import ErrorBanner from '@/components/errors/error-banner.vue';

const { error, submitListForm } = useSubmitListForm()
const newList = reactive({
  title: '',
  invitation_link: '',
})
const setInvitationLink = (invitationLink: string) => {
  newList.invitation_link = invitationLink
}
</script>
