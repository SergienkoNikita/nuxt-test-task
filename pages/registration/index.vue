<script setup lang="ts">
import {
  computed, definePageMeta, navigateTo, ref,
} from '#imports';
import { RegistrationForm } from '~/components/common/registration-form';
import ClearFormModal from '~/components/common/clear-form-modal/clear-form-modal.vue';
import { useAuthStore } from '~/stores/use-auth-store';

definePageMeta({
  layout: 'authorization',
});

const authStore = useAuthStore();

const isClearFormModalVisible = ref<boolean>(false);

const isFormHasValues = computed<boolean>(() => (
  Boolean(Object.values(authStore.registrationForm).filter((value) => Boolean(value)).length)
));

const onClearFormApply = (): void => {
  authStore.clearRegistrationForm();
  navigateTo('/login');
};

const onLoginLinkClick = (): void => {
  if (isFormHasValues.value) {
    isClearFormModalVisible.value = true;
  } else {
    onClearFormApply();
  }
};

const onSubmitForm = (): void => {
  navigateTo('/verify');
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
          @click.prevent="onLoginLinkClick"
        >
          Login now
        </a>
      </p>
    </div>

    <ClearFormModal
      v-model="isClearFormModalVisible"
      @apply="onClearFormApply"
    />
  </div>
</template>
