<script setup lang="ts">
import { Pinia } from 'pinia';
import {
  definePageMeta, useNuxtApp, abortNavigation, navigateTo,
} from '#imports';
import { useAuthStore } from '~/stores/use-auth-store';
import { OTPForm } from '~/components/common/otp-form';

definePageMeta({
  // eslint-disable-next-line consistent-return
  middleware() {
    const app = useNuxtApp();
    if (app.$pinia) {
      const { registrationForm } = useAuthStore(app.$pinia as Pinia);
      if (!registrationForm.username) return abortNavigation();
    }
  },
  layout: 'authorization',
});

const authStore = useAuthStore();
const onOtpSubmit = async (): Promise<void> => {
  try {
    await authStore.login({
      username: authStore.registrationForm.username,
      password: authStore.registrationForm.password,
    });
    navigateTo('/home');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
</script>

<template>
  <div>
    <div class="w-[477px] flex flex-col items-center text-left m-auto mb-[25px]">
      <h1 class="w-full">
        Enter OTP
      </h1>

      <h4 class="text-lg w-full mt-4">
        <span class="tracking-wide">Sent OTP on </span>
        <span class="text-blue-200 text-lg-semibold">
          {{ authStore.registrationForm.username }}
        </span>
      </h4>

      <NuxtLink
        class="self-start text-blue-200 text-sm-bold"
        to="/registration"
      >
        Change email
      </NuxtLink>
    </div>

    <OTPForm @submit="onOtpSubmit" />
  </div>
</template>
