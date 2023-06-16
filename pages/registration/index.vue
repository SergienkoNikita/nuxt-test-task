<script setup lang="ts">
import { definePageMeta, navigateTo, ref } from '#imports';
import RegistrationForm from '~/components/common/registration-form/registration-form.vue';
import ClearFormModal from '~/components/common/clear-form-modal/clear-form-modal.vue';
import { useAuthStore } from '~/stores/use-auth-store';

definePageMeta({
  layout: 'authorization',
});

const authStore = useAuthStore();

const isClearFormModalVisible = ref<boolean>(false);

const onRedirectClick = (): void => {
  isClearFormModalVisible.value = true;
};

const onClearFormApply = (): void => {
  authStore.clearRegistrationForm();
  navigateTo('/login');
};

const onSubmitForm = (form): void => {
  // eslint-disable-next-line no-console
  console.log(form);
};
</script>

<template>
  <div class="w-[477px] flex flex-col items-center gap-[25px] text-left">
    <h1 class="w-full">
      Create your account
    </h1>
    <h4 class="tracking-wide text-lg w-full">
      Unlock all Features!
    </h4>
    <div class="w-[453px] m-auto text-center">
      <RegistrationForm @submit="onSubmitForm" />
      <p class="mt-4 text-xs-normal">
        <span>You have account? </span>

        <a
          class="text-blue-200 text-xs-medium"
          href="/login"
          @click.prevent="onRedirectClick"
        >
          Login now
        </a>
      </p>
    </div>
  </div>

  <ClearFormModal
    v-model="isClearFormModalVisible"
    @apply="onClearFormApply"
  />
</template>
